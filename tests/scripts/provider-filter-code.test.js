import { describe, expect, it } from 'vitest';

import { getSearchCode } from '../../src/ui/scripts/search.js';
import { getStateCode } from '../../src/ui/scripts/state.js';

function createProviderFilterApi(initialSecrets) {
	// eslint-disable-next-line no-new-func
	const factory = new Function(
		'initialSecrets',
		`${getStateCode()}${getSearchCode()}
      secrets = initialSecrets;
      return { getSecretProviderName, getSecretsMatchingFilters };`,
	);

	return factory(initialSecrets);
}

describe('provider filtering runtime code', () => {
	it('uses name with issuer as a legacy compatibility fallback', () => {
		const api = createProviderFilterApi([]);

		expect(api.getSecretProviderName({ name: 'Google' })).toBe('Google');
		expect(api.getSecretProviderName({ issuer: 'OpenAI' })).toBe('OpenAI');
		expect(api.getSecretProviderName({ service: 'legacy-account@example.com' })).toBe('');
	});

	it('filters exact providers case-insensitively and combines with search', () => {
		const api = createProviderFilterApi([
			{ id: '1', name: 'Google', account: 'alice@example.com' },
			{ id: '2', name: 'google', account: 'bob@example.com' },
			{ id: '3', name: 'OpenAI', account: 'alice@example.com' },
		]);

		expect(api.getSecretsMatchingFilters('', 'GOOGLE')).toHaveLength(2);
		expect(api.getSecretsMatchingFilters('alice', 'google')).toEqual([{ id: '1', name: 'Google', account: 'alice@example.com' }]);
		expect(api.getSecretsMatchingFilters('', 'OpenAI')).toEqual([{ id: '3', name: 'OpenAI', account: 'alice@example.com' }]);
	});
});

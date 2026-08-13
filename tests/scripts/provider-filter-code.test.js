import { describe, expect, it } from 'vitest';

import { getSearchCode } from '../../src/ui/scripts/search.js';
import { getStateCode } from '../../src/ui/scripts/state.js';

function createProviderFilterApi(initialSecrets) {
	// eslint-disable-next-line no-new-func
	const factory = new Function(
		'initialSecrets',
      `${getStateCode()}${getSearchCode()}
      secrets = initialSecrets;
      return { getSecretProviderName, getProviderOptions, getSecretsMatchingFilters, getDuplicateAccountKeys, isDuplicateAccountSecret };`,
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

	it('builds a unique sorted provider list from existing service names', () => {
		const api = createProviderFilterApi([
			{ id: '1', name: 'OpenAI', account: 'alice@example.com' },
			{ id: '2', name: 'google', account: 'bob@example.com' },
			{ id: '3', name: 'Google', account: 'carol@example.com' },
		]);

		expect(api.getProviderOptions()).toEqual(['google', 'OpenAI']);
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

	it('filters duplicate account names only within the same provider', () => {
		const api = createProviderFilterApi([
			{ id: '1', name: 'Google', account: 'Alice@example.com' },
			{ id: '2', name: 'google', account: '/totp/Google:alice%40example.com' },
			{ id: '3', name: 'OpenAI', account: 'alice@example.com' },
			{ id: '4', name: 'Google', account: 'bob@example.com' },
			{ id: '5', name: 'Google', account: '' },
		]);

		expect(api.getDuplicateAccountKeys()).toHaveLength(1);
		expect(api.getSecretsMatchingFilters('', '', true).map(secret => secret.id)).toEqual(['1', '2']);
		expect(api.getSecretsMatchingFilters('', 'GOOGLE', true).map(secret => secret.id)).toEqual(['1', '2']);
		expect(api.getSecretsMatchingFilters('alice', '', true).map(secret => secret.id)).toEqual(['1', '2']);
		expect(api.isDuplicateAccountSecret({ id: '3', name: 'OpenAI', account: 'alice@example.com' })).toBe(false);
	});
});

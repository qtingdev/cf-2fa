import { describe, expect, it } from 'vitest';

import { getSearchCode } from '../../src/ui/scripts/search.js';
import { getStateCode } from '../../src/ui/scripts/state.js';

function createProviderFilterApi(initialSecrets) {
	// eslint-disable-next-line no-new-func
	const factory = new Function(
		'initialSecrets',
		`${getStateCode()}${getSearchCode()}
      secrets = initialSecrets;
      return {
        getSecretProviderName,
        getProviderOptions,
        getSecretsMatchingFilters,
        getDuplicateAccountKeys,
        isDuplicateAccountSecret,
        initProviderFilterHorizontalScroll
      };`,
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
		expect(api.getSecretsMatchingFilters('', '', true).map((secret) => secret.id)).toEqual(['1', '2']);
		expect(api.getSecretsMatchingFilters('', 'GOOGLE', true).map((secret) => secret.id)).toEqual(['1', '2']);
		expect(api.getSecretsMatchingFilters('alice', '', true).map((secret) => secret.id)).toEqual(['1', '2']);
		expect(api.isDuplicateAccountSecret({ id: '3', name: 'OpenAI', account: 'alice@example.com' })).toBe(false);
	});

	it('converts a desktop vertical wheel gesture into horizontal filter scrolling', () => {
		const api = createProviderFilterApi([]);
		let wheelHandler;
		let listenerOptions;
		const animationFrames = [];
		const container = {
			dataset: {},
			scrollWidth: 600,
			clientWidth: 240,
			scrollLeft: 0,
			ownerDocument: {
				defaultView: {
					requestAnimationFrame: (callback) => {
						animationFrames.push(callback);
						return animationFrames.length;
					},
				},
			},
			addEventListener: (_type, handler, options) => {
				wheelHandler = handler;
				listenerOptions = options;
			},
		};

		api.initProviderFilterHorizontalScroll(container);
		expect(container.dataset.horizontalWheelBound).toBe('true');
		expect(listenerOptions).toEqual({ passive: false });

		const preventDefault = vi.fn();
		wheelHandler({ deltaX: 0, deltaY: 80, deltaMode: 0, preventDefault });
		expect(container.scrollLeft).toBe(0);
		expect(animationFrames).toHaveLength(1);
		expect(preventDefault).toHaveBeenCalledOnce();

		let frameCount = 0;
		while (animationFrames.length > 0 && frameCount < 100) {
			animationFrames.shift()();
			frameCount += 1;
		}

		expect(container.scrollLeft).toBe(80);
		expect(frameCount).toBeGreaterThan(1);

		container.scrollLeft = 359.8;
		preventDefault.mockClear();
		wheelHandler({ deltaX: 0, deltaY: 80, deltaMode: 0, preventDefault });
		expect(container.scrollLeft).toBe(359.8);
		expect(preventDefault).not.toHaveBeenCalled();
	});
});

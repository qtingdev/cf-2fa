import { describe, expect, it } from 'vitest';

import { SERVICE_ICON_ALIASES, SERVICE_ICON_DEFINITIONS } from '../../src/ui/config/serviceIcons.js';
import { getCoreCode } from '../../src/ui/scripts/core.js';

function escapeHTML(value) {
	return String(value).replace(
		/[&<>"']/g,
		(character) =>
			({
				'&': '&amp;',
				'<': '&lt;',
				'>': '&gt;',
				'"': '&quot;',
				"'": '&#39;',
			})[character],
	);
}

function createServiceIconApi() {
	// eslint-disable-next-line no-new-func
	const factory = new Function(
		'document',
		'window',
		'setInterval',
		'escapeHTML',
		`${getCoreCode()}
      return { getServiceIcon, getServiceFaviconDomain, createServiceAvatar };`,
	);
	const eventTarget = { addEventListener() {} };

	return factory(eventTarget, eventTarget, () => 0, escapeHTML);
}

describe('local service icon registry', () => {
	it('contains validated Iconify color icons with valid aliases', () => {
		expect(Object.keys(SERVICE_ICON_DEFINITIONS)).toHaveLength(90);
		expect(Object.keys(SERVICE_ICON_ALIASES).length).toBeGreaterThan(150);
		expect(Object.values(SERVICE_ICON_DEFINITIONS).filter((definition) => definition.source.startsWith('logos:')).length).toBeGreaterThan(
			40,
		);

		Object.values(SERVICE_ICON_DEFINITIONS).forEach((definition) => {
			expect(definition.body).toContain('<');
			expect(definition.width).toBeGreaterThan(0);
			expect(definition.height).toBeGreaterThan(0);
			expect(definition.source).toMatch(/^(logos|simple-icons):/);
			if (definition.body.includes('currentColor')) {
				expect(definition.color).toMatch(/^#[0-9A-F]{6}$/);
			} else {
				expect(definition.color).toBeNull();
			}
			expect(typeof definition.adaptive).toBe('boolean');
		});

		expect(SERVICE_ICON_DEFINITIONS.google.source).toBe('logos:google-icon');
		expect(SERVICE_ICON_DEFINITIONS.google.body).toContain('#4285f4');
		expect(SERVICE_ICON_DEFINITIONS.google.body).toContain('#34a853');

		Object.values(SERVICE_ICON_ALIASES).forEach((iconId) => {
			expect(SERVICE_ICON_DEFINITIONS[iconId]).toBeDefined();
		});
	});

	it('prefers the longest provider alias and resolves favicon fallback domains', () => {
		const api = createServiceIconApi();

		expect(api.getServiceIcon('Google Cloud Production')).toEqual(SERVICE_ICON_DEFINITIONS.googlecloud);
		expect(api.getServiceIcon('Microsoft Azure Admin')).toEqual(SERVICE_ICON_DEFINITIONS.microsoftazure);
		expect(api.getServiceIcon('OpenAI:alice@example.com')).toEqual(SERVICE_ICON_DEFINITIONS.openai);
		expect(api.getServiceIcon('未收录服务')).toBeNull();
		expect(api.getServiceFaviconDomain('Airbnb', 'alice@gmail.com')).toBe('airbnb.com');
		expect(api.getServiceFaviconDomain('https://custom.example.cn/path', '')).toBe('custom.example.cn');
		expect(api.getServiceFaviconDomain('Custom Service', 'alice@custom-service.io')).toBe('custom-service.io');
		expect(api.getServiceFaviconDomain('Custom Service', 'alice@gmail.com')).toBe('customservice.com');
		expect(api.getServiceFaviconDomain('未收录供应商', 'alice@example.com')).toBe('');
		expect(getCoreCode()).toContain('/api/favicon/');
	});

	it('renders color SVGs, favicon overlays, and a Stripe fallback initial', () => {
		const api = createServiceIconApi();
		const googleAvatar = api.createServiceAvatar('Google', SERVICE_ICON_DEFINITIONS.google, '');
		const githubAvatar = api.createServiceAvatar('GitHub', SERVICE_ICON_DEFINITIONS.github, 'table-service-avatar');
		const faviconAvatar = api.createServiceAvatar('Airbnb', null, '', 'alice@gmail.com');
		const fallbackAvatar = api.createServiceAvatar('Unknown Provider', null, '', 'alice@example.com');

		expect(googleAvatar).toContain('class="service-brand-icon"');
		expect(googleAvatar).toContain('viewBox="0 0 256 262"');
		expect(googleAvatar).toContain(SERVICE_ICON_DEFINITIONS.google.body);
		expect(googleAvatar).not.toContain('<img');
		expect(githubAvatar).toContain('service-brand-icon-adaptive');
		expect(githubAvatar).toContain('table-service-avatar');
		expect(faviconAvatar).toContain('<span class="service-avatar-fallback" aria-hidden="true">A</span>');
		expect(faviconAvatar).toContain('class="service-favicon"');
		expect(faviconAvatar).toContain('/api/favicon/airbnb.com');
		expect(faviconAvatar).toContain('onerror="this.remove();"');
		expect(fallbackAvatar).toContain('<span class="service-avatar-fallback" aria-hidden="true">U</span>');
		expect(fallbackAvatar).not.toContain('class="service-favicon"');
	});
});

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
      return { getServiceIcon, createServiceAvatar };`,
	);
	const eventTarget = { addEventListener() {} };

	return factory(eventTarget, eventTarget, () => 0, escapeHTML);
}

describe('local service icon registry', () => {
	it('contains a validated 24px Simple Icons set with valid aliases', () => {
		expect(Object.keys(SERVICE_ICON_DEFINITIONS)).toHaveLength(90);
		expect(Object.keys(SERVICE_ICON_ALIASES).length).toBeGreaterThan(150);

		Object.values(SERVICE_ICON_DEFINITIONS).forEach((definition) => {
			expect(definition.body).toContain('fill="currentColor"');
			expect(definition.color).toMatch(/^#[0-9A-F]{6}$/);
			expect(typeof definition.adaptive).toBe('boolean');
		});

		Object.values(SERVICE_ICON_ALIASES).forEach((iconId) => {
			expect(SERVICE_ICON_DEFINITIONS[iconId]).toBeDefined();
		});
	});

	it('prefers the longest provider alias and never emits a favicon request', () => {
		const api = createServiceIconApi();

		expect(api.getServiceIcon('Google Cloud Production')).toEqual(SERVICE_ICON_DEFINITIONS.googlecloud);
		expect(api.getServiceIcon('Microsoft Azure Admin')).toEqual(SERVICE_ICON_DEFINITIONS.microsoftazure);
		expect(api.getServiceIcon('OpenAI:alice@example.com')).toEqual(SERVICE_ICON_DEFINITIONS.openai);
		expect(api.getServiceIcon('未收录服务')).toBeNull();
		expect(getCoreCode()).not.toContain('/api/favicon/');
	});

	it('renders inline SVGs and a Stripe fallback initial', () => {
		const api = createServiceIconApi();
		const openAIAvatar = api.createServiceAvatar('OpenAI', SERVICE_ICON_DEFINITIONS.openai, '');
		const githubAvatar = api.createServiceAvatar('GitHub', SERVICE_ICON_DEFINITIONS.github, 'table-service-avatar');
		const fallbackAvatar = api.createServiceAvatar('Unknown Provider', null, '');

		expect(openAIAvatar).toContain('class="service-brand-icon"');
		expect(openAIAvatar).toContain('viewBox="0 0 24 24"');
		expect(openAIAvatar).toContain(SERVICE_ICON_DEFINITIONS.openai.body);
		expect(openAIAvatar).not.toContain('<img');
		expect(githubAvatar).toContain('service-brand-icon-adaptive');
		expect(githubAvatar).toContain('table-service-avatar');
		expect(fallbackAvatar).toContain('<span class="service-avatar-fallback" aria-hidden="true">U</span>');
	});
});

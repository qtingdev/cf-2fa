import { describe, expect, it } from 'vitest';

import { createMainPage } from '../../src/ui/page.js';
import { getComponentStyles } from '../../src/ui/styles/components.js';
import { getResponsiveStyles } from '../../src/ui/styles/responsive.js';

describe('settings page copy', () => {
	it('explains that the default export format also applies to newly created backups', async () => {
		const response = await createMainPage({ lazyLoad: false });
		const html = await response.text();

		expect(html).toContain('也会用于新创建的手动备份、自动备份和远程自动备份文件');
		expect(html).not.toContain('不会改变内部备份的完整格式');
	});

	it('renders grid/list view switch controls', async () => {
		const response = await createMainPage({ lazyLoad: false });
		const html = await response.text();

		expect(html).toContain('class="view-controls"');
		expect(html).toContain('onclick="selectViewMode(\'grid\')"');
		expect(html).toContain('onclick="selectViewMode(\'list\')"');
		expect(html).toContain('.secrets-list.view-list');
	});

	it('renders the total account count', async () => {
		const response = await createMainPage({ lazyLoad: false });
		const html = await response.text();

		expect(html).toContain('id="secretCount"');
		expect(html).toContain('id="secretCountValue"');
		expect(html).toContain('个账号');
	});

	it('renders a provider filter row without adding tags to cards', async () => {
		const response = await createMainPage({ lazyLoad: false });
		const html = await response.text();
		const accountCountIndex = html.indexOf('id="secretCount"');
		const providerFiltersIndex = html.indexOf('id="providerFilters"');

		expect(html).toContain('id="providerFilters"');
		expect(html).toContain('按提供商筛选');
		expect(html).toContain('provider-filter-option');
		expect(html).not.toContain('provider-filter-button');
		expect(providerFiltersIndex).toBeGreaterThan(accountCountIndex);
	});

	it('uses compact spacing for grid and list account cards', async () => {
		const response = await createMainPage({ lazyLoad: false });
		const html = await response.text();

		expect(html).toContain('grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));');
		expect(html).toContain('.secrets-list.view-list .secret-card');
		expect(html).toContain('padding: 8px 10px;');
	});

	it('keeps full account names visible without legacy responsive card overrides', () => {
		const componentStyles = getComponentStyles();
		const responsiveStyles = getResponsiveStyles();
		const accountStyle = componentStyles.match(/\.secret-text \.secret-account \{([^}]*)\}/)?.[1] || '';
		const listAccountStyle = componentStyles.match(/\.secrets-list\.view-list \.secret-text \.secret-account \{([^}]*)\}/)?.[1] || '';

		expect(accountStyle).toContain('white-space: normal;');
		expect(accountStyle).toContain('overflow-wrap: anywhere;');
		expect(accountStyle).toContain('text-align: left;');
		expect(accountStyle).not.toContain('text-overflow: ellipsis;');
		expect(listAccountStyle).toContain('white-space: normal;');
		expect(listAccountStyle).toContain('overflow-wrap: anywhere;');
		expect(listAccountStyle).toContain('text-align: left;');
		expect(responsiveStyles).not.toMatch(/\.secret-card\s*\{[^}]*box-shadow:\s*none;/s);
		expect(responsiveStyles).not.toMatch(/\.otp-code\s*\{[^}]*font-size:\s*34px;/s);
		expect(responsiveStyles).not.toMatch(/\.otp-countdown-ring\s*\{[^}]*width:\s*26px;/s);
	});

	it('shows the next OTP without a visible next label', async () => {
		const response = await createMainPage({ lazyLoad: false });
		const html = await response.text();

		expect(html).toContain('class="otp-next-container"');
		expect(html).toContain('class="otp-next-code"');
		expect(html).not.toContain('class="otp-next-label"');
	});

	it('renders creation time and a duplicate account filter', async () => {
		const response = await createMainPage({ lazyLoad: false });
		const html = await response.text();

		expect(html).toContain('class="secret-created-at"');
		expect(html).toContain('创建时间 ');
		expect(html).toContain('duplicate-account-filter');
		expect(html).toContain("renderIcon('copy', 'ui-icon')");
	});
});

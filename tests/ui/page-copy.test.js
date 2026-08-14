import { describe, expect, it } from 'vitest';

import { createMainPage } from '../../src/ui/page.js';
import { getBaseStyles } from '../../src/ui/styles/base.js';
import { getComponentStyles } from '../../src/ui/styles/components.js';
import { getResponsiveStyles } from '../../src/ui/styles/responsive.js';
import { getVariables } from '../../src/ui/styles/variables.js';

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
		expect(html).toContain('class="classic-table-wrap"');
		expect(html).toContain('class="classic-table"');
	});

	it('renders the total account count', async () => {
		const response = await createMainPage({ lazyLoad: false });
		const html = await response.text();

		expect(html).toContain('id="secretCount"');
		expect(html).toContain('id="secretCountValue"');
		expect(html).toContain('个账号');
		expect(html).not.toMatch(/id="secretCount"[^>]*display:\s*none/);
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

	it('uses compact grid cards and the classic prototype table for list view', async () => {
		const response = await createMainPage({ lazyLoad: false });
		const html = await response.text();

		expect(html).toContain('grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));');
		expect(html).toContain('<th scope="col">服务 / 账户</th>');
		expect(html).toContain('<th scope="col">当前动态验证码</th>');
		expect(html).toContain('<th scope="col">下一期</th>');
		expect(html).toContain('padding: 14px 18px;');
	});

	it('keeps full account names visible without legacy responsive card overrides', () => {
		const componentStyles = getComponentStyles();
		const responsiveStyles = getResponsiveStyles();
		const accountStyle = componentStyles.match(/\.secret-text \.secret-account \{([^}]*)\}/)?.[1] || '';
		const tableAccountStyle = componentStyles.match(/\.table-service-account \{([^}]*)\}/)?.[1] || '';

		expect(accountStyle).toContain('white-space: normal;');
		expect(accountStyle).toContain('overflow-wrap: anywhere;');
		expect(accountStyle).toContain('text-align: left;');
		expect(accountStyle).not.toContain('text-overflow: ellipsis;');
		expect(tableAccountStyle).toContain('overflow-wrap: anywhere;');
		expect(tableAccountStyle).toContain('word-break: break-word;');
		expect(responsiveStyles).not.toMatch(/\.secret-card\s*\{[^}]*box-shadow:\s*none;/s);
		expect(responsiveStyles).not.toMatch(/\.otp-code\s*\{[^}]*font-size:\s*34px;/s);
		expect(responsiveStyles).not.toMatch(/\.otp-countdown-ring\s*\{[^}]*width:\s*26px;/s);
	});

	it('shows the next OTP with the prototype next-period label', async () => {
		const response = await createMainPage({ lazyLoad: false });
		const html = await response.text();

		expect(html).toContain('class="otp-next-container"');
		expect(html).toContain('class="otp-next-code"');
		expect(html).toContain('class="otp-next-label">下一期</span>');
	});

	it('uses transparent full-size service icons', () => {
		const componentStyles = getComponentStyles();
		const serviceIconStyle = componentStyles.match(/\.service-icon \{([^}]*)\}/)?.[1] || '';
		const serviceImageStyle = componentStyles.match(/\.service-icon img \{([^}]*)\}/)?.[1] || '';

		expect(serviceIconStyle).toContain('background: transparent;');
		expect(serviceIconStyle).toContain('border: none;');
		expect(serviceIconStyle).toContain('box-shadow: none;');
		expect(serviceImageStyle).toContain('width: 100%;');
		expect(serviceImageStyle).toContain('height: 100%;');
	});

	it('matches the prototype toolbar and toast dimensions', async () => {
		const response = await createMainPage({ lazyLoad: false });
		const html = await response.text();
		const baseStyles = getBaseStyles();
		const responsiveStyles = getResponsiveStyles();
		const toolbarStyle = baseStyles.match(/\.classic-toolbar, \.search-section \{([^}]*)\}/)?.[1] || '';
		const searchStyle = baseStyles.match(/\.classic-search-wrap, \.search-input-wrapper \{([^}]*)\}/)?.[1] || '';
		const toastStyle = responsiveStyles.match(/\.center-toast \{([^}]*)\}/)?.[1] || '';

		expect(toolbarStyle).toContain('padding: 14px 18px;');
		expect(toolbarStyle).toContain('gap: 16px;');
		expect(searchStyle).toContain('gap: 10px;');
		expect(searchStyle).toContain('padding: 6px 12px;');
		expect(searchStyle).toContain('min-width: 260px;');
		expect(searchStyle).toContain('max-width: 420px;');
		expect(toastStyle).toContain('bottom: calc(24px + env(safe-area-inset-bottom, 0px));');
		expect(toastStyle).toContain('background: #0a2540;');
		expect(toastStyle).toContain('border-radius: 12px;');
		expect(html).toContain('class="toast-code-badge" hidden');
		expect(html).toContain('}, 2500);');
	});

	it('uses a scoped theme transition instead of overriding every element', async () => {
		const response = await createMainPage({ lazyLoad: false });
		const html = await response.text();
		const variables = getVariables();

		expect(html).toContain("typeof document.startViewTransition === 'function'");
		expect(variables).toContain('::view-transition-old(root)');
		expect(variables).not.toContain('html.theme-transition *');
	});

	it('renders creation time and a duplicate account filter', async () => {
		const response = await createMainPage({ lazyLoad: false });
		const html = await response.text();

		expect(html).toContain('class="secret-created-at"');
		expect(html).toContain('创建时间 ');
		expect(html).not.toContain('创建时间未知');
		expect(html).toContain('createdAtText ? \'<p class="secret-created-at"');
		expect(html).toContain('duplicate-account-filter');
		expect(html).toContain("renderIcon('copy', 'ui-icon')");
	});
});

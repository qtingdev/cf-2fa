import { describe, expect, it } from 'vitest';

import { icon } from '../../src/ui/icons.js';
import { createMainPage } from '../../src/ui/page.js';
import { getSearchCode } from '../../src/ui/scripts/search.js';
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

	it('uses QR scanning as the primary add-secret action', async () => {
		const response = await createMainPage({ lazyLoad: false });
		const html = await response.text();
		const primaryAction = html.match(/<button[^>]*class="btn-stripe-primary stripe-btn-primary"[^>]*>[\s\S]*?<\/button>/)?.[0] || '';

		expect(primaryAction).toContain('onclick="showQRScanner()"');
		expect(primaryAction).toContain('aria-label="扫描二维码添加密钥"');
		expect(primaryAction).toContain('<span>扫码添加</span>');
		expect(primaryAction).toContain(icon('scanLine', 'ui-icon'));
		expect(primaryAction).not.toContain(icon('qrCode', 'ui-icon'));
		expect(primaryAction).not.toContain('showAddModal()');

		const mobileStyles = getBaseStyles().slice(getBaseStyles().indexOf('@media (max-width: 600px)'));
		expect(mobileStyles).toMatch(/\.stripe-btn-primary\s*\{[^}]*justify-content:\s*center;[^}]*padding:\s*0;/s);
	});

	it('renders the account count only in the top summary', async () => {
		const response = await createMainPage({ lazyLoad: false });
		const html = await response.text();

		expect(html).toContain('id="metricSecretCount"');
		expect(html).toContain('受保护账号');
		expect(html).not.toContain('id="secretCount"');
		expect(html).not.toContain('id="secretCountValue"');
		expect(html).not.toContain("document.getElementById('secretCount')");
	});

	it('uses concise dashboard copy and system status indicators', async () => {
		const response = await createMainPage({ lazyLoad: false });
		const html = await response.text();
		const header = html.match(/<header class="stripe-nav">[\s\S]*?<\/header>/)?.[0] || '';
		const metrics = html.slice(
			html.indexOf('<div class="classic-kpi-bar stripe-metrics-bar">'),
			html.indexOf('<div class="classic-toolbar search-section">'),
		);

		expect(header).toContain('2FA Vault');
		expect(header).not.toContain('2FA Authenticator');
		expect(header).not.toContain('class="stripe-brand-text"');
		expect(metrics).toContain('class="kpi-title metric-label">存储端点</div>');
		expect(metrics).toContain('class="kpi-title metric-label">动态刷新</div>');
		expect(metrics).toContain('class="metric-status success"');
		expect(metrics).toContain('class="metric-status info"');
		expect(metrics).not.toContain('Protected Accounts');
		expect(metrics).not.toContain('Sync Endpoints');
		expect(metrics).not.toContain('Cadence');
		expect(metrics).not.toContain('100% 同步就绪');
		expect(metrics).not.toContain('实时心跳同步');
	});

	it('reveals the grid copy hint only while the card is active', async () => {
		const response = await createMainPage({ lazyLoad: false });
		const html = await response.text();
		const componentStyles = getComponentStyles();
		const hintStyle = componentStyles.match(/\.quick-copy-hint \{([^}]*)\}/)?.[1] || '';

		expect(html).not.toContain('当前 2FA 验证码');
		expect(html).toContain('tabindex="0" role="button"');
		expect(html).toContain('onkeydown="handleSecretCardKeydown(event');
		expect(hintStyle).toContain('opacity: 0;');
		expect(hintStyle).toContain('visibility: hidden;');
		expect(hintStyle).toContain('pointer-events: none;');
		expect(componentStyles).toContain('.secret-card:hover .quick-copy-hint,');
		expect(componentStyles).toContain('.secret-card:focus-visible .quick-copy-hint,');
		expect(componentStyles).toContain('.secret-card:focus-within .quick-copy-hint');
	});

	it('renders a provider filter row without adding tags to cards', async () => {
		const response = await createMainPage({ lazyLoad: false });
		const html = await response.text();
		const baseStyles = getBaseStyles();
		const accountCountIndex = html.indexOf('id="metricSecretCount"');
		const providerFiltersIndex = html.indexOf('id="providerFilters"');
		const providerFiltersStyle = baseStyles.match(/\.classic-filter-chips, \.provider-filters \{([^}]*)\}/)?.[1] || '';
		const providerOptionStyle = baseStyles.match(/\.chip-btn, \.provider-filter-option \{([^}]*)\}/)?.[1] || '';

		expect(html).toContain('id="providerFilters"');
		expect(html).toContain('按提供商筛选');
		expect(html).toContain('provider-filter-option');
		expect(html).not.toContain('provider-filter-button');
		expect(providerFiltersIndex).toBeGreaterThan(accountCountIndex);
		expect(providerFiltersStyle).toContain('flex-wrap: nowrap;');
		expect(providerFiltersStyle).toContain('max-width: 100%;');
		expect(providerFiltersStyle).toContain('overflow-x: auto;');
		expect(providerFiltersStyle).toContain('overflow-y: hidden;');
		expect(providerFiltersStyle).toContain('-webkit-overflow-scrolling: touch;');
		expect(providerFiltersStyle).toContain('scrollbar-width: thin;');
		expect(providerFiltersStyle).toContain('padding-bottom: 4px;');
		expect(providerOptionStyle).toContain('white-space: nowrap;');
		expect(providerOptionStyle).toContain('flex: 0 0 auto;');
		expect(baseStyles).toContain('.provider-filters::-webkit-scrollbar-thumb');
		expect(baseStyles).toContain('@media (hover: none), (pointer: coarse)');
		expect(getSearchCode()).toContain("container.addEventListener('wheel'");
		expect(getSearchCode()).toContain('{ passive: false }');
	});

	it('uses compact grid cards and the classic prototype table for list view', async () => {
		const response = await createMainPage({ lazyLoad: false });
		const html = await response.text();
		const componentStyles = getComponentStyles();
		const variables = getVariables();
		const tableWrapStyle = componentStyles.match(/\.classic-table-wrap \{([^}]*)\}/)?.[1] || '';
		const tableCellStyle = componentStyles.match(/\.classic-table td \{([^}]*)\}/)?.[1] || '';
		const tableBadgeStyle =
			componentStyles.match(/\.classic-table \.table-type-badge,[\s\S]*?\.classic-table \.table-type-badge\.hotp-badge \{([^}]*)\}/)?.[1] ||
			'';
		const tableCodeStyle = componentStyles.match(/\.classic-table \.table-code-cell \{([^}]*)\}/)?.[1] || '';
		const progressTrackStyle = componentStyles.match(/\.table-progress-track \{([^}]*)\}/)?.[1] || '';
		const progressFillStyle = componentStyles.match(/\.table-progress-fill \{([^}]*)\}/)?.[1] || '';

		expect(html).toContain('grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));');
		expect(html).toContain('<th scope="col">服务 / 账户</th>');
		expect(html).toContain('<th scope="col">当前动态验证码</th>');
		expect(html).toContain('<th scope="col">下一期</th>');
		expect(html).toContain('padding: 14px 18px;');
		expect(tableWrapStyle).not.toContain('scrollbar-gutter');
		expect(tableCellStyle).toContain('border-bottom: 1px solid var(--table-row-divider);');
		expect(tableBadgeStyle).toContain('background: var(--stripe-canvas);');
		expect(tableBadgeStyle).toContain('color: var(--stripe-slate);');
		expect(tableBadgeStyle).toContain('font-size: 11px;');
		expect(tableBadgeStyle).toContain('padding: 3px 8px;');
		expect(tableCodeStyle).toContain('color: var(--stripe-navy);');
		expect(tableCodeStyle).toContain('font-size: 16px;');
		expect(tableCodeStyle).toContain('letter-spacing: 1px;');
		expect(progressTrackStyle).toContain('background: var(--stripe-border);');
		expect(progressFillStyle).toContain('background: var(--stripe-blurple);');
		expect(variables).toContain('--table-row-divider: #f0f3f7;');
		expect(variables).toContain('--table-row-divider: #182234;');
		expect(html).toContain("return normalizedToken.slice(0, 3) + ' ' + normalizedToken.slice(3);");
		expect(html).toContain("return normalizedToken.slice(0, 4) + ' ' + normalizedToken.slice(4);");
		expect(html).toContain('otpElement.textContent = formatOTPDisplay(currentToken);');
		expect(html).toContain('nextOtpElement.textContent = formatOTPDisplay(nextToken);');
		expect(html).toContain("const otpText = otpElement.textContent.replace(/\\s+/g, '');");
		expect(html).toContain("const nextOtpText = nextOtpElement.textContent.replace(/\\s+/g, '');");
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

	it('uses transparent 40px grid icons, 32px list icons, and Stripe fallback avatars', () => {
		const componentStyles = getComponentStyles();
		const serviceIconStyle = componentStyles.match(/\.service-icon \{([^}]*)\}/)?.[1] || '';
		const serviceBrandIconStyle = componentStyles.match(/\n    \.service-brand-icon \{([^}]*)\}/)?.[1] || '';
		const tableIconStyle = componentStyles.match(/\.service-icon\.table-service-avatar \.service-brand-icon \{([^}]*)\}/)?.[1] || '';
		const fallbackStyle = componentStyles.match(/\.service-avatar-fallback \{([^}]*)\}/)?.[1] || '';

		expect(serviceIconStyle).toContain('background: transparent;');
		expect(serviceIconStyle).toContain('border: none;');
		expect(serviceIconStyle).toContain('box-shadow: none;');
		expect(serviceIconStyle).toContain('width: 40px;');
		expect(serviceIconStyle).toContain('height: 40px;');
		expect(serviceBrandIconStyle).toContain('width: 40px;');
		expect(serviceBrandIconStyle).toContain('height: 40px;');
		expect(tableIconStyle).toContain('width: 32px;');
		expect(tableIconStyle).toContain('height: 32px;');
		expect(fallbackStyle).toContain('background: var(--stripe-blurple);');
		expect(fallbackStyle).toContain('color: #ffffff;');
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

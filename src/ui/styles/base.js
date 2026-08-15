/**
 * 基础样式模块 - Stripe Dashboard 经典设计系统规范
 */
export function getBaseStyles() {
	return `    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    body {
      font-family: var(--font-sans, 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif);
      background: var(--bg-primary);
      min-height: 100vh;
      padding: 0;
      color: var(--text-primary);
      overflow-x: hidden;
      line-height: 1.5;
    }

    .ui-icon {
      width: 18px;
      height: 18px;
      flex-shrink: 0;
      display: inline-block;
      vertical-align: -0.125em;
    }

    .spin-icon {
      animation: icon-spin 1s linear infinite;
    }

    @keyframes icon-spin {
      to { transform: rotate(360deg); }
    }

    /* ========== Stripe 经典顶部导航栏 ========== */
    .stripe-nav {
      position: sticky;
      top: 0;
      z-index: 950;
      background: var(--stripe-surface);
      border-bottom: 1px solid var(--stripe-border);
      box-shadow: var(--shadow-stripe-xs);
      backdrop-filter: blur(16px);
    }

    .stripe-nav-inner {
      max-width: 1440px;
      margin: 0 auto;
      padding: 10px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }

    .stripe-brand {
      display: flex;
      align-items: center;
      cursor: pointer;
      user-select: none;
      flex-shrink: 0;
    }

    .stripe-logo-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: var(--stripe-blurple);
      color: #ffffff;
      padding: 6px 12px;
      border-radius: 8px;
      font-weight: 700;
      font-size: 13px;
      letter-spacing: 0;
      box-shadow: 0 2px 6px rgba(99, 91, 255, 0.3);
      white-space: nowrap;
      flex-shrink: 0;
    }

    .stripe-nav-actions {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .stripe-nav-btn, .icon-btn {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      border: 1px solid var(--stripe-border);
      background: var(--stripe-surface);
      color: var(--stripe-slate);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.15s ease;
    }

    .stripe-nav-btn:hover, .icon-btn:hover {
      border-color: var(--stripe-muted);
      color: var(--stripe-navy);
      box-shadow: var(--shadow-stripe-xs);
    }

    .stripe-nav-btn:focus-visible, .icon-btn:focus-visible {
      outline: none;
      box-shadow: 0 0 0 3px var(--stripe-blurple-ring);
    }

    .theme-icon-container {
      position: relative;
      width: 18px;
      height: 18px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    /* 主题图标状态切换 */
    .theme-icon-container .theme-sun,
    .theme-icon-container .theme-moon {
      position: absolute;
      inset: 0;
      width: 18px;
      height: 18px;
      transition:
        opacity 0.16s ease,
        transform 0.2s cubic-bezier(0.2, 0, 0, 1),
        color 0.16s ease;
    }

    [data-theme="dark"] .theme-sun {
      opacity: 0;
      transform: rotate(45deg) scale(0.72);
    }
    [data-theme="dark"] .theme-moon {
      opacity: 1;
      transform: rotate(0) scale(1);
      color: #facc15;
    }
    :root:not([data-theme="dark"]) .theme-sun {
      opacity: 1;
      transform: rotate(0) scale(1);
      color: #f59e0b;
    }
    :root:not([data-theme="dark"]) .theme-moon {
      opacity: 0;
      transform: rotate(-35deg) scale(0.72);
    }

    .btn-stripe-primary, .stripe-btn-primary {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: var(--stripe-blurple);
      color: #ffffff;
      padding: 7px 14px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 600;
      border: none;
      cursor: pointer;
      box-shadow: 0 2px 5px rgba(99, 91, 255, 0.25);
      transition: all 0.15s ease;
      white-space: nowrap;
      height: 36px;
    }

    .btn-stripe-primary:hover, .stripe-btn-primary:hover {
      background: var(--stripe-blurple-hover);
      box-shadow: 0 4px 10px rgba(99, 91, 255, 0.35);
    }

    .btn-stripe-primary:active, .stripe-btn-primary:active {
      background: var(--stripe-blurple-active);
    }

    /* ========== 主容器与内容区 ========== */
    .container {
      max-width: 1440px;
      margin: 0 auto;
      background: transparent;
      padding: 0 24px;
      min-height: calc(100vh - 65px);
      width: 100%;
    }

    .content {
      padding: 24px 0 40px 0;
    }

    /* ========== Stripe KPI 状态统计条 (方案一经典版) ========== */
    .classic-kpi-bar, .stripe-metrics-bar {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      margin-bottom: 20px;
    }

    .classic-kpi-card, .stripe-metric-card {
      background: var(--stripe-surface);
      border: 1px solid var(--stripe-border);
      border-radius: 12px;
      padding: 16px 20px;
      box-shadow: var(--shadow-stripe-xs);
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: box-shadow 0.15s ease, border-color 0.15s ease;
    }

    .classic-kpi-card:hover, .stripe-metric-card:hover {
      box-shadow: var(--shadow-stripe-sm);
      border-color: rgba(99, 91, 255, 0.35);
    }

    .kpi-title, .metric-label {
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--stripe-muted);
      margin-bottom: 6px;
    }

    .kpi-value-row, .metric-value-row {
      display: flex;
      align-items: baseline;
      gap: 8px;
      position: static;
    }

    .kpi-number, .metric-num {
      font-size: 24px;
      font-weight: 700;
      color: var(--stripe-navy);
      letter-spacing: 0;
      font-family: var(--font-sans);
      position: static !important;
      display: inline-block;
    }

    .metric-status {
      font-size: 11px;
      font-weight: 600;
      display: inline-flex;
      align-items: center;
      gap: 5px;
      white-space: nowrap;
      color: var(--stripe-muted);
    }

    .metric-status-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: currentColor;
      flex: 0 0 6px;
    }

    .metric-status.success {
      color: var(--stripe-green-dark, #0e6245);
    }

    [data-theme="dark"] .metric-status.success {
      color: #00d97e;
    }

    .metric-status.info {
      color: var(--stripe-blurple);
    }

    .kpi-icon-wrap {
      width: 42px;
      height: 42px;
      border-radius: 10px;
      background: var(--stripe-canvas);
      border: 1px solid var(--stripe-border);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--stripe-blurple);
      flex-shrink: 0;
    }

    /* ========== 搜索与控制工具栏 (方案一经典版) ========== */
    .classic-toolbar, .search-section {
      background: var(--stripe-surface);
      border: 1px solid var(--stripe-border);
      border-radius: 12px;
      padding: 14px 18px;
      box-shadow: var(--shadow-stripe-xs);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      flex-wrap: wrap;
      margin-bottom: 20px;
      position: relative;
    }

    .classic-search-wrap, .search-input-wrapper {
      display: flex;
      align-items: center;
      gap: 10px;
      background: var(--stripe-canvas);
      border: 1px solid var(--stripe-border);
      border-radius: 8px;
      padding: 6px 12px;
      flex: 1;
      min-width: 260px;
      max-width: 420px;
      transition: border-color 0.15s ease, box-shadow 0.15s ease, background-color 0.15s ease;
      position: relative;
    }

    .classic-search-wrap:focus-within, .search-input-wrapper:focus-within {
      background: var(--stripe-surface);
      border-color: var(--stripe-blurple);
      box-shadow: 0 0 0 3px var(--stripe-blurple-ring);
    }

    .search-scan-button {
      background: transparent;
      border: none;
      color: var(--stripe-muted);
      cursor: pointer;
      width: 20px;
      height: 20px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      border-radius: 5px;
      transition: all 0.15s ease;
      flex-shrink: 0;
    }

    .search-scan-button .ui-icon,
    .search-icon .ui-icon,
    .search-clear .ui-icon {
      width: 16px;
      height: 16px;
    }

    .search-scan-button:hover {
      color: var(--stripe-blurple);
      background: var(--stripe-blurple-light);
    }

    .search-icon {
      color: var(--stripe-muted);
      user-select: none;
      display: flex;
      align-items: center;
      flex-shrink: 0;
    }

    .classic-search-input, .search-input {
      flex: 1;
      border: none;
      outline: none;
      font-size: 13px;
      background: transparent;
      color: var(--stripe-navy);
      height: 20px;
      line-height: 20px;
      font-family: var(--font-sans);
      min-width: 0;
    }

    .search-clear {
      background: none;
      border: none;
      width: 20px;
      height: 20px;
      padding: 0;
      color: var(--stripe-muted);
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: color 0.15s ease;
      flex-shrink: 0;
    }

    .search-clear:hover {
      color: var(--stripe-red);
    }

    /* 过滤芯片 (Chips) */
    .classic-filter-chips, .provider-filters {
      display: flex;
      align-items: center;
      gap: 6px;
      flex-wrap: nowrap;
      flex: 1;
      max-width: 100%;
      min-width: 0;
      overflow-x: auto;
      overflow-y: hidden;
      overscroll-behavior-inline: contain;
      scroll-behavior: smooth;
      scroll-padding-inline: 2px;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
    }

    .classic-filter-chips::-webkit-scrollbar,
    .provider-filters::-webkit-scrollbar {
      display: none;
    }

    .chip-btn, .provider-filter-option {
      border: 1px solid var(--stripe-border);
      background: var(--stripe-canvas);
      color: var(--stripe-slate);
      padding: 5px 11px;
      border-radius: 7px;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.15s ease;
      display: inline-flex;
      align-items: center;
      gap: 5px;
      font-family: var(--font-sans);
      line-height: 1.4;
      user-select: none;
      white-space: nowrap;
      flex: 0 0 auto;
    }

    .chip-btn:hover, .provider-filter-option:hover {
      border-color: var(--stripe-muted);
      color: var(--stripe-navy);
    }

    .chip-btn.active, .provider-filter-option.active {
      background: var(--stripe-blurple);
      border-color: var(--stripe-blurple);
      color: #ffffff;
      box-shadow: 0 2px 4px rgba(99, 91, 255, 0.25);
    }

    .toolbar-controls-right {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-shrink: 0;
    }

    /* 视图切换按钮 (View Mode) */
    .view-toggle-group, .view-controls {
      display: flex;
      background: var(--stripe-canvas);
      padding: 3px;
      border-radius: 8px;
      border: 1px solid var(--stripe-border);
      align-items: center;
      gap: 2px;
      flex-shrink: 0;
    }

    .view-btn, .view-toggle-button {
      width: 32px;
      height: 30px;
      border: none;
      background: transparent;
      color: var(--stripe-muted);
      border-radius: 6px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.15s ease;
    }

    .view-btn:hover, .view-toggle-button:hover {
      color: var(--stripe-navy);
    }

    .view-btn.active, .view-toggle-button.active {
      background: var(--stripe-surface);
      color: var(--stripe-blurple);
      box-shadow: var(--shadow-stripe-xs);
    }

    /* 排序下拉控件 (Sort Dropdown) */
    .sort-controls {
      flex-shrink: 0;
    }

    .sort-select-hidden {
      display: none !important;
    }

    .sort-dropdown {
      position: relative;
      display: inline-block;
    }

    .sort-trigger {
      list-style: none;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 0 10px;
      border: 1px solid var(--stripe-border);
      border-radius: 8px;
      background: var(--stripe-canvas);
      color: var(--stripe-slate);
      font-size: 12px;
      font-weight: 600;
      height: 36px;
      transition: all 0.15s ease;
      user-select: none;
    }

    .sort-trigger::-webkit-details-marker { display: none; }
    .sort-trigger::marker { content: ''; }

    .sort-trigger:hover {
      border-color: var(--stripe-muted);
      color: var(--stripe-navy);
    }

    .sort-dropdown[open] > .sort-trigger {
      border-color: var(--stripe-blurple);
      box-shadow: 0 0 0 3px var(--stripe-blurple-ring);
      background: var(--stripe-surface);
    }

    .sort-menu {
      position: absolute;
      top: calc(100% + 6px);
      right: 0;
      min-width: 190px;
      background: var(--stripe-surface);
      border: 1px solid var(--stripe-border);
      border-radius: 12px;
      box-shadow: var(--shadow-stripe-lg);
      padding: 6px;
      z-index: 1002;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .sort-option {
      padding: 8px 12px;
      text-align: left;
      background: transparent;
      border: none;
      font-size: 13px;
      color: var(--stripe-slate);
      cursor: pointer;
      border-radius: 6px;
      white-space: nowrap;
      transition: background 0.12s ease, color 0.12s ease;
      font-family: inherit;
    }

    .sort-option:hover {
      background: var(--bg-hover);
      color: var(--stripe-navy);
    }

    .sort-option.active {
      background: var(--stripe-blurple-light);
      color: var(--stripe-blurple);
      font-weight: 600;
    }

    .sort-option.active::before {
      content: '';
      display: inline-block;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--stripe-blurple);
      margin-right: 8px;
      vertical-align: middle;
    }

    .search-stats {
      width: 100%;
      font-size: 12px;
      color: var(--stripe-muted);
      margin-top: 4px;
    }

    /* ========== 悬浮操作菜单 (FAB) ========== */
    .action-menu-float {
      position: fixed;
      bottom: calc(24px + env(safe-area-inset-bottom, 0px));
      right: calc(24px + env(safe-area-inset-right, 0px));
      z-index: 1001;
    }

    .main-action-button {
      background: var(--stripe-blurple);
      color: #ffffff;
      border: none;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: var(--shadow-stripe-floating);
      transition: background-color 0.15s ease, box-shadow 0.15s ease, transform 0.2s ease;
      outline: none;
    }

    .main-action-button:hover {
      background: var(--stripe-blurple-hover);
      box-shadow: 0 8px 24px rgba(99, 91, 255, 0.4);
    }

    .main-action-button:active {
      transform: scale(0.96);
    }

    .main-action-button.active {
      transform: rotate(45deg);
      background: var(--stripe-red);
    }

    .action-submenu {
      position: absolute;
      bottom: 60px;
      right: 0;
      background: var(--stripe-surface);
      border-radius: 14px;
      box-shadow: var(--shadow-stripe-lg);
      border: 1px solid var(--stripe-border);
      opacity: 0;
      visibility: hidden;
      transform: translateY(6px);
      transition: all 0.15s ease;
      z-index: 1000;
      min-width: 170px;
      overflow: hidden;
      backdrop-filter: blur(12px);
      padding: 4px;
    }

    .action-submenu.show {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    .submenu-item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 12px;
      color: var(--stripe-slate);
      cursor: pointer;
      border-radius: 8px;
      transition: all 0.12s ease;
    }

    .submenu-item:hover {
      background: var(--stripe-blurple-light);
      color: var(--stripe-blurple);
    }

    .item-icon {
      width: 18px;
      height: 18px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .item-text {
      font-size: 13px;
      font-weight: 500;
      flex: 1;
    }

    /* 遮罩 */
    .menu-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--bg-overlay);
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.2s ease;
      z-index: 1;
    }

    .menu-overlay.show {
      opacity: 1;
      visibility: visible;
    }

    /* 页脚 */
    .page-footer {
      border-top: 1px solid var(--stripe-border);
      padding: 24px 20px;
      margin-top: 40px;
      background: transparent;
      color: var(--stripe-muted);
      font-size: 13px;
    }

    .footer-content {
      max-width: 1180px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 12px;
    }

    .footer-links {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
    }

    .footer-link {
      color: var(--stripe-slate);
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 5px;
      transition: color 0.15s ease;
    }

    .footer-link:hover {
      color: var(--stripe-blurple);
    }

    .footer-separator {
      color: var(--stripe-border);
    }

    /* 响应式调整 */
    @media (max-width: 900px) {
      .stripe-nav-inner {
        padding: 8px 16px;
      }

      .container {
        padding: 0 16px;
      }

      .content {
        padding-top: 18px;
      }

      .classic-toolbar, .search-section {
        display: grid;
        grid-template-columns: auto minmax(0, 1fr) auto;
        align-items: center;
        gap: 10px;
        padding: 12px 14px;
      }

      .classic-search-wrap, .search-input-wrapper {
        grid-column: 1 / -1;
        width: 100%;
        max-width: none;
        min-width: 0;
      }

      .classic-filter-chips, .provider-filters {
        grid-column: 1 / 3;
        width: 100%;
      }

      .toolbar-controls-right {
        grid-column: 3;
        justify-self: end;
        gap: 6px;
      }

      .search-stats {
        grid-column: 1 / -1;
        margin-top: 0;
      }

      .stripe-metrics-bar {
        grid-template-columns: 1fr;
        gap: 10px;
      }

      .stripe-btn-primary span {
        display: none;
      }

      .stripe-btn-primary {
        padding: 8px 10px;
      }

      .sort-trigger-label {
        display: none;
      }

      .sort-trigger {
        padding: 0;
        width: 40px;
        justify-content: center;
      }

      .search-action-row {
        gap: 8px;
      }
    }

    @media (max-width: 600px) {
      .stripe-nav-inner {
        padding: 8px 12px;
        gap: 8px;
      }

      .stripe-nav-actions {
        gap: 6px;
      }

      .stripe-nav-btn, .icon-btn,
      .stripe-btn-primary {
        width: 34px;
        height: 34px;
        flex: 0 0 34px;
      }

      .stripe-btn-primary {
        justify-content: center;
        padding: 0;
      }

      .stripe-logo-badge {
        padding: 6px 10px;
        font-size: 13px;
      }

      .container {
        padding: 0 12px;
      }

      .content {
        padding-top: 14px;
      }

      .classic-kpi-card, .stripe-metric-card {
        padding: 14px 16px;
      }

      .classic-toolbar, .search-section {
        padding: 12px;
      }

      .classic-filter-chips, .provider-filters {
        grid-column: 1 / -1;
        grid-row: 2;
      }

      .toolbar-controls-right {
        grid-column: 1 / -1;
        grid-row: 3;
      }
    }
`;
}

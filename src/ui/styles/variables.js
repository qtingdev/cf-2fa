/**
 * CSS 变量定义模块
 * 实现 Stripe Dashboard 经典设计系统的浅色模式和深色模式主题变量
 */
export function getVariables() {
	return `
    /* ========== Stripe Design System 变量系统 ========== */

    /* 浅色模式变量定义 */
    :root {
      /* === 字体系统 === */
      --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      --font-mono: 'JetBrains Mono', 'SF Mono', Menlo, Monaco, Consolas, monospace;

      /* === 主题过渡动画 === */
      --theme-transition-duration: 0.18s;
      --theme-transition-easing: cubic-bezier(0.2, 0, 0, 1);
      --theme-transition:
        background-color var(--theme-transition-duration) var(--theme-transition-easing),
        color var(--theme-transition-duration) var(--theme-transition-easing),
        border-color var(--theme-transition-duration) var(--theme-transition-easing),
        box-shadow var(--theme-transition-duration) var(--theme-transition-easing),
        fill var(--theme-transition-duration) var(--theme-transition-easing),
        stroke var(--theme-transition-duration) var(--theme-transition-easing);

      /* === Stripe 经典核心色系 (Stripe Core Palette) === */
      --stripe-blurple: #635bff;
      --stripe-blurple-hover: #5851ea;
      --stripe-blurple-active: #4b45c6;
      --stripe-blurple-light: #f0efff;
      --stripe-blurple-ring: rgba(99, 91, 255, 0.25);

      --stripe-navy: #0a2540;
      --stripe-slate: #425466;
      --stripe-muted: #697386;
      --stripe-canvas: #f8f9fb;
      --stripe-surface: #ffffff;
      --stripe-border: #e3e8ee;
      --stripe-border-light: #edf2f7;

      --stripe-green: #00d97e;
      --stripe-green-light: #e6f9f1;
      --stripe-red: #df1b41;
      --stripe-red-light: #fce8eb;
      --stripe-cyan: #00d4ff;
      --stripe-cyan-light: #e5faff;
      --stripe-amber: #f59e0b;
      --stripe-amber-light: #fef3c7;

      /* === 灰度与基准色阶 === */
      --color-white: #ffffff;
      --color-black: #000000;
      --gray-50: #f8f9fb;
      --gray-100: #f1f3f5;
      --gray-200: #e3e8ee;
      --gray-300: #cbd5e1;
      --gray-400: #94a3b8;
      --gray-500: #697386;
      --gray-600: #425466;
      --gray-700: #334155;
      --gray-800: #1e293b;
      --gray-900: #0a2540;

      /* === 常用圆角尺寸 === */
      --radius-xs: 4px;
      --radius-sm: 6px;
      --radius-md: 8px;
      --radius-lg: 12px;
      --radius-xl: 14px;
      --radius-2xl: 16px;
      --radius-full: 9999px;
      --radius-surface: 12px;

      /* === 控件尺寸 === */
      --control-height-sm: 32px;
      --control-height-md: 40px;
      --control-height-lg: 46px;

      /* === Stripe 多层环境标高阴影 (Layered Ambient Shadows) === */
      --shadow-stripe-xs: 0 1px 2px rgba(50, 50, 93, 0.05), 0 0 0 1px rgba(50, 50, 93, 0.06);
      --shadow-stripe-sm: 0 2px 5px rgba(50, 50, 93, 0.08), 0 1px 1px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(50, 50, 93, 0.06);
      --shadow-stripe-md: 0 6px 16px -2px rgba(50, 50, 93, 0.1), 0 3px 7px -3px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(50, 50, 93, 0.06);
      --shadow-stripe-lg: 0 13px 27px -5px rgba(50, 50, 93, 0.18), 0 8px 16px -8px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(50, 50, 93, 0.06);
      --shadow-stripe-floating: 0 30px 60px -12px rgba(50, 50, 93, 0.25), 0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(50, 50, 93, 0.06);

      /* === 语义化变量映射 (浅色模式) === */
      --primary: var(--stripe-blurple);
      --primary-hover: var(--stripe-blurple-hover);
      --primary-active: var(--stripe-blurple-active);
      --primary-light: var(--stripe-blurple-light);
      --primary-rgb: 99, 91, 255;
      --ring: var(--stripe-blurple-ring);

      /* 背景系统 */
      --bg-primary: var(--stripe-canvas);
      --bg-secondary: var(--stripe-surface);
      --bg-tertiary: #f1f4f8;
      --bg-elevated: var(--stripe-surface);
      --bg-overlay: rgba(10, 37, 64, 0.65);
      --bg-hover: #f1f4f8;
      --bg-active: #e3e8ee;
      --bg-disabled: #f8f9fb;

      /* 文字系统 */
      --text-primary: var(--stripe-navy);
      --text-secondary: var(--stripe-slate);
      --text-tertiary: var(--stripe-muted);
      --text-disabled: #a1aab7;
      --text-inverse: #ffffff;
      --text-link: var(--stripe-blurple);
      --text-link-hover: var(--stripe-blurple-hover);

      /* 边框系统 */
      --border-primary: var(--stripe-border);
      --border-secondary: var(--stripe-border-light);
      --border-tertiary: #cbd5e1;
      --border-focus: var(--stripe-blurple);
      --border-error: var(--stripe-red);
      --border-success: var(--stripe-green);

      /* 阴影映射 */
      --shadow-sm: var(--shadow-stripe-xs);
      --shadow-md: var(--shadow-stripe-sm);
      --shadow-lg: var(--shadow-stripe-md);
      --shadow-xl: var(--shadow-stripe-lg);

      /* 按钮体系 */
      --btn-primary-bg: var(--stripe-blurple);
      --btn-primary-hover: var(--stripe-blurple-hover);
      --btn-primary-text: #ffffff;

      --btn-secondary-bg: var(--stripe-surface);
      --btn-secondary-hover: #f1f4f8;
      --btn-secondary-text: var(--stripe-navy);
      --btn-secondary-border: var(--stripe-border);

      --btn-danger-bg: var(--stripe-red);
      --btn-danger-hover: #c91838;
      --btn-danger-text: #ffffff;

      --btn-info-bg: var(--stripe-cyan);
      --btn-info-hover: #00beea;
      --btn-info-text: #0a2540;

      /* 表单元素 */
      --input-bg: var(--stripe-surface);
      --input-bg-focus: var(--stripe-surface);
      --input-border: var(--stripe-border);
      --input-border-focus: var(--stripe-blurple);
      --input-text: var(--stripe-navy);
      --input-placeholder: var(--stripe-muted);

      /* 卡片 */
      --card-bg: var(--stripe-surface);
      --card-border: var(--stripe-border);
      --card-shadow: var(--shadow-stripe-sm);
      --card-hover-border: rgba(99, 91, 255, 0.45);
      --card-hover-shadow: var(--shadow-stripe-md);

      /* 模态框 */
      --modal-bg: var(--stripe-surface);
      --modal-border: var(--stripe-border);
      --modal-overlay: rgba(10, 37, 64, 0.65);
      --modal-header-border: var(--stripe-border-light);
      --fab-modal-max-width: 600px;
      --fab-modal-sm-max-width: 450px;
      --fab-modal-lg-max-width: 680px;

      /* 进度条 */
      --progress-bg: #edf2f7;
      --progress-fill: linear-gradient(90deg, #635bff, #00d4ff);

      /* 滚动条 */
      --scrollbar-track: transparent;
      --scrollbar-thumb: #cbd5e1;
      --scrollbar-thumb-hover: #94a3b8;

      /* OTP 展示 */
      --otp-text: var(--stripe-navy);
      --otp-code-color: var(--stripe-blurple);
      --otp-next-bg: #f8f9fb;
      --otp-next-bg-hover: #f1f4f8;
      --otp-next-text: var(--stripe-muted);

      /* 搜索框 */
      --search-bg: var(--stripe-surface);
      --search-border: var(--stripe-border);
      --search-border-focus: var(--stripe-blurple);
      --search-icon: var(--stripe-muted);

      /* 下拉菜单 */
      --menu-bg: var(--stripe-surface);
      --menu-border: var(--stripe-border);
      --menu-item-hover: #f8f9fb;
      --menu-shadow: var(--shadow-stripe-md);

      /* 状态与导入导出面板 */
      --import-instructions-bg: var(--stripe-canvas);
      --import-instructions-border: var(--stripe-border);
      --import-method-bg: var(--stripe-surface);
      --import-method-border: var(--stripe-border);
      --import-method-hover-border: var(--stripe-blurple);
      --import-example-bg: var(--stripe-amber-light);
      --import-example-text: #92400e;
      --import-example-border: #fde68a;
      --import-file-bg: var(--stripe-blurple-light);
      --import-file-border: var(--stripe-blurple);

      --restore-instructions-bg: #fef2f2;
      --restore-instructions-border: #fecaca;
      --restore-warning-bg: rgba(255, 255, 255, 0.8);
      --restore-warning-text: var(--stripe-red);
      --restore-warning-border: rgba(223, 27, 65, 0.2);

      --backup-header-bg: var(--stripe-blurple-light);
      --backup-header-border: var(--stripe-blurple);
      --backup-header-text: var(--stripe-blurple-hover);
      --backup-select-bg: var(--stripe-surface);
      --backup-select-border: var(--stripe-border);

      --table-bg: var(--stripe-surface);
      --table-header-bg: #f8f9fb;
      --table-header-text: var(--stripe-slate);
      --table-header-border: var(--stripe-border);
      --table-border: var(--stripe-border);
      --table-row-divider: #f0f3f7;
      --table-row-hover: #f8f9fb;

      --tool-bg: var(--stripe-surface);
      --tool-border: var(--stripe-border);
      --tool-hover-bg: #f8f9fb;
      --tool-icon-bg: var(--stripe-canvas);
      --tool-icon-border: var(--stripe-border);

      /* Toast 提示 */
      --toast-bg: #0a2540;
      --toast-text: #ffffff;
      --toast-border: rgba(255, 255, 255, 0.12);

      /* 页脚与悬浮按钮 */
      --footer-bg: transparent;
      --footer-border: var(--stripe-border);
      --footer-text: var(--stripe-muted);
      --footer-link: var(--stripe-slate);
      --footer-link-hover: var(--stripe-blurple);

      --float-btn-bg: var(--stripe-blurple);
      --float-btn-hover: var(--stripe-blurple-hover);
      --float-btn-text: #ffffff;
      --float-btn-shadow: var(--shadow-stripe-floating);

      --action-btn-bg: var(--stripe-blurple);
      --action-btn-hover: var(--stripe-blurple-hover);
      --action-btn-shadow: 0 4px 14px rgba(99, 91, 255, 0.25);
      --qr-btn-color: var(--stripe-blurple);
      --qr-btn-hover-bg: var(--stripe-blurple-light);
      --progress-mini-fill: var(--stripe-blurple);

      /* 功能色 */
      --success-light: var(--stripe-green-light);
      --success: var(--stripe-green);
      --success-dark: #00b368;
      --success-darker: #008f53;

      --warning-light: var(--stripe-amber-light);
      --warning: var(--stripe-amber);
      --warning-dark: #d97706;

      --danger-light: var(--stripe-red-light);
      --danger: var(--stripe-red);
      --danger-dark: #b91c1c;
      --danger-darker: #991b1b;

      --info-light: var(--stripe-cyan-light);
      --info: var(--stripe-cyan);
      --info-dark: #0099cc;
    }

    /* ========== 深色模式变量覆盖 (Stripe Dark Mode) ========== */
    [data-theme="dark"] {
      /* === Stripe 深色色调 === */
      --stripe-navy: #f7fafc;
      --stripe-slate: #cbd5e1;
      --stripe-muted: #94a3b8;
      --stripe-canvas: #090d16;
      --stripe-surface: #111827;
      --stripe-border: #1e293b;
      --stripe-border-light: rgba(255, 255, 255, 0.08);

      --stripe-blurple-light: rgba(99, 91, 255, 0.16);
      --stripe-blurple-ring: rgba(99, 91, 255, 0.35);

      --stripe-green-light: rgba(0, 217, 126, 0.15);
      --stripe-red-light: rgba(223, 27, 65, 0.15);
      --stripe-cyan-light: rgba(0, 212, 255, 0.15);
      --stripe-amber-light: rgba(245, 158, 11, 0.15);

      /* === 深色模式环境阴影 === */
      --shadow-stripe-xs: 0 1px 2px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.06);
      --shadow-stripe-sm: 0 2px 5px rgba(0, 0, 0, 0.5), 0 1px 1px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.07);
      --shadow-stripe-md: 0 6px 16px -2px rgba(0, 0, 0, 0.6), 0 3px 7px -3px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.08);
      --shadow-stripe-lg: 0 13px 27px -5px rgba(0, 0, 0, 0.7), 0 8px 16px -8px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.08);
      --shadow-stripe-floating: 0 30px 60px -12px rgba(0, 0, 0, 0.8), 0 18px 36px -18px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.08);

      /* === 语义化变量覆盖 === */
      --bg-primary: var(--stripe-canvas);
      --bg-secondary: var(--stripe-surface);
      --bg-tertiary: #172033;
      --bg-elevated: var(--stripe-surface);
      --bg-overlay: rgba(0, 0, 0, 0.8);
      --bg-hover: #1e293b;
      --bg-active: #334155;
      --bg-disabled: #111827;

      --text-primary: var(--stripe-navy);
      --text-secondary: var(--stripe-slate);
      --text-tertiary: var(--stripe-muted);
      --text-disabled: #64748b;
      --text-inverse: #0a2540;

      --border-primary: var(--stripe-border);
      --border-secondary: var(--stripe-border-light);
      --border-tertiary: #334155;
      --border-focus: var(--stripe-blurple);

      --shadow-sm: var(--shadow-stripe-xs);
      --shadow-md: var(--shadow-stripe-sm);
      --shadow-lg: var(--shadow-stripe-md);
      --shadow-xl: var(--shadow-stripe-lg);

      --btn-secondary-bg: #1e293b;
      --btn-secondary-hover: #334155;
      --btn-secondary-text: var(--stripe-navy);
      --btn-secondary-border: #334155;

      --input-bg: #0b1120;
      --input-bg-focus: #0b1120;
      --input-border: #1e293b;
      --input-border-focus: var(--stripe-blurple);
      --input-text: var(--stripe-navy);
      --input-placeholder: var(--stripe-muted);

      --card-bg: var(--stripe-surface);
      --card-border: var(--stripe-border);
      --card-shadow: var(--shadow-stripe-sm);
      --card-hover-border: rgba(99, 91, 255, 0.55);
      --card-hover-shadow: var(--shadow-stripe-md);

      --modal-bg: var(--stripe-surface);
      --modal-border: var(--stripe-border);
      --modal-overlay: rgba(0, 0, 0, 0.85);
      --modal-header-border: var(--stripe-border);

      --progress-bg: #1e293b;
      --scrollbar-thumb: #334155;
      --scrollbar-thumb-hover: #475569;

      --otp-text: var(--stripe-navy);
      --otp-code-color: #818cf8;
      --otp-next-bg: rgba(255, 255, 255, 0.04);
      --otp-next-bg-hover: rgba(255, 255, 255, 0.08);
      --otp-next-text: var(--stripe-muted);

      --search-bg: #0b1120;
      --search-border: #1e293b;
      --search-icon: var(--stripe-muted);

      --menu-bg: #1e293b;
      --menu-border: #334155;
      --menu-item-hover: rgba(255, 255, 255, 0.06);
      --menu-shadow: var(--shadow-stripe-lg);

      --import-instructions-bg: #172033;
      --import-instructions-border: #1e293b;
      --import-method-bg: #111827;
      --import-method-border: #1e293b;
      --import-example-bg: rgba(245, 158, 11, 0.15);
      --import-example-text: #fcd34d;
      --import-example-border: rgba(245, 158, 11, 0.3);
      --import-file-bg: rgba(99, 91, 255, 0.15);
      --import-file-border: var(--stripe-blurple);

      --restore-instructions-bg: rgba(223, 27, 65, 0.15);
      --restore-instructions-border: rgba(223, 27, 65, 0.3);
      --restore-warning-bg: rgba(0, 0, 0, 0.4);
      --restore-warning-text: #fca5a5;
      --restore-warning-border: rgba(223, 27, 65, 0.3);

      --backup-header-bg: rgba(99, 91, 255, 0.2);
      --backup-header-border: var(--stripe-blurple);
      --backup-header-text: #a5b4fc;
      --backup-select-bg: #111827;
      --backup-select-border: #1e293b;

      --table-bg: #111827;
      --table-header-bg: #172033;
      --table-header-text: var(--stripe-slate);
      --table-header-border: #1e293b;
      --table-border: #1e293b;
      --table-row-divider: #182234;
      --table-row-hover: #172033;

      --tool-bg: #111827;
      --tool-border: #1e293b;
      --tool-hover-bg: #172033;
      --tool-icon-bg: #172033;
      --tool-icon-border: #1e293b;

      --toast-bg: #1e293b;
      --toast-text: #f7fafc;
      --toast-border: rgba(255, 255, 255, 0.12);

      --footer-border: #1e293b;
      --footer-text: var(--stripe-muted);
      --footer-link: var(--stripe-slate);
      --footer-link-hover: #818cf8;

      --float-btn-bg: var(--stripe-blurple);
      --float-btn-hover: var(--stripe-blurple-hover);
      --float-btn-text: #ffffff;
      --float-btn-shadow: var(--shadow-stripe-floating);

      --action-btn-bg: var(--stripe-blurple);
      --action-btn-hover: var(--stripe-blurple-hover);
      --action-btn-shadow: 0 4px 14px rgba(99, 91, 255, 0.4);
      --qr-btn-color: #818cf8;
      --qr-btn-hover-bg: rgba(99, 91, 255, 0.2);

      --success-light: rgba(0, 217, 126, 0.15);
      --warning-light: rgba(245, 158, 11, 0.15);
      --danger-light: rgba(223, 27, 65, 0.15);
      --info-light: rgba(0, 212, 255, 0.15);
    }

    /* ========== 媒体查询回退 ========== */
    @media (prefers-color-scheme: dark) {
      :root:not([data-theme="light"]) {
        --stripe-navy: #f7fafc;
        --stripe-slate: #cbd5e1;
        --stripe-muted: #94a3b8;
        --stripe-canvas: #090d16;
        --stripe-surface: #111827;
        --stripe-border: #1e293b;
        --stripe-border-light: rgba(255, 255, 255, 0.08);

        --bg-primary: #090d16;
        --bg-secondary: #111827;
        --bg-tertiary: #172033;
        --bg-elevated: #111827;
        --bg-hover: #1e293b;

        --text-primary: #f7fafc;
        --text-secondary: #cbd5e1;
        --text-tertiary: #94a3b8;

        --border-primary: #1e293b;
        --border-secondary: rgba(255, 255, 255, 0.08);

        --card-bg: #111827;
        --card-border: #1e293b;

        --input-bg: #0b1120;
        --input-border: #1e293b;
        --input-text: #f7fafc;

        --modal-bg: #111827;
        --modal-border: #1e293b;
      }
    }

    :root {
      color-scheme: light;
    }

    [data-theme="dark"] {
      color-scheme: dark;
    }

    /* ========== 主题过渡平滑设定 ========== */
    ::view-transition-old(root),
    ::view-transition-new(root) {
      animation-duration: 0.2s;
      animation-timing-function: var(--theme-transition-easing);
      mix-blend-mode: normal;
    }

    html.theme-transition body,
    html.theme-transition .stripe-topnav,
    html.theme-transition .classic-kpi-card,
    html.theme-transition .classic-toolbar,
    html.theme-transition .secret-card,
    html.theme-transition .classic-table-wrap,
    html.theme-transition .classic-table th,
    html.theme-transition .classic-table td,
    html.theme-transition .modal-content,
    html.theme-transition .card-menu-dropdown,
    html.theme-transition input,
    html.theme-transition select,
    html.theme-transition textarea,
    html.theme-transition button,
    html.theme-transition .ui-icon {
      transition: var(--theme-transition);
    }

    /* 禁用过渡的情况（减弱动态效果设置） */
    @media (prefers-reduced-motion: reduce) {
      ::view-transition-old(root),
      ::view-transition-new(root),
      html.theme-transition body,
      html.theme-transition .stripe-topnav,
      html.theme-transition .classic-kpi-card,
      html.theme-transition .classic-toolbar,
      html.theme-transition .secret-card,
      html.theme-transition .classic-table-wrap,
      html.theme-transition .classic-table th,
      html.theme-transition .classic-table td,
      html.theme-transition .modal-content,
      html.theme-transition .card-menu-dropdown,
      html.theme-transition input,
      html.theme-transition select,
      html.theme-transition textarea,
      html.theme-transition button,
      html.theme-transition .ui-icon {
        transition: none !important;
        animation-duration: 0s !important;
      }
    }
  `;
}

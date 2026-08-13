/**
 * 组件样式模块
 */
export function getComponentStyles() {
	return `    /* ========== 密钥列表容器 (网格视图) ========== */
    .secrets-list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
      gap: 12px;
      justify-content: center;
      margin: 0 auto;
      width: 100%;
    }

    /* ========== 网格模式卡片 ========== */
    .secret-card {
      background: var(--card-bg);
      border-radius: var(--radius-surface);
      padding: 14px 16px;
      border: 1px solid var(--card-border);
      transition:
        transform 0.2s cubic-bezier(0.16, 1, 0.3, 1),
        box-shadow 0.2s cubic-bezier(0.16, 1, 0.3, 1),
        border-color 0.2s ease,
        background-color 0.2s ease;
      position: relative;
      width: 100%;
      box-shadow: var(--card-shadow);
      margin-bottom: 0;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-sizing: border-box;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -webkit-touch-callout: none;
    }

    .secret-card:hover {
      border-color: var(--card-hover-border);
      box-shadow: var(--card-hover-shadow);
      transform: translateY(-2px);
    }

    .secret-card:active {
      transform: scale(0.99);
    }

    .secret-card.menu-open {
      z-index: 10001;
    }

    .secret-card-draggable {
      cursor: grab;
    }

    .secret-card-draggable:active {
      cursor: grabbing;
    }

    .secret-card.dragging {
      opacity: 0.55;
      border-color: var(--border-focus);
      transform: scale(0.98);
    }

    .secret-card.drag-over {
      border-color: var(--primary);
      background: var(--bg-hover);
    }

    /* ========== 列表视图模式 ========== */
    .secrets-list.view-list {
      display: flex;
      flex-direction: column;
      grid-template-columns: none;
      justify-content: flex-start;
      align-items: stretch;
      gap: 8px;
      width: 100%;
    }

    .secrets-list.view-list .secret-card {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 14px;
      padding: 8px 10px;
      border-radius: var(--radius-md);
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      box-shadow: var(--card-shadow);
    }

    .secrets-list.view-list .secret-card:hover {
      transform: none;
      background: var(--bg-hover);
      border-color: var(--card-hover-border);
      box-shadow: var(--shadow-sm);
    }

    .secrets-list.view-list .card-header {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 12px;
      margin-bottom: 0;
      flex: 1 1 auto;
      min-width: 0;
    }

    .secrets-list.view-list .secret-info {
      display: flex;
      align-items: center;
      gap: 10px;
      flex: 1;
      min-width: 0;
    }

    .secrets-list.view-list .service-icon {
      width: 32px;
      height: 32px;
      flex: 0 0 32px;
      border-radius: var(--radius-sm);
      font-size: 14px;
    }

    .secrets-list.view-list .service-icon img {
      width: 22px;
      height: 22px;
    }

    .secrets-list.view-list .secret-text {
      display: flex;
      align-items: baseline;
      gap: 8px;
      flex: 1;
      min-width: 0;
    }

    .secrets-list.view-list .service-name-row {
      display: flex;
      align-items: center;
      gap: 4px;
      flex-shrink: 0;
    }

    .secrets-list.view-list .secret-text h3 {
      font-size: 14px;
      font-weight: 600;
      white-space: nowrap;
    }

    .secrets-list.view-list .secret-text .secret-account {
      font-size: 13px;
      color: var(--text-secondary);
      margin: 0;
      overflow: visible;
      text-overflow: clip;
      white-space: normal;
      overflow-wrap: anywhere;
      word-break: break-word;
      flex: 1;
      min-width: 0;
    }

    .secrets-list.view-list .secret-text .secret-account::before {
      content: '·';
      margin-right: 6px;
      color: var(--text-tertiary);
    }

    .secrets-list.view-list .card-header-actions {
      order: 3;
      margin-left: 0;
    }

    .secrets-list.view-list .otp-preview {
      margin-top: 0;
      padding-top: 0;
      border-top: none;
      order: 2;
      flex-shrink: 0;
    }

    .secrets-list.view-list .otp-main {
      display: flex;
      align-items: center;
      gap: 12px;
      justify-content: flex-end;
    }

    .secrets-list.view-list .otp-code-container {
      flex: 0 0 auto;
    }

    .secrets-list.view-list .otp-code {
      font-size: 22px;
      font-weight: 600;
      letter-spacing: 1px;
      margin: 0;
    }

    .secrets-list.view-list .otp-countdown-ring {
      width: 20px;
      height: 20px;
      flex: 0 0 20px;
    }

    .secrets-list.view-list .otp-next-container {
      flex-direction: row;
      align-items: center;
      gap: 5px;
      padding: 3px 8px;
      min-width: auto;
      height: 26px;
    }

    .secrets-list.view-list .otp-next-label {
      font-size: 10px;
      margin-bottom: 0;
      display: inline-block;
    }

    .secrets-list.view-list .otp-next-code {
      font-size: 12px;
      font-weight: 600;
    }

    @media (max-width: 640px) {
      .secrets-list.view-list .secret-card {
        flex-wrap: wrap;
        padding: 10px 12px;
        gap: 8px;
      }

      .secrets-list.view-list .card-header {
        width: 100%;
        flex: 1 0 100%;
        justify-content: space-between;
      }

      .secrets-list.view-list .secret-text {
        flex-direction: column;
        gap: 2px;
        align-items: flex-start;
      }

      .secrets-list.view-list .secret-text .secret-account::before {
        display: none;
      }

      .secrets-list.view-list .card-header-actions {
        order: 1;
      }

      .secrets-list.view-list .otp-preview {
        width: 100%;
        flex: 1 0 100%;
        order: 2;
      }

      .secrets-list.view-list .otp-main {
        width: 100%;
        justify-content: space-between;
      }
    }

    /* ========== 卡片内部布局与组件细节 ========== */
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 10px;
      margin-bottom: 12px;
    }

    .card-header-actions {
      display: flex;
      align-items: center;
      gap: 4px;
      flex-shrink: 0;
      margin-left: 6px;
    }

    .secret-info {
      display: flex;
      align-items: center;
      gap: 10px;
      flex: 1;
      min-width: 0;
    }

    .service-icon {
      width: 38px;
      height: 38px;
      flex: 0 0 38px;
      border-radius: var(--radius-md);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 16px;
      color: var(--text-primary);
      background: var(--bg-secondary);
      border: 1px solid var(--border-primary);
      box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.04);
    }

    .service-icon img {
      width: 26px;
      height: 26px;
      object-fit: contain;
      border-radius: var(--radius-sm);
    }

    .secret-text {
      flex: 1;
      min-width: 0;
      overflow: hidden;
    }

    .service-name-row {
      display: flex;
      align-items: center;
      gap: 6px;
      min-width: 0;
    }

    .secret-text h3 {
      color: var(--text-primary);
      font-size: 15px;
      font-weight: 600;
      margin: 0;
      line-height: 1.3;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .secret-badge.hotp-badge {
      font-size: 10px;
      font-weight: 600;
      padding: 1px 5px;
      border-radius: 4px;
      background: var(--bg-secondary);
      border: 1px solid var(--border-primary);
      color: var(--text-tertiary);
      letter-spacing: 0.5px;
      text-transform: uppercase;
      flex-shrink: 0;
    }

    .secret-text .secret-account {
      display: block;
      max-width: 100%;
      margin-top: 2px;
      color: var(--text-secondary);
      font-size: 12.5px;
      font-weight: 500;
      line-height: 1.35;
      overflow: visible;
      text-overflow: clip;
      white-space: normal;
      overflow-wrap: anywhere;
      word-break: break-word;
      font-variant-numeric: tabular-nums;
    }

    .secret-counter {
      font-size: 11px;
      color: var(--text-tertiary);
      margin: 2px 0 0 0;
      font-family: monospace;
    }

    .card-menu {
      position: relative;
      cursor: pointer;
      width: 30px;
      height: 30px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--radius-sm);
      color: var(--text-tertiary);
      transition: background-color 0.15s ease, color 0.15s ease;
    }

    .card-menu:hover {
      background: var(--bg-hover);
      color: var(--text-primary);
    }

    .drag-handle {
      width: 30px;
      height: 30px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: 1px solid var(--border-primary);
      border-radius: var(--radius-sm);
      background: var(--bg-secondary);
      color: var(--text-tertiary);
      cursor: grab;
      touch-action: none;
      transition:
        border-color 0.2s ease,
        background-color 0.2s ease,
        color 0.2s ease;
    }

    .drag-handle:hover,
    .drag-handle:focus-visible {
      border-color: var(--border-focus);
      background: var(--bg-hover);
      color: var(--text-primary);
      outline: none;
    }

    .drag-handle:active {
      cursor: grabbing;
    }

    /* P1.6 手机端保证 ≥44px 触控面积（iOS HIG） */
    @media (max-width: 768px) {
      .card-menu {
        min-width: 44px;
        min-height: 44px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }

      .drag-handle {
        min-width: 44px;
        min-height: 44px;
      }
    }

    .menu-dots {
      color: var(--text-secondary);
      line-height: 1;
      user-select: none;
      width: 20px;
      height: 20px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .card-menu-dropdown {
      display: none;
      position: absolute;
      top: -8px;
      right: -8px;
      background: var(--menu-bg);
      border: 1px solid var(--menu-border);
      border-radius: var(--radius-surface);
      min-width: 136px;
      width: fit-content;
      box-shadow: var(--menu-shadow);
      z-index: 10000;
      overflow: hidden;
    }

    .card-menu-dropdown.show {
      display: block;
    }

    .menu-item {
      padding: 10px 14px;
      color: var(--text-primary);
      cursor: pointer;
      transition: background 0.2s ease;
      font-size: 14px;
      white-space: nowrap;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .menu-item:hover {
      background: var(--menu-item-hover);
    }

    .menu-item-danger {
      color: var(--danger) !important;
    }

    .menu-item-danger:hover {
      background: var(--danger-light) !important;
    }

    .otp-preview {
      margin-top: auto;
      padding-top: 10px;
      border-top: 1px solid var(--border-primary);
      background: none;
    }

    .otp-main {
      display: flex;
      align-items: center;
      gap: 10px;
      justify-content: space-between;
    }

    .otp-code-container {
      flex: 1;
      min-width: 0;
    }

    .otp-code-row {
      display: flex;
      align-items: center;
      gap: 8px;
      min-width: 0;
      width: 100%;
    }

    .otp-code {
      font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', monospace;
      font-size: 28px;
      font-weight: 600;
      color: var(--otp-text);
      letter-spacing: 1.5px;
      cursor: pointer;
      transition: color 0.15s ease;
      user-select: none;
      margin: 0;
      line-height: 1.1;
      padding: 0;
      background: none;
      border: none;
      display: block;
      flex: 0 1 auto;
      min-width: 0;
      width: auto;
      text-align: left;
      font-variant-numeric: tabular-nums;
    }

    .otp-code:hover {
      color: var(--primary);
    }

    .otp-countdown-ring {
      --progress-deg: 360deg;
      --progress-color: var(--success);
      position: relative;
      width: 22px;
      height: 22px;
      flex: 0 0 22px;
      border-radius: 50%;
      background: conic-gradient(var(--progress-color) var(--progress-deg), var(--border-primary) 0deg);
      transition: background 1s linear;
      pointer-events: none;
    }

    .otp-countdown-ring-inner {
      position: absolute;
      inset: 3px;
      border-radius: 50%;
      background: var(--card-bg);
    }

    .otp-next-container {
      text-align: right;
      cursor: pointer;
      transition: all 0.2s ease;
      padding: 4px 8px;
      border-radius: var(--radius-sm);
      background: var(--otp-next-bg);
      border: 1px solid var(--border-primary);
      flex-shrink: 0;
      min-width: 60px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
    }

    .otp-next-container:hover {
      background: var(--otp-next-bg-hover);
      border-color: var(--border-focus);
      transform: translateY(-1px);
    }

    .otp-next-label {
      font-size: 9px;
      font-weight: 600;
      color: var(--text-tertiary);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      line-height: 1;
      margin-bottom: 2px;
    }

    .otp-next-code {
      font-family: 'SF Mono', Monaco, 'Cascadia Code', monospace;
      font-size: 13px;
      font-weight: 600;
      color: var(--otp-next-text);
      letter-spacing: 0.5px;
      line-height: 1;
      display: block;
      white-space: nowrap;
      text-align: right;
      font-variant-numeric: tabular-nums;
    }

    .progress-mini {
      width: 60px;
      height: 4px;
      background: var(--border-primary);
      border-radius: 2px;
      overflow: hidden;
    }

    .progress-mini-fill {
      height: 100%;
      background: #8B5CF6;
      border-radius: 2px;
      transition: width 1s ease-in-out;
    }

    /* ========== 同步目标卡片 ========== */
    .dest-card {
      background: var(--bg-secondary);
      border: 1px solid var(--border-primary);
      border-radius: var(--radius-surface);
      padding: 14px;
      margin-bottom: 10px;
      transition: all 0.2s ease;
    }

    .dest-card:hover {
      border-color: var(--border-focus);
      box-shadow: var(--shadow-sm);
    }

    .dest-card-disabled {
      opacity: 0.55;
    }

    .dest-card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
    }

    .dest-card-info {
      flex: 1;
      min-width: 0;
    }

    .dest-card-name {
      display: block;
      font-weight: 600;
      font-size: 14px;
      color: var(--text-primary);
      margin-bottom: 2px;
    }

    .dest-card-url {
      display: block;
      font-size: 12px;
      color: var(--text-tertiary);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .dest-card-status {
      display: flex;
      align-items: center;
      gap: 6px;
      margin-bottom: 8px;
    }

    .dest-status-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .dest-status-dot-green {
      background: #22c55e;
    }

    .dest-status-dot-red {
      background: #ef4444;
    }

    .dest-status-dot-gray {
      background: #9ca3af;
    }

    .dest-status-text {
      font-size: 12px;
      color: var(--text-tertiary);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .dest-card-actions {
      display: flex;
      gap: 8px;
    }

    .btn-sm {
      padding: 4px 12px;
      font-size: 12px;
      border-radius: var(--radius-sm);
      cursor: pointer;
      border: 1px solid var(--border-primary);
      background: var(--bg-primary);
      color: var(--text-secondary);
      transition: all 0.2s ease;
    }

    .btn-sm:hover {
      background: var(--bg-hover, var(--bg-secondary));
    }

    .btn-danger-outline {
      border-color: var(--danger, #ef4444);
      color: var(--danger, #ef4444);
    }

    .btn-danger-outline:hover {
      background: var(--danger-light, rgba(239, 68, 68, 0.1));
    }

    /* 开关切换 */
    .dest-toggle {
      position: relative;
      display: inline-block;
      width: 40px;
      height: 22px;
      flex-shrink: 0;
      margin-left: 10px;
    }

    .dest-toggle input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .dest-toggle-slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #ccc;
      border-radius: 22px;
      transition: 0.3s;
    }

    .dest-toggle-slider:before {
      position: absolute;
      content: "";
      height: 16px;
      width: 16px;
      left: 3px;
      bottom: 3px;
      background: white;
      border-radius: 50%;
      transition: 0.3s;
    }

    .dest-toggle input:checked + .dest-toggle-slider {
      background: var(--primary);
    }

    .dest-toggle input:checked + .dest-toggle-slider:before {
      transform: translateX(18px);
    }

    /* ========== 页面底部 Footer ========== */
    .page-footer {
      margin-top: 40px;
      padding: 15px 20px 20px 20px;
      background: var(--footer-bg);
      border-top: 1px solid var(--footer-border);
      text-align: center;
    }

    .footer-content {
      max-width: 800px;
      margin: 0 auto;
    }

    .footer-links {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 12px;
      margin-bottom: 8px;
      flex-wrap: wrap;
    }

    .footer-link {
      color: var(--footer-link);
      text-decoration: none;
      font-size: 12px;
      transition: color 0.2s ease;
      display: inline-flex;
      align-items: center;
      gap: 5px;
    }

    .footer-link:hover {
      color: var(--footer-link-hover);
    }

    .github-icon {
      vertical-align: middle;
      width: 14px;
      height: 14px;
    }

    .footer-separator {
      color: var(--border-secondary);
      font-size: 12px;
      user-select: none;
    }

    .footer-info {
      color: var(--text-tertiary);
      font-size: 11px;
      margin-top: 6px;
    }

    .footer-info a {
      color: var(--footer-link);
      text-decoration: none;
      transition: color 0.2s ease;
    }

    .footer-info a:hover {
      color: var(--footer-link-hover);
    }

    /* ========== 离线状态横幅 ========== */
    .offline-banner {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: var(--warning-dark);
      color: white;
      padding: 12px 20px;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
      z-index: 999; /* 低于操作菜单（1001），不会遮挡"+"按钮 */
      transform: translateY(-100%);
      transition: transform 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
    }

    .offline-banner.show {
      transform: translateY(0);
    }

    .offline-banner-icon {
      width: 20px;
      height: 20px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .offline-banner-text {
      font-size: 14px;
      font-weight: 600;
    }

    /* 离线模式下的页面样式调整 */
    body.offline-mode {
      padding-top: 44px; /* 为离线横幅留出空间 */
    }

    body.offline-mode .secret-card {
      opacity: 0.95;
    }

    /* ========== 离线横幅响应式 ========== */

    /* 移动设备 */
    @media (max-width: 480px) {
      .offline-banner {
        padding: 10px 16px;
      }

      .offline-banner-icon {
        font-size: 18px;
      }

      .offline-banner-text {
        font-size: 13px;
      }

      body.offline-mode {
        padding-top: 40px;
      }
    }

    /* 超小屏幕 */
    @media (max-width: 360px) {
      .offline-banner {
        padding: 8px 12px;
      }

      .offline-banner-icon {
        font-size: 16px;
      }

      .offline-banner-text {
        font-size: 12px;
      }

      body.offline-mode {
        padding-top: 36px;
      }
    }

    /* 超宽屏幕 */
    @media (min-width: 1440px) {
      .action-menu-float {
        right: calc(32px + env(safe-area-inset-right, 0px));
      }
    }

`;
}

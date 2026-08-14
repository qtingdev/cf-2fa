/**
 * 组件样式模块 - Stripe Dashboard 经典卡片与列表设计规范
 */
export function getComponentStyles() {
	return `    /* ========== 密钥列表容器 (网格视图) ========== */
    .secrets-list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
      gap: 16px;
      justify-content: center;
      margin: 0 auto;
      width: 100%;
    }

    /* ========== 网格模式卡片 (Stripe Dashboard 经典卡片) ========== */
    .secret-card {
      background: var(--stripe-surface);
      border-radius: var(--radius-surface);
      padding: 14px 16px;
      border: 1px solid var(--stripe-border);
      transition:
        box-shadow 0.15s ease,
        border-color 0.15s ease,
        background-color 0.15s ease;
      position: relative;
      width: 100%;
      box-shadow: var(--shadow-stripe-sm);
      margin-bottom: 0;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-sizing: border-box;
      overflow: hidden;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -webkit-touch-callout: none;
    }

    /* 顶部细微渐变强调条 (悬浮触发) */
    .secret-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2.5px;
      background: linear-gradient(90deg, #635bff, #00d4ff);
      opacity: 0;
      transition: opacity 0.15s ease;
    }

    .secret-card:hover {
      border-color: rgba(99, 91, 255, 0.45);
      box-shadow: var(--shadow-stripe-md);
    }

    .secret-card:hover::before {
      opacity: 1;
    }

    .secret-card.menu-open {
      z-index: 10001;
      overflow: visible;
    }

    .secret-card-draggable {
      cursor: grab;
    }

    .secret-card-draggable:active {
      cursor: grabbing;
    }

    .secret-card.dragging {
      opacity: 0.55;
      border-color: var(--stripe-blurple);
    }

    .secret-card.drag-over {
      border-color: var(--stripe-blurple);
      background: var(--stripe-blurple-light);
    }

    /* ========== 列表视图模式 (Stripe 数据行样式) ========== */
    .secrets-list.view-list {
      display: flex;
      flex-direction: column;
      grid-template-columns: none;
      justify-content: flex-start;
      align-items: stretch;
      gap: 10px;
      width: 100%;
    }

    .secrets-list.view-list .secret-card {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      padding: 8px 10px;
      border-radius: var(--radius-surface);
      background: var(--stripe-surface);
      border: 1px solid var(--stripe-border);
      box-shadow: var(--shadow-stripe-xs);
    }

    .secrets-list.view-list .secret-card:hover {
      background: var(--stripe-surface);
      border-color: rgba(99, 91, 255, 0.45);
      box-shadow: var(--shadow-stripe-sm);
    }

    .secrets-list.view-list .card-header {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 14px;
      margin-bottom: 0;
      flex: 1 1 auto;
      min-width: 0;
    }

    .secrets-list.view-list .secret-info {
      display: flex;
      align-items: center;
      gap: 12px;
      flex: 1;
      min-width: 0;
    }

    .secrets-list.view-list .service-icon {
      width: 36px;
      height: 36px;
      flex: 0 0 36px;
      border-radius: 10px;
      font-size: 14px;
    }

    .secrets-list.view-list .service-icon img {
      width: 24px;
      height: 24px;
    }

    .secrets-list.view-list .secret-text {
      display: flex;
      align-items: baseline;
      gap: 8px;
      flex: 1;
      min-width: 0;
    }

    .secrets-list.view-list .secret-details {
      display: flex;
      align-items: baseline;
      gap: 8px;
      flex: 1;
      min-width: 0;
    }

    .secrets-list.view-list .service-name-row {
      display: flex;
      align-items: center;
      gap: 6px;
      flex-shrink: 0;
    }

    .secrets-list.view-list .secret-text h3 {
      font-size: 14px;
      font-weight: 700;
      color: var(--stripe-navy);
      white-space: nowrap;
    }

    .secrets-list.view-list .secret-text .secret-account {
      font-size: 13px;
      color: var(--stripe-muted);
      margin: 0;
      text-align: left;
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
      color: var(--stripe-border);
    }

    .secrets-list.view-list .secret-created-at {
      flex: 0 0 auto;
      margin: 0;
      font-size: 11px;
      color: var(--stripe-muted);
    }

    .secrets-list.view-list .secret-created-at::before {
      content: '·';
      margin-right: 6px;
      color: var(--stripe-border);
    }

    .secrets-list.view-list .card-main-content {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      flex: 1;
      min-width: 0;
      gap: 16px;
    }

    .secrets-list.view-list .card-header-actions {
      order: 3;
      margin-left: 0;
    }

    .secrets-list.view-list .otp-display-box {
      margin: 0;
      padding: 0 8px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      gap: 12px;
      flex-shrink: 0;
    }

    .secrets-list.view-list .otp-code-wrapper {
      flex: 0 0 auto;
    }

    .secrets-list.view-list .otp-code-label {
      display: none;
    }

    .secrets-list.view-list .otp-current-val,
    .secrets-list.view-list .otp-code {
      font-size: 20px;
      font-weight: 700;
      letter-spacing: 1.5px;
      margin: 0;
      color: var(--stripe-navy);
    }

    .secrets-list.view-list .timer-ring-wrapper {
      width: 24px;
      height: 24px;
      flex: 0 0 24px;
    }

    .secrets-list.view-list .timer-ring-svg {
      width: 24px;
      height: 24px;
    }

    .secrets-list.view-list .timer-ring-wrapper .timer-num-text,
    .secrets-list.view-list .timer-ring-wrapper .live-sec-num {
      font-size: 8px;
    }

    .secrets-list.view-list .card-footer-row {
      border-top: none;
      padding-top: 0;
      margin-left: 0;
      gap: 10px;
      flex-shrink: 0;
    }

    .secrets-list.view-list .quick-copy-hint {
      display: none;
    }

    .secrets-list.view-list .otp-countdown-ring {
      width: 20px;
      height: 20px;
      flex: 0 0 20px;
    }

    .secrets-list.view-list .otp-next-container {
      flex-direction: row;
      align-items: center;
      gap: 6px;
      padding: 3px 8px;
      min-width: auto;
      height: 28px;
    }

    .secrets-list.view-list .otp-next-code {
      font-size: 12px;
      font-weight: 600;
    }

    @media (max-width: 640px) {
      .secrets-list.view-list .secret-card {
        flex-direction: column;
        align-items: stretch;
        padding: 12px 14px;
        gap: 10px;
      }

      .secrets-list.view-list .card-main-content {
        flex-direction: column;
        align-items: stretch;
        gap: 10px;
        width: 100%;
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

      .secrets-list.view-list .secret-details {
        flex-direction: column;
        align-items: flex-start;
        gap: 1px;
      }

      .secrets-list.view-list .secret-text .secret-account::before,
      .secrets-list.view-list .secret-created-at::before {
        display: none;
      }

      .secrets-list.view-list .card-header-actions {
        order: 1;
      }

      .secrets-list.view-list .otp-display-box {
        width: 100%;
        justify-content: space-between;
      }

      .secrets-list.view-list .card-footer-row {
        width: 100%;
        justify-content: flex-end;
      }

      .secrets-list.view-list .otp-next-container {
        margin-left: auto;
      }
    }

    /* ========== 卡片内部细节组件 ========== */
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 10px;
      margin-bottom: 14px;
    }

    .card-header-actions {
      display: flex;
      align-items: center;
      gap: 4px;
      flex-shrink: 0;
    }

    .secret-info {
      display: flex;
      align-items: center;
      gap: 12px;
      flex: 1;
      min-width: 0;
    }

    .service-icon {
      width: 40px;
      height: 40px;
      flex: 0 0 40px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 800;
      font-size: 15px;
      color: #ffffff;
      background: var(--stripe-blurple);
      border: 1px solid rgba(255, 255, 255, 0.15);
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
      user-select: none;
    }

    .service-icon img {
      width: 28px;
      height: 28px;
      object-fit: contain;
      border-radius: 6px;
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
      color: var(--stripe-navy);
      font-size: 15px;
      font-weight: 700;
      margin: 0;
      line-height: 1.3;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      letter-spacing: 0;
    }

    .secret-badge.hotp-badge {
      font-size: 10px;
      font-weight: 700;
      padding: 1px 5px;
      border-radius: 4px;
      background: var(--stripe-amber-light);
      border: 1px solid rgba(245, 158, 11, 0.2);
      color: #b45309;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      flex-shrink: 0;
    }

    .secret-text .secret-account {
      display: block;
      max-width: 100%;
      margin-top: 3px;
      color: var(--stripe-muted);
      font-size: 12.5px;
      font-weight: 500;
      line-height: 1.35;
      text-align: left;
      overflow: visible;
      text-overflow: clip;
      white-space: normal;
      overflow-wrap: anywhere;
      word-break: break-word;
      font-variant-numeric: tabular-nums;
    }

    .secret-details {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1px;
      min-width: 0;
    }

    .secret-created-at {
      margin: 0;
      color: var(--stripe-muted);
      font-size: 11px;
      font-weight: 400;
      line-height: 1.35;
      white-space: nowrap;
      font-variant-numeric: tabular-nums;
    }

    .secret-counter {
      font-size: 11px;
      color: var(--stripe-muted);
      margin: 2px 0 0 0;
      font-family: var(--font-mono);
    }

    .card-menu {
      position: relative;
      cursor: pointer;
      width: 32px;
      height: 32px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 7px;
      color: var(--stripe-muted);
      transition: background-color 0.12s ease, color 0.12s ease;
    }

    .card-menu:hover {
      background: var(--bg-hover);
      color: var(--stripe-navy);
    }

    .drag-handle {
      width: 32px;
      height: 32px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: 1px solid var(--stripe-border);
      border-radius: 7px;
      background: var(--stripe-surface);
      color: var(--stripe-muted);
      cursor: grab;
      touch-action: none;
      transition: all 0.15s ease;
    }

    .drag-handle:hover,
    .drag-handle:focus-visible {
      border-color: var(--stripe-blurple);
      background: var(--stripe-blurple-light);
      color: var(--stripe-blurple);
      outline: none;
    }

    .drag-handle:active {
      cursor: grabbing;
    }

    .menu-dots {
      color: var(--stripe-muted);
      line-height: 1;
      user-select: none;
      width: 18px;
      height: 18px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .card-menu-dropdown {
      display: none;
      position: absolute;
      top: -6px;
      right: -6px;
      background: var(--stripe-surface);
      border: 1px solid var(--stripe-border);
      border-radius: 12px;
      min-width: 140px;
      box-shadow: var(--shadow-stripe-lg);
      z-index: 10000;
      overflow: hidden;
      padding: 4px;
    }

    .card-menu-dropdown.show {
      display: block;
    }

    .menu-item {
      padding: 8px 12px;
      color: var(--stripe-slate);
      cursor: pointer;
      transition: background 0.12s ease, color 0.12s ease;
      font-size: 13px;
      font-weight: 500;
      white-space: nowrap;
      display: flex;
      align-items: center;
      gap: 8px;
      border-radius: 6px;
    }

    .menu-item:hover {
      background: var(--bg-hover);
      color: var(--stripe-navy);
    }

    .menu-item-danger {
      color: var(--stripe-red) !important;
    }

    .menu-item-danger:hover {
      background: var(--stripe-red-light) !important;
    }

    /* ========== 方案一：Stripe 经典 OTP 验证码展示区与圆形倒计时 ========== */
    .otp-display-box {
      background: var(--stripe-canvas);
      border: 1px solid var(--stripe-border);
      border-radius: 10px;
      padding: 12px 14px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 12px;
      margin-bottom: 12px;
      transition: background 0.15s ease, border-color 0.15s ease;
    }

    .secret-card:hover .otp-display-box {
      background: var(--stripe-surface);
      border-color: rgba(99, 91, 255, 0.25);
    }

    .otp-code-wrapper {
      display: flex;
      flex-direction: column;
      flex: 1;
      min-width: 0;
    }

    .otp-code-label {
      font-size: 11px;
      font-weight: 600;
      color: var(--stripe-muted);
      text-transform: uppercase;
      letter-spacing: 0.04em;
      margin-bottom: 2px;
    }

    .otp-current-val, .otp-code {
      font-family: var(--font-mono);
      font-size: 24px;
      font-weight: 700;
      letter-spacing: 2px;
      color: var(--stripe-navy);
      transition: color 0.15s ease;
      cursor: pointer;
      font-variant-numeric: tabular-nums;
      line-height: 1.2;
      border: none;
      background: none;
      padding: 0;
      text-align: left;
    }

    .secret-card:hover .otp-current-val,
    .secret-card:hover .otp-code {
      color: var(--stripe-blurple);
    }

    .timer-ring-wrapper {
      position: relative;
      width: 34px;
      height: 34px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .timer-ring-svg {
      transform: rotate(-90deg);
      width: 34px;
      height: 34px;
    }

    .ring-bg {
      fill: none;
      stroke: var(--stripe-border);
      stroke-width: 3;
    }

    .ring-progress, .otp-countdown-ring {
      fill: none;
      stroke: var(--stripe-blurple);
      stroke-width: 3;
      stroke-linecap: round;
      stroke-dasharray: 100.53;
      stroke-dashoffset: 0;
      transition: stroke-dashoffset 1s linear, stroke 0.3s ease;
    }

    .timer-ring-wrapper .timer-num-text,
    .timer-ring-wrapper .live-sec-num {
      position: absolute;
      font-size: 10px;
      font-weight: 700;
      font-family: var(--font-mono);
      color: var(--stripe-slate);
      pointer-events: none;
    }

    /* ========== 方案一：卡片底栏与下期验证码 ========== */
    .card-footer-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 12px;
      color: var(--stripe-muted);
      padding-top: 10px;
      border-top: 1px solid var(--stripe-border-light);
    }

    .next-otp-pill, .otp-next-container {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 11px;
      background: var(--stripe-border-light);
      padding: 3px 8px;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.15s ease;
      border: 1px solid transparent;
    }

    .next-otp-pill:hover, .otp-next-container:hover {
      background: var(--stripe-blurple-light);
      border-color: rgba(99, 91, 255, 0.3);
    }

    .next-otp-pill strong, .otp-next-code {
      font-family: var(--font-mono);
      color: var(--stripe-slate);
      font-weight: 600;
    }

    .next-otp-pill:hover strong, .otp-next-container:hover .otp-next-code {
      color: var(--stripe-blurple);
    }

    .quick-copy-hint {
      display: flex;
      align-items: center;
      gap: 4px;
      font-weight: 600;
      color: var(--stripe-blurple);
      opacity: 0.8;
      cursor: pointer;
      transition: opacity 0.15s ease;
      font-size: 12px;
    }

    .secret-card:hover .quick-copy-hint {
      opacity: 1;
    }

    .progress-mini {
      width: 60px;
      height: 4px;
      background: var(--stripe-border);
      border-radius: 2px;
      overflow: hidden;
    }

    .progress-mini-fill {
      height: 100%;
      background: var(--stripe-blurple);
      border-radius: 2px;
      transition: width 1s linear;
    }

    /* ========== 同步目标卡片 ========== */
    .dest-card {
      background: var(--stripe-canvas);
      border: 1px solid var(--stripe-border);
      border-radius: 12px;
      padding: 14px 16px;
      margin-bottom: 10px;
      transition: all 0.15s ease;
    }

    .dest-card:hover {
      border-color: rgba(99, 91, 255, 0.35);
      box-shadow: var(--shadow-stripe-xs);
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
      font-weight: 700;
      font-size: 14px;
      color: var(--stripe-navy);
      margin-bottom: 2px;
    }

    .dest-card-url {
      display: block;
      font-size: 12px;
      color: var(--stripe-muted);
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
      background: var(--stripe-green);
    }

    .dest-status-dot-red {
      background: var(--stripe-red);
    }

    .dest-status-dot-gray {
      background: var(--stripe-muted);
    }

    .dest-status-text {
      font-size: 12px;
      color: var(--stripe-muted);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .dest-card-actions {
      display: flex;
      gap: 8px;
    }

    .btn-sm {
      padding: 5px 12px;
      font-size: 12px;
      font-weight: 500;
      border-radius: 6px;
      cursor: pointer;
      border: 1px solid var(--stripe-border);
      background: var(--stripe-surface);
      color: var(--stripe-slate);
      transition: all 0.15s ease;
    }

    .btn-sm:hover {
      border-color: var(--stripe-blurple);
      color: var(--stripe-blurple);
      background: var(--stripe-blurple-light);
    }

    .btn-danger-outline {
      border-color: rgba(223, 27, 65, 0.3);
      color: var(--stripe-red);
    }

    .btn-danger-outline:hover {
      background: var(--stripe-red-light);
      border-color: var(--stripe-red);
    }

    /* 开关切换 (Stripe Toggle Switch) */
    .dest-toggle {
      position: relative;
      display: inline-block;
      width: 38px;
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
      background: var(--stripe-border);
      border-radius: 22px;
      transition: 0.2s ease;
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
      box-shadow: 0 1px 3px rgba(0,0,0,0.2);
      transition: 0.2s ease;
    }

    .dest-toggle input:checked + .dest-toggle-slider {
      background: var(--stripe-blurple);
    }

    .dest-toggle input:checked + .dest-toggle-slider:before {
      transform: translateX(16px);
    }

    /* 离线横幅 */
    .offline-banner {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: var(--stripe-amber);
      color: #ffffff;
      padding: 10px 20px;
      box-shadow: var(--shadow-stripe-md);
      z-index: 999;
      transform: translateY(-100%);
      transition: transform 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }

    .offline-banner.show {
      transform: translateY(0);
    }
`;
}

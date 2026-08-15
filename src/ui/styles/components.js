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

    .secret-card:focus-visible {
      outline: none;
      border-color: var(--stripe-blurple);
      box-shadow: 0 0 0 3px var(--stripe-blurple-ring), var(--shadow-stripe-md);
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

    /* ========== 列表视图模式 (方案一原型表格) ========== */
    .secrets-list.view-list {
      display: block;
      width: 100%;
      min-width: 0;
    }

    .classic-table-wrap {
      width: 100%;
      max-width: 100%;
      background: var(--stripe-surface);
      border: 1px solid var(--stripe-border);
      border-radius: 12px;
      box-shadow: var(--shadow-stripe-sm);
      overflow-x: auto;
      overscroll-behavior-inline: contain;
      -webkit-overflow-scrolling: touch;
    }

    .classic-table {
      width: 100%;
      min-width: 980px;
      border-collapse: collapse;
      text-align: left;
      font-size: 13px;
    }

    .classic-table th {
      padding: 12px 18px;
      background: var(--stripe-canvas);
      border-bottom: 1px solid var(--stripe-border);
      color: var(--stripe-muted);
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      white-space: nowrap;
    }

    .classic-table td {
      padding: 14px 18px;
      border-bottom: 1px solid var(--table-row-divider);
      color: var(--stripe-navy);
      vertical-align: middle;
      transition: background-color 0.15s ease;
    }

    .classic-table tbody tr:last-child td {
      border-bottom: none;
    }

    .classic-table tbody tr:hover td {
      background: var(--stripe-canvas);
    }

    .secret-table-row.dragging td {
      opacity: 0.55;
    }

    .secret-table-row.drag-over td {
      background: var(--stripe-blurple-light);
      box-shadow: inset 0 -2px 0 var(--stripe-blurple);
    }

    .secret-row-draggable {
      cursor: grab;
    }

    .table-service-cell {
      display: flex;
      align-items: center;
      gap: 10px;
      min-width: 220px;
    }

    .service-icon.table-service-avatar {
      width: 32px;
      height: 32px;
      flex: 0 0 32px;
      border-radius: 8px;
      font-size: 12px;
    }

    .table-service-text {
      min-width: 0;
    }

    .table-service-name {
      color: var(--stripe-navy);
      font-size: 13px;
      font-weight: 700;
      line-height: 1.35;
    }

    .table-service-account {
      margin-top: 2px;
      color: var(--stripe-muted);
      font-size: 12px;
      line-height: 1.35;
      overflow-wrap: anywhere;
      word-break: break-word;
    }

    .classic-table .table-type-badge,
    .classic-table .table-type-badge.totp-badge,
    .classic-table .table-type-badge.hotp-badge {
      display: inline-flex;
      align-items: center;
      padding: 3px 8px;
      border: 1px solid var(--stripe-border);
      border-radius: 6px;
      background: var(--stripe-canvas);
      color: var(--stripe-slate);
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0;
    }

    .classic-table .table-code-cell,
    .classic-table .table-next-code {
      border: none;
      background: transparent;
      padding: 0;
      font-family: var(--font-mono);
      font-variant-numeric: tabular-nums;
      cursor: pointer;
      white-space: nowrap;
    }

    .classic-table .table-code-cell {
      color: var(--stripe-navy);
      font-size: 16px;
      font-weight: 700;
      letter-spacing: 1px;
      line-height: 1.2;
    }

    .classic-table .table-code-cell:hover,
    .classic-table .table-next-code:hover {
      color: var(--stripe-blurple-hover);
    }

    .table-expiry {
      display: flex;
      align-items: center;
      gap: 8px;
      white-space: nowrap;
    }

    .table-progress-track {
      width: 50px;
      height: 6px;
      overflow: hidden;
      background: var(--stripe-border);
      border-radius: 3px;
    }

    .table-progress-fill {
      width: 100%;
      height: 100%;
      background: var(--stripe-blurple);
      border-radius: inherit;
      transition: width 1s linear, background-color 0.3s ease;
    }

    .table-seconds,
    .table-created-at,
    .table-on-demand,
    .table-empty-value {
      color: var(--stripe-muted);
      font-size: 11px;
      font-variant-numeric: tabular-nums;
      white-space: nowrap;
    }

    .table-seconds,
    .table-empty-value {
      font-family: var(--font-mono);
    }

    .classic-table .table-next-code {
      color: var(--stripe-slate);
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 0.5px;
    }

    .table-actions-heading,
    .table-actions-cell {
      text-align: right;
    }

    .table-actions {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 6px;
      white-space: nowrap;
    }

    .table-copy-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      min-height: 28px;
      padding: 5px 10px;
      border: 1px solid var(--stripe-border);
      border-radius: 6px;
      background: var(--stripe-surface);
      color: var(--stripe-navy);
      font-family: var(--font-sans);
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      transition: background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease;
    }

    .table-copy-btn:hover {
      background: var(--stripe-blurple);
      border-color: var(--stripe-blurple);
      color: #ffffff;
    }

    .table-copy-btn .ui-icon {
      width: 13px;
      height: 13px;
    }

    .table-actions .card-menu,
    .drag-handle.table-drag-handle {
      width: 30px;
      height: 30px;
      flex: 0 0 30px;
    }

    @media (max-width: 640px) {
      .classic-table {
        min-width: 900px;
      }

      .classic-table th,
      .classic-table td {
        padding-right: 14px;
        padding-left: 14px;
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
      color: var(--stripe-blurple);
      background: transparent;
      border: none;
      box-shadow: none;
      overflow: hidden;
      user-select: none;
    }

    .service-icon img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: inherit;
    }

    .service-avatar-fallback {
      width: 100%;
      height: 100%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: var(--stripe-blurple);
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
      /*width: 32px;
      height: 32px;*/
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
      width: 24px;
      height: 24px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .card-menu-dropdown {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      right: auto;
      background: var(--stripe-surface);
      border: 1px solid var(--stripe-border);
      border-radius: 12px;
      min-width: 140px;
      box-shadow: var(--shadow-stripe-lg);
      z-index: 100000;
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
      justify-content: center;
      flex: 1;
      min-width: 0;
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

    .otp-next-label {
      color: var(--stripe-muted);
      font-family: var(--font-sans);
      font-weight: 500;
      white-space: nowrap;
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
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      cursor: pointer;
      transition: opacity 0.15s ease, visibility 0.15s ease;
      font-size: 12px;
    }

    .secret-card:hover .quick-copy-hint,
    .secret-card:focus-visible .quick-copy-hint,
    .secret-card:focus-within .quick-copy-hint {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
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

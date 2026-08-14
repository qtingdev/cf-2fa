/**
 * 响应式样式模块 - Stripe Dashboard 经典设计系统
 * CSS 变量处理颜色主题，此文件处理多端自适应布局与专用组件响应式
 */
export function getResponsiveStyles() {
	return `    /* ========== 全局 Select 和 Option 样式修复 ========== */
    /* 修复 iOS/Safari/iPad 下拉列表显示问题 */
    select.backup-select {
      width: 100% !important;
      max-width: 100% !important;
      box-sizing: border-box !important;
    }

    select.backup-select option {
      white-space: nowrap !important;
      overflow: hidden !important;
      text-overflow: ellipsis !important;
      line-height: normal !important;
      display: block !important;
    }

    /* ========== 还原配置与备份管理样式 ========== */
    .restore-instructions {
      padding: 16px 18px;
      margin-bottom: 20px;
      background: var(--restore-instructions-bg);
      border-radius: 10px;
      border-left: 4px solid var(--stripe-red);
      box-shadow: var(--shadow-stripe-xs);
    }

    .restore-instructions p {
      margin: 0;
      font-size: 13.5px;
      color: var(--stripe-navy);
      line-height: 1.5;
    }

    .restore-instructions p:first-child {
      font-weight: 600;
      margin-bottom: 6px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .restore-instructions p:last-child {
      color: var(--restore-warning-text);
      font-size: 12px;
      background: var(--restore-warning-bg);
      padding: 6px 10px;
      border-radius: 6px;
      border: 1px solid var(--restore-warning-border);
      margin-top: 8px;
    }

    .restore-content {
      display: flex;
      flex-direction: column;
      gap: 18px;
      margin-bottom: 20px;
    }

    .backup-list-container {
      width: 100%;
      min-width: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .backup-list-header {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 12px;
      padding: 10px 14px;
      background: var(--stripe-blurple-light);
      border-radius: 8px;
      border: 1px solid rgba(99, 91, 255, 0.2);
      width: 100%;
      box-sizing: border-box;
    }

    .backup-list-header span {
      font-weight: 600;
      color: var(--stripe-blurple);
      font-size: 13px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .backup-actions {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
      gap: 10px;
      width: 100%;
    }

    .backup-select-wrapper {
      position: relative;
      width: 100%;
    }

    .backup-select {
      width: 100%;
      min-width: 100%;
      max-width: 100%;
      height: 40px;
      padding: 0 14px;
      border: 1px solid var(--stripe-border);
      border-radius: 8px;
      background: var(--stripe-surface);
      font-size: 13.5px;
      color: var(--stripe-navy);
      cursor: pointer;
      transition: all 0.15s ease;
      box-shadow: var(--shadow-stripe-xs);
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23635bff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e");
      background-repeat: no-repeat;
      background-position: right 12px center;
      background-size: 16px;
      padding-right: 38px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      box-sizing: border-box;
      display: block;
    }

    .backup-select:hover {
      border-color: var(--stripe-blurple);
    }

    .backup-select:focus {
      outline: none;
      border-color: var(--stripe-blurple);
      box-shadow: 0 0 0 3px var(--stripe-blurple-ring);
    }

    .backup-select option {
      white-space: nowrap !important;
      overflow: hidden !important;
      text-overflow: ellipsis !important;
      padding: 8px 12px !important;
      font-size: 13px !important;
      line-height: normal !important;
      max-width: 100% !important;
      display: block !important;
      color: var(--stripe-navy);
      background: var(--stripe-surface);
    }

    .backup-preview {
      width: 100%;
      min-width: 0;
    }

    .preview-header {
      font-weight: 600;
      color: var(--stripe-navy);
      margin-bottom: 12px;
      padding: 10px 14px;
      background: var(--stripe-green-light);
      border-radius: 8px;
      border: 1px solid rgba(0, 217, 126, 0.3);
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 13px;
    }

    .backup-preview-content {
      max-height: 320px;
      overflow-y: auto;
      border: 1px solid var(--stripe-border);
      border-radius: 10px;
      background: var(--stripe-surface);
      box-shadow: var(--shadow-stripe-xs);
      scrollbar-width: thin;
      scrollbar-color: var(--scrollbar-thumb) var(--scrollbar-track);
    }

    .backup-preview-content::-webkit-scrollbar {
      width: 6px;
    }

    .backup-preview-content::-webkit-scrollbar-track {
      background: var(--scrollbar-track);
      border-radius: 3px;
    }

    .backup-preview-content::-webkit-scrollbar-thumb {
      background: var(--scrollbar-thumb);
      border-radius: 3px;
    }

    .backup-table-container {
      width: 100%;
      overflow-x: auto;
    }

    .backup-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 12.5px;
      background: var(--stripe-surface);
      border-radius: 8px;
      overflow: hidden;
      border: 1px solid var(--stripe-border);
    }

    .backup-table thead {
      background: var(--stripe-canvas);
      color: var(--stripe-navy);
    }

    .backup-table th {
      padding: 10px 14px;
      text-align: left;
      font-weight: 600;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: var(--stripe-muted);
      border-bottom: 1px solid var(--stripe-border);
      border-right: 1px solid var(--stripe-border-light);
    }

    .backup-table th:last-child {
      border-right: none;
    }

    .backup-table tbody tr {
      border-bottom: 1px solid var(--stripe-border-light);
      transition: background-color 0.12s ease;
    }

    .backup-table tbody tr:hover {
      background: var(--bg-hover);
    }

    .backup-table tbody tr:last-child {
      border-bottom: none;
    }

    .backup-table td {
      padding: 10px 14px;
      vertical-align: middle;
      word-break: break-word;
      border-right: 1px solid var(--stripe-border-light);
      color: var(--stripe-slate);
    }

    .backup-table td:last-child {
      border-right: none;
    }

    .service-name {
      font-weight: 600;
      color: var(--stripe-navy);
      min-width: 100px;
      max-width: 160px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .account-info {
      color: var(--stripe-muted);
      min-width: 120px;
      max-width: 180px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .secret-type {
      color: var(--stripe-green);
      font-weight: 600;
      text-align: center;
      min-width: 70px;
      white-space: nowrap;
    }

    .created-time {
      color: var(--stripe-muted);
      font-size: 11px;
      min-width: 120px;
      font-variant-numeric: tabular-nums;
    }

    .loading-backup,
    .no-backups {
      text-align: center;
      padding: 24px 16px;
      color: var(--stripe-muted);
      font-size: 13px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }

    .loading-backup .ui-icon,
    .no-backups .ui-icon {
      width: 22px;
      height: 22px;
      color: var(--stripe-muted);
    }

    /* ========== Stripe 经典居中 Toast 胶囊提示 ========== */
    .center-toast {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0.96);
      z-index: 100000;
      pointer-events: none;
      opacity: 0;
      transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .center-toast.show {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }

    .toast-content {
      background: var(--stripe-navy);
      color: #ffffff;
      padding: 12px 20px;
      border-radius: 9999px;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      box-shadow: 0 10px 30px -5px rgba(10, 37, 64, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.15);
      border: none;
      min-width: 180px;
      max-width: min(90vw, 500px);
      text-align: center;
      font-size: 14px;
      font-weight: 600;
      backdrop-filter: blur(8px);
    }

    [data-theme="dark"] .toast-content {
      background: #1e293b;
      color: #f7fafc;
      box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.1);
    }

    .toast-icon {
      flex-shrink: 0;
      width: 18px;
      height: 18px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: var(--stripe-green);
    }

    .toast-icon .ui-icon,
    .toast-svg {
      width: 18px;
      height: 18px;
    }

    .toast-message {
      flex: 1;
      white-space: normal;
      word-break: break-word;
      overflow-wrap: anywhere;
      line-height: 1.4;
    }

    /* ========== 扫描器相关样式 ========== */
    .scanner-section {
      padding: 14px 0;
    }

    .scanner-description {
      text-align: center;
      margin-top: 8px;
      margin-bottom: 8px;
      padding: 8px 12px;
      background: var(--stripe-canvas);
      border-radius: 6px;
      color: var(--stripe-muted);
      font-size: 11px;
      line-height: 1.4;
      border: 1px solid var(--stripe-border);
    }

    .scanner-bottom-actions {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      margin: 10px 0 6px 0;
      padding: 0 4px;
    }

    .continuous-scan-inline {
      display: flex;
      align-items: center;
      gap: 6px;
      cursor: pointer;
      user-select: none;
      font-size: 12.5px;
      color: var(--stripe-slate);
    }

    .continuous-scan-inline input[type="checkbox"] {
      width: 15px;
      height: 15px;
      accent-color: var(--stripe-green);
      cursor: pointer;
    }

    .scanner-hint {
      text-align: center;
      font-size: 11px;
      color: var(--stripe-muted);
      margin-bottom: 8px;
      line-height: 1.4;
    }

    .scan-counter {
      text-align: center;
      padding: 8px 14px;
      margin-bottom: 12px;
      background: var(--stripe-green-light);
      border: 1px solid rgba(0, 217, 126, 0.3);
      border-radius: 6px;
      font-size: 13px;
      font-weight: 600;
      color: #059669;
    }

    .scan-counter #scanCountNum {
      font-size: 16px;
      color: var(--stripe-green);
      margin: 0 4px;
      font-family: var(--font-mono);
    }

    .scanner-container {
      position: relative;
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
    }

    .video-wrapper {
      position: relative;
      width: 320px;
      height: 320px;
      border-radius: 14px;
      overflow: hidden;
      box-shadow: var(--shadow-stripe-md);
      background: #000000;
      border: 2px solid var(--stripe-border);
      transition: all 0.2s ease;
    }

    .video-wrapper video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    .scanner-overlay {
      position: absolute;
      inset: 0;
      pointer-events: none;
      background: rgba(0, 0, 0, 0.45);
    }

    .scanner-frame {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 68%;
      height: 68%;
      border: 3px solid var(--stripe-green);
      border-radius: 12px;
      box-shadow: 0 0 24px rgba(0, 217, 126, 0.5), inset 0 0 20px rgba(0, 217, 126, 0.2);
    }

    .scanner-status {
      text-align: center;
      margin-bottom: 18px;
      padding: 10px 16px;
      background: var(--stripe-canvas);
      border-radius: 8px;
      color: var(--stripe-navy);
      font-size: 13.5px;
      font-weight: 500;
      line-height: 1.5;
      min-height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      border: 1px solid var(--stripe-border);
    }

    .scanner-error {
      background: var(--stripe-red-light);
      border: 1px solid rgba(223, 27, 65, 0.3);
      border-radius: 8px;
      padding: 10px;
      margin-bottom: 10px;
      text-align: center;
      color: var(--stripe-red);
    }

    .scanner-error #errorMessage {
      margin-bottom: 6px;
      font-size: 12px;
      line-height: 1.4;
      font-weight: 500;
      white-space: pre-line;
    }

    .scanner-actions {
      margin-top: 18px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .scanner-actions .btn {
      width: 100%;
      padding: 10px 18px;
      font-size: 14px;
      font-weight: 600;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }

    /* ========== 响应式断点系统 (Stripe Breakpoints) ========== */

    /* 移动端 (< 600px) */
    @media (max-width: 600px) {
      .video-wrapper {
        width: 280px;
        height: 280px;
        border-radius: 12px;
      }

      .scanner-actions {
        flex-direction: column;
      }

      .scanner-actions .btn {
        width: 100%;
      }
    }

    /* 平板端 (601px - 1024px) */
    @media (min-width: 601px) and (max-width: 1024px) {
      .video-wrapper {
        width: 360px;
        height: 360px;
      }

      .scanner-actions {
        flex-direction: row;
      }

      .scanner-actions .btn {
        flex: 1;
      }
    }

    /* 桌面端 (> 1024px) */
    @media (min-width: 1025px) {
      .video-wrapper {
        width: 380px;
        height: 380px;
      }

      .scanner-actions {
        flex-direction: row;
      }

      .scanner-actions .btn {
        flex: 1;
      }
    }
`;
}

/**
 * 弹窗样式模块 - Stripe Dashboard 经典设计系统
 */
export function getModalStyles() {
	return `    /* ========== 基础模态框容器与遮罩 ========== */
    .modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--modal-overlay);
      z-index: 99999;
      padding: 20px;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
    }

    .modal.show {
      display: flex;
    }

    /* Stripe Dashboard 浮动模态卡片 */
    .modal-content {
      background: var(--modal-bg);
      border: 1px solid var(--modal-border);
      border-radius: 16px;
      padding: 24px;
      max-width: 600px;
      width: 100%;
      max-height: 85vh;
      overflow-y: auto;
      color: var(--stripe-navy);
      box-shadow: var(--shadow-stripe-floating);
      transform: scale(0.98);
      opacity: 0;
      transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease;
      scrollbar-width: thin;
      scrollbar-color: var(--scrollbar-thumb) var(--scrollbar-track);
      box-sizing: border-box;
    }

    /* FAB 链路弹窗统一宽度 */
    .fab-modal .modal-content,
    .modal-content.fab-modal-content {
      max-width: var(--fab-modal-max-width, 600px);
    }

    .fab-modal-sm .modal-content,
    .modal-content.fab-modal-sm-content {
      max-width: var(--fab-modal-sm-max-width, 450px);
    }

    .fab-modal-lg .modal-content,
    .modal-content.fab-modal-lg-content {
      max-width: var(--fab-modal-lg-max-width, 680px);
    }

    /* 模态框滚动条样式 */
    .modal-content::-webkit-scrollbar {
      width: 6px;
    }

    .modal-content::-webkit-scrollbar-track {
      background: var(--scrollbar-track);
      border-radius: 8px;
    }

    .modal-content::-webkit-scrollbar-thumb {
      background: var(--scrollbar-thumb);
      border-radius: 4px;
    }

    .modal-content::-webkit-scrollbar-thumb:hover {
      background: var(--scrollbar-thumb-hover);
    }

    .modal.show .modal-content {
      transform: scale(1);
      opacity: 1;
    }

    .modal.drag-over .modal-content {
      border: 2px dashed var(--stripe-blurple);
      background: var(--stripe-blurple-light);
      box-shadow: inset 0 0 30px rgba(99, 91, 255, 0.1);
    }

    .modal.drag-over::after {
      content: '松开鼠标识别二维码';
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: var(--stripe-blurple);
      color: #ffffff;
      padding: 14px 28px;
      border-radius: 10px;
      font-size: 15px;
      font-weight: 600;
      z-index: 999999;
      pointer-events: none;
      box-shadow: var(--shadow-stripe-lg);
    }

    /* ========== 弹窗头部规范 ========== */
    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      padding-bottom: 16px;
      border-bottom: 1px solid var(--stripe-border-light);
    }

    .modal-header h2 {
      color: var(--stripe-navy);
      font-size: 18px;
      font-weight: 700;
      letter-spacing: 0;
      margin: 0;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .modal-title-icon {
      width: 20px;
      height: 20px;
      color: var(--stripe-blurple);
    }

    .modal-actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 24px;
      padding-top: 16px;
      border-top: 1px solid var(--stripe-border-light);
    }

    /* ========== Stripe 按钮设计系统 ========== */
    .btn {
      height: var(--control-height-md, 40px);
      padding: 0 18px;
      border: 1px solid transparent;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.15s ease;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 7px;
      line-height: 1;
      box-sizing: border-box;
      white-space: nowrap;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
    }

    .btn:focus-visible {
      outline: none;
      box-shadow: 0 0 0 3px var(--stripe-blurple-ring);
    }

    .btn:disabled,
    .btn[disabled] {
      opacity: 0.5;
      cursor: not-allowed;
      pointer-events: none;
    }

    /* 按钮尺寸修饰词 */
    .btn-sm {
      height: var(--control-height-sm, 32px);
      padding: 0 12px;
      font-size: 12px;
      border-radius: 6px;
    }

    .btn-md {
      height: var(--control-height-md, 40px);
      padding: 0 18px;
      font-size: 13px;
      border-radius: 8px;
    }

    .btn-lg {
      height: var(--control-height-lg, 44px);
      padding: 0 22px;
      font-size: 14px;
      font-weight: 600;
      border-radius: 8px;
    }

    .btn-compact {
      height: var(--control-height-sm, 32px);
      padding: 0 12px;
      font-size: 12px;
      border-radius: 6px;
    }

    /* 按钮布局修饰词 */
    .btn-block,
    .btn-full {
      width: 100%;
      display: flex;
    }

    .btn-flex {
      flex: 1;
      min-width: 0;
    }

    .btn-group {
      display: flex;
      align-items: center;
      gap: 8px;
      width: 100%;
    }

    .btn-group > .btn {
      flex: 1;
    }

    /* 按钮变体体系 */
    .btn-primary {
      background: var(--stripe-blurple);
      color: #ffffff;
      border-color: transparent;
      box-shadow: 0 2px 5px rgba(99, 91, 255, 0.25);
    }

    .btn-primary:hover {
      background: var(--stripe-blurple-hover);
      box-shadow: 0 4px 12px rgba(99, 91, 255, 0.35);
    }

    .btn-primary:active {
      background: var(--stripe-blurple-active);
    }

    .btn-secondary {
      background: var(--stripe-surface);
      color: var(--stripe-slate);
      border-color: var(--stripe-border);
      box-shadow: var(--shadow-stripe-xs);
    }

    .btn-secondary:hover {
      background: var(--bg-hover);
      color: var(--stripe-navy);
      border-color: var(--stripe-blurple);
    }

    .btn-outline {
      background: transparent;
      border: 1px solid var(--stripe-border);
      color: var(--stripe-slate);
    }

    .btn-outline:hover {
      background: var(--stripe-blurple-light);
      border-color: var(--stripe-blurple);
      color: var(--stripe-blurple);
    }

    .btn-outline.active {
      background: var(--stripe-blurple);
      border-color: var(--stripe-blurple);
      color: #ffffff;
    }

    .btn-danger {
      background: var(--stripe-red);
      color: #ffffff;
      border-color: transparent;
      box-shadow: 0 2px 5px rgba(223, 27, 65, 0.2);
    }

    .btn-danger:hover {
      background: #c91838;
      box-shadow: 0 4px 12px rgba(223, 27, 65, 0.3);
    }

    .btn-danger-outline {
      background: transparent;
      border: 1px solid rgba(223, 27, 65, 0.3);
      color: var(--stripe-red);
    }

    .btn-danger-outline:hover {
      background: var(--stripe-red-light);
      border-color: var(--stripe-red);
    }

    .btn-info {
      background: var(--stripe-cyan);
      color: #0a2540;
      border-color: transparent;
      font-weight: 600;
    }

    .btn-info:hover {
      background: #00beea;
    }

    .close-btn {
      background: none;
      border: 1px solid transparent;
      cursor: pointer;
      color: var(--stripe-muted);
      padding: 6px;
      border-radius: 8px;
      transition: all 0.15s ease;
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    @media (max-width: 768px) {
      .close-btn {
        width: 44px;
        height: 44px;
      }
    }

    .close-btn:hover {
      color: var(--stripe-navy);
      background: var(--bg-hover);
      border-color: var(--stripe-border);
    }

    /* ========== 表单控件与输入体系 ========== */
    .form-group {
      margin-bottom: 20px;
    }

    .form-group label {
      display: block;
      margin-bottom: 7px;
      color: var(--stripe-navy);
      font-weight: 600;
      font-size: 13px;
    }

    .form-group input,
    .form-group select,
    .secret-input {
      width: 100%;
      height: var(--control-height-md, 40px);
      padding: 0 14px;
      border: 1px solid var(--stripe-border);
      border-radius: 8px;
      font-size: 14px;
      transition: border-color 0.15s ease, box-shadow 0.15s ease, background-color 0.15s ease;
      background: var(--input-bg);
      color: var(--stripe-navy);
      box-sizing: border-box;
      font-family: inherit;
    }

    .form-group input:focus,
    .form-group select:focus,
    .secret-input:focus {
      outline: none;
      border-color: var(--stripe-blurple);
      background: var(--input-bg-focus);
      box-shadow: 0 0 0 3px var(--stripe-blurple-ring);
    }

    .form-group input::placeholder,
    .secret-input::placeholder {
      color: var(--stripe-muted);
    }

    /* 高级选项面板 */
    .form-section {
      margin: 20px 0;
      border: 1px solid var(--stripe-border);
      border-radius: 12px;
      overflow: hidden;
      background: var(--stripe-surface);
      box-shadow: var(--shadow-stripe-xs);
      transition: border-color 0.15s ease;
    }

    .form-section:hover {
      border-color: rgba(99, 91, 255, 0.4);
    }

    .section-header {
      background: var(--stripe-canvas);
      padding: 12px 16px;
      border-bottom: 1px solid var(--stripe-border);
      transition: background 0.15s ease;
    }

    .section-header:hover {
      background: var(--bg-hover);
    }

    .section-header label {
      margin: 0;
      font-size: 13px;
      font-weight: 600;
      display: flex;
      align-items: center;
      cursor: pointer;
      color: var(--stripe-navy);
    }

    .section-header input[type="checkbox"] {
      margin-right: 8px;
      width: 16px;
      height: 16px;
      accent-color: var(--stripe-blurple);
      cursor: pointer;
    }

    .advanced-options {
      padding: 16px;
      background: var(--stripe-surface);
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin-bottom: 16px;
    }

    .form-row:last-child {
      margin-bottom: 0;
    }

    .form-group-small {
      margin-bottom: 0;
      position: relative;
    }

    .form-group-small label {
      font-size: 12px;
      margin-bottom: 6px;
      font-weight: 600;
      color: var(--stripe-navy);
      display: block;
    }

    .form-group-small select,
    .form-group-small input {
      width: 100%;
      height: 38px;
      font-size: 13px;
      padding: 0 12px;
      border: 1px solid var(--stripe-border);
      border-radius: 7px;
      background: var(--input-bg);
      color: var(--stripe-navy);
      transition: all 0.15s ease;
      box-sizing: border-box;
      font-family: inherit;
    }

    .form-group-small select:focus,
    .form-group-small input:focus {
      outline: none;
      border-color: var(--stripe-blurple);
      box-shadow: 0 0 0 3px var(--stripe-blurple-ring);
      background: var(--input-bg-focus);
    }

    .form-group-small select:hover,
    .form-group-small input:hover {
      border-color: var(--stripe-blurple);
    }

    .advanced-info {
      font-size: 12px;
      color: var(--stripe-slate);
      background: var(--stripe-cyan-light);
      padding: 12px 14px;
      border-radius: 8px;
      border-left: 3px solid var(--stripe-blurple);
      margin-top: 14px;
      line-height: 1.5;
    }

    /* 响应式设计 */
    @media (max-width: 600px) {
      .form-row {
        grid-template-columns: 1fr;
        gap: 12px;
      }

      .advanced-options {
        padding: 14px;
      }

      .section-header {
        padding: 10px 14px;
      }
    }

    .form-actions {
      display: flex;
      gap: 10px;
      justify-content: flex-end;
      margin-top: 24px;
      padding-top: 16px;
      border-top: 1px solid var(--stripe-border-light);
    }

    /* ========== 扫码 Modal 溢出修复 ========== */
    #qrScanModal .modal-content {
      position: relative;
      max-height: 90vh;
    }

    #qrScanModal .scanner-section {
      padding-bottom: 0;
    }

    #qrScanModal .scanner-container {
      margin-bottom: 12px;
    }

    #qrScanModal .scanner-bottom-actions {
      position: sticky;
      bottom: 0;
      background: var(--modal-bg);
      border-top: 1px solid var(--stripe-border);
      padding: 12px 4px;
      margin: 0;
      z-index: 2;
    }

    #qrScanModal .scanner-hint {
      position: sticky;
      bottom: 60px;
      background: var(--modal-bg);
      z-index: 1;
      margin-bottom: 0;
      padding: 4px 0;
    }

    @media (max-height: 820px) {
      #qrScanModal .video-wrapper {
        width: 280px !important;
        height: 280px !important;
      }
    }

    @media (max-height: 680px) {
      #qrScanModal .video-wrapper {
        width: 220px !important;
        height: 220px !important;
      }
      #qrScanModal .scanner-container {
        margin-bottom: 8px;
      }
    }

    /* ========== 自定义确认对话框 (Stripe Confirm Dialog) ========== */
    .confirm-dialog-modal {
      z-index: 100010;
    }

    .confirm-dialog-content {
      padding: 24px;
      max-width: 420px;
      border-radius: 16px;
    }

    .confirm-dialog-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 14px;
    }

    .confirm-dialog-icon {
      width: 40px;
      height: 40px;
      border-radius: 10px;
      border: 1px solid var(--stripe-border);
      background: var(--stripe-blurple-light);
      color: var(--stripe-blurple);
      flex-shrink: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .confirm-dialog-svg {
      width: 20px;
      height: 20px;
    }

    .confirm-dialog-title {
      margin: 0;
      font-size: 16px;
      font-weight: 700;
      color: var(--stripe-navy);
      letter-spacing: 0;
    }

    .confirm-dialog-message {
      font-size: 13.5px;
      line-height: 1.5;
      color: var(--stripe-slate);
      margin-bottom: 20px;
      word-break: break-word;
    }

    .confirm-dialog-actions {
      display: flex;
      gap: 10px;
      justify-content: flex-end;
    }

    .confirm-dialog-actions .btn {
      min-width: 88px;
      padding: 8px 16px;
      font-size: 13px;
    }

    @media (max-width: 480px) {
      .confirm-dialog-content {
        padding: 20px;
      }
      .confirm-dialog-actions {
        flex-direction: column-reverse;
      }
      .confirm-dialog-actions .btn {
        width: 100%;
      }
    }

    /* ========== 登录与主密码模态框 ========== */
    .login-modal {
      z-index: 100001;
    }

    .login-modal-content {
      max-width: 400px;
      border-radius: 16px;
    }

    .login-modal-title {
      text-align: center;
      margin-bottom: 8px;
      color: var(--stripe-navy);
      font-size: 18px;
      font-weight: 700;
    }

    .login-modal-description {
      text-align: center;
      color: var(--stripe-muted);
      margin-bottom: 20px;
      font-size: 13px;
      line-height: 1.5;
    }

    .login-modal-hint {
      color: var(--stripe-muted);
      font-size: 12px;
    }

    .form-group .login-modal-hint {
      display: block;
      margin-top: 5px;
    }

    .login-password-wrapper {
      position: relative;
    }

    .login-password-wrapper input {
      padding-right: 50px;
    }

    .login-password-toggle {
      position: absolute;
      top: 50%;
      right: 8px;
      transform: translateY(-50%);
      border: none;
      background: transparent;
      color: var(--stripe-muted);
      cursor: pointer;
      padding: 0;
      width: 32px;
      height: 32px;
      border-radius: 6px;
      transition: color 0.15s ease, background-color 0.15s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .login-password-toggle:hover {
      color: var(--stripe-navy);
      background: var(--bg-hover);
    }

    .login-password-toggle:focus-visible {
      outline: 2px solid var(--stripe-blurple);
      outline-offset: 2px;
    }

    .login-password-icon {
      width: 16px;
      height: 16px;
      display: block;
    }

    .login-password-icon-hide {
      display: none;
    }

    .login-password-toggle.is-visible .login-password-icon-show {
      display: none;
    }

    .login-password-toggle.is-visible .login-password-icon-hide {
      display: block;
    }

    .login-modal-actions {
      margin-top: 20px;
      display: flex;
      gap: 10px;
    }

    .login-modal-error {
      display: none;
      margin-top: 14px;
      padding: 10px 14px;
      background: var(--stripe-red-light);
      border-radius: 8px;
      border: 1px solid rgba(223, 27, 65, 0.2);
      color: var(--stripe-red);
      font-size: 13px;
      text-align: center;
    }

    .login-modal-cancel-btn,
    .login-modal-submit-btn {
      flex: 1;
      padding: 10px 18px;
      font-size: 14px;
      font-weight: 600;
    }

    .empty-state {
      text-align: center;
      padding: 40px 20px;
      color: var(--stripe-muted);
    }

    .empty-state .icon {
      font-size: 48px;
      margin-bottom: 15px;
    }

    .loading {
      text-align: center;
      padding: 40px;
      color: var(--stripe-muted);
    }

    /* ========== 导入模态框规范 ========== */
    .import-instructions {
      background: var(--stripe-canvas);
      border-radius: 10px;
      padding: 16px;
      margin-bottom: 20px;
      border: 1px solid var(--stripe-border);
      box-shadow: var(--shadow-stripe-xs);
    }

    .import-instructions p {
      margin: 0 0 14px 0;
      color: var(--stripe-navy);
      font-size: 14px;
      font-weight: 600;
    }

    .import-methods {
      margin-bottom: 16px;
    }

    .import-method {
      background: var(--stripe-surface);
      border: 1px solid var(--stripe-border);
      border-radius: 10px;
      padding: 12px 14px;
      margin-bottom: 8px;
      font-size: 13px;
      transition: all 0.15s ease;
      box-shadow: var(--shadow-stripe-xs);
    }

    .import-method:hover {
      border-color: var(--stripe-blurple);
      box-shadow: var(--shadow-stripe-sm);
    }

    .file-import-section {
      background: var(--stripe-blurple-light);
      border: 1px dashed var(--stripe-blurple);
      border-radius: 10px;
      padding: 24px;
      text-align: center;
      margin-bottom: 20px;
      transition: all 0.15s ease;
    }

    .file-import-section:hover {
      border-color: var(--stripe-blurple-hover);
      box-shadow: var(--shadow-stripe-sm);
    }

    .file-info {
      display: block;
      margin-top: 8px;
      font-size: 12px;
      color: var(--stripe-muted);
    }

    .import-example {
      background: var(--stripe-amber-light);
      border: 1px solid rgba(245, 158, 11, 0.25);
      border-radius: 8px;
      padding: 10px 12px;
      font-size: 12px;
      margin-top: 10px;
      color: #92400e;
    }

    .import-example code {
      background: var(--stripe-surface);
      padding: 3px 6px;
      border-radius: 4px;
      font-family: var(--font-mono);
      word-break: break-all;
      display: block;
      margin-top: 6px;
      font-size: 11px;
      border: 1px solid var(--stripe-border);
      color: var(--stripe-navy);
    }

    /* ========== 实用工具模态框样式 ========== */
    .tools-list {
      background: var(--stripe-surface);
      border-radius: 12px;
      border: 1px solid var(--stripe-border);
      overflow: hidden;
      margin-top: 16px;
    }

    .tool-item {
      display: flex;
      align-items: flex-start;
      padding: 16px;
      border-bottom: 1px solid var(--stripe-border-light);
      cursor: pointer;
      transition: background-color 0.12s ease;
    }

    .tool-item:last-child {
      border-bottom: none;
    }

    .tool-item:hover {
      background-color: var(--bg-hover);
    }

    .tool-item:active {
      background-color: var(--bg-active);
    }

    .tool-icon {
      margin-right: 14px;
      width: 42px;
      height: 42px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      background: var(--stripe-blurple-light);
      border-radius: 10px;
      border: 1px solid rgba(99, 91, 255, 0.2);
      color: var(--stripe-blurple);
    }

    .tool-content {
      flex: 1;
    }

    .tool-title {
      font-size: 14px;
      color: var(--stripe-navy);
      margin-bottom: 3px;
      font-weight: 600;
    }

    .tool-desc {
      font-size: 12.5px;
      color: var(--stripe-muted);
      line-height: 1.4;
    }

    .import-label {
      font-weight: 600;
      color: var(--stripe-navy);
      margin-bottom: 8px;
      display: block;
      font-size: 13px;
    }

    .import-file-btn {
      font-size: 13px;
      padding: 8px 16px;
      border-radius: 7px;
    }

    .import-textarea {
      border-radius: 8px;
      border: 1px solid var(--stripe-border);
      font-family: var(--font-mono);
      font-size: 12px;
      line-height: 1.5;
      background: var(--input-bg);
      color: var(--stripe-navy);
      transition: border-color 0.15s ease, box-shadow 0.15s ease;
      box-sizing: border-box;
      padding: 10px 12px;
    }

    .import-textarea:focus {
      border-color: var(--stripe-blurple);
      outline: none;
      box-shadow: 0 0 0 3px var(--stripe-blurple-ring);
    }

    .import-form-actions {
      margin-top: 20px;
      padding-top: 16px;
      border-top: 1px solid var(--stripe-border-light);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .import-form-actions .btn {
      padding: 8px 16px;
      border-radius: 7px;
      font-size: 13px;
    }

    .import-preview {
      background: var(--stripe-canvas);
      border-radius: 10px;
      padding: 16px;
      margin: 16px 0;
      border: 1px solid var(--stripe-border);
      max-height: 320px;
      overflow-y: auto;
      box-shadow: var(--shadow-stripe-xs);
      scrollbar-width: thin;
      scrollbar-color: var(--scrollbar-thumb) var(--scrollbar-track);
    }

    .import-preview::-webkit-scrollbar {
      width: 6px;
    }

    .import-preview::-webkit-scrollbar-track {
      background: var(--scrollbar-track);
      border-radius: 6px;
    }

    .import-preview::-webkit-scrollbar-thumb {
      background: var(--scrollbar-thumb);
      border-radius: 3px;
    }

    .import-preview h3 {
      margin: 0 0 14px 0;
      color: var(--stripe-navy);
      font-size: 15px;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .import-preview-item {
      background: var(--stripe-surface);
      border: 1px solid var(--stripe-border);
      border-radius: 8px;
      padding: 10px 14px;
      margin-bottom: 8px;
      font-size: 13px;
      transition: all 0.15s ease;
      box-shadow: var(--shadow-stripe-xs);
    }

    .import-preview-item:hover {
      box-shadow: var(--shadow-stripe-sm);
    }

    .import-preview-item.valid {
      border-color: rgba(0, 217, 126, 0.4);
      background: var(--stripe-green-light);
      border-left: 3.5px solid var(--stripe-green);
    }

    .import-preview-item.invalid {
      border-color: rgba(223, 27, 65, 0.4);
      background: var(--stripe-red-light);
      border-left: 3.5px solid var(--stripe-red);
    }

    .import-preview-item.skipped {
      border-color: rgba(245, 158, 11, 0.4);
      background: var(--stripe-amber-light);
      border-left: 3.5px solid var(--stripe-amber);
      opacity: 0.85;
    }

    .import-preview-item .service-name {
      font-weight: 700;
      color: var(--stripe-navy);
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .import-preview-item .account-name {
      color: var(--stripe-muted);
      font-size: 12px;
    }

    .import-preview-item .error-msg {
      color: var(--stripe-red);
      font-size: 12px;
      margin-top: 4px;
    }

    textarea {
      width: 100%;
      padding: 10px 12px;
      border: 1px solid var(--stripe-border);
      border-radius: 8px;
      font-size: 13px;
      font-family: var(--font-mono);
      resize: vertical;
      min-height: 120px;
      background: var(--input-bg);
      color: var(--stripe-navy);
      box-sizing: border-box;
      transition: border-color 0.15s ease, box-shadow 0.15s ease;
    }

    textarea:focus {
      outline: none;
      border-color: var(--stripe-blurple);
      box-shadow: 0 0 0 3px var(--stripe-blurple-ring);
    }

    /* ========== 二维码与图片展示 ========== */
    .qr-code-container {
      background: var(--stripe-surface);
      border-radius: 12px;
      padding: 24px;
      margin: 16px 0;
      border: 1px solid var(--stripe-border);
      text-align: center;
      box-shadow: var(--shadow-stripe-xs);
    }

    .qr-display {
      text-align: center;
      padding: 16px;
    }

    .qr-image {
      max-width: 260px;
      height: auto;
      margin: 0 auto;
      display: block;
      border-radius: 8px;
      box-shadow: var(--shadow-stripe-sm);
    }

    .qr-code {
      width: 180px;
      height: 180px;
      margin: 0 auto;
      display: block;
      border-radius: 8px;
      border: 1px solid var(--stripe-border);
      background: #ffffff;
      padding: 8px;
    }

    .qr-info {
      background: var(--stripe-cyan-light);
      border-radius: 8px;
      padding: 12px 14px;
      margin: 16px 0;
      font-size: 13px;
      color: var(--stripe-navy);
      text-align: center;
      border: 1px solid rgba(0, 212, 255, 0.3);
      line-height: 1.5;
    }

    /* ========== 移动端适配 ========== */
    @media (max-width: 480px) {
      .qr-subtitle-section {
        text-align: center;
        margin-bottom: 16px;
        padding: 10px;
        background: var(--stripe-canvas);
        border-radius: 8px;
        border: 1px solid var(--stripe-border);
      }

      .qr-subtitle-section p {
        color: var(--stripe-muted);
        margin: 0;
        font-size: 13px;
        font-weight: 500;
      }

      .modal {
        padding: 10px;
      }

      .modal-content {
        padding: 18px;
        max-height: 90vh;
        border-radius: 12px;
      }

      .modal-header {
        margin-bottom: 16px;
        padding-bottom: 12px;
      }

      .modal-header h2 {
        font-size: 17px;
      }

      .modal-actions {
        margin-top: 16px;
        padding-top: 12px;
        gap: 10px;
      }

      .form-actions {
        margin-top: 16px;
        padding-top: 12px;
        gap: 8px;
      }

      .btn {
        padding: 8px 14px;
        font-size: 13px;
      }

      .scanner-container {
        max-height: 250px;
        margin: 10px 0;
      }

      .qr-actions {
        margin-top: 10px;
        gap: 6px;
      }

      .qr-btn-action,
      .qr-btn-close {
        padding: 8px 12px;
        font-size: 12px;
      }

      .import-instructions {
        padding: 12px;
        margin-bottom: 16px;
      }

      .restore-content {
        flex-direction: column;
        gap: 16px;
      }

      .restore-instructions {
        padding: 12px;
        margin-bottom: 16px;
      }

      .backup-select {
        width: 100%;
        min-width: 100%;
        max-width: 100%;
        padding: 8px 12px;
        font-size: 12px;
      }
    }

    /* ========== 导出格式选择 - 紧凑网格布局 ========== */
    .export-modal-compact {
      max-width: var(--fab-modal-max-width, 600px);
    }

    .export-summary {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 16px;
      background: var(--stripe-canvas);
      border-radius: 10px;
      margin-bottom: 16px;
      border: 1px solid var(--stripe-border);
      gap: 12px;
    }

    .export-count {
      font-size: 13px;
      color: var(--stripe-muted);
    }

    .export-count strong {
      color: var(--stripe-navy);
      font-size: 15px;
      font-family: var(--font-mono);
    }

    .export-sort-wrapper {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .export-sort-label {
      font-size: 12px;
      color: var(--stripe-muted);
      white-space: nowrap;
    }

    .export-sort-select {
      padding: 6px 10px;
      border: 1px solid var(--stripe-border);
      border-radius: 6px;
      background: var(--input-bg);
      color: var(--stripe-navy);
      font-size: 12px;
      cursor: pointer;
    }

    .format-section {
      margin-bottom: 16px;
    }

    .format-section:last-of-type {
      margin-bottom: 12px;
    }

    .format-section-title {
      font-size: 11px;
      font-weight: 700;
      color: var(--stripe-muted);
      margin-bottom: 8px;
      padding-left: 2px;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }

    .format-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 8px;
    }

    .format-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 12px 8px;
      background: var(--stripe-surface);
      border: 1px solid var(--stripe-border);
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.15s ease;
      min-height: 70px;
      box-shadow: var(--shadow-stripe-xs);
    }

    .format-card:hover {
      border-color: var(--stripe-blurple);
      background: var(--stripe-blurple-light);
      box-shadow: var(--shadow-stripe-sm);
    }

    .format-icon {
      margin-bottom: 4px;
      line-height: 1;
      color: var(--stripe-blurple);
    }

    .format-icon .ui-icon,
    .format-option-icon .ui-icon {
      width: 22px;
      height: 22px;
    }

    .format-name {
      font-size: 12.5px;
      font-weight: 600;
      color: var(--stripe-navy);
      text-align: center;
      line-height: 1.2;
    }

    .format-ext {
      font-size: 10px;
      color: var(--stripe-muted);
      margin-top: 2px;
      font-family: var(--font-mono);
    }

    .format-compat {
      font-size: 9px;
      color: #059669;
      margin-top: 3px;
      padding: 1px 5px;
      background: var(--stripe-green-light);
      border-radius: 4px;
      white-space: nowrap;
      font-weight: 600;
    }

    .format-details {
      margin: 14px 0;
      border: 1px solid var(--stripe-border);
      border-radius: 8px;
      overflow: hidden;
    }

    .format-details summary {
      cursor: pointer;
      font-size: 12.5px;
      color: var(--stripe-slate);
      padding: 10px 14px;
      background: var(--stripe-canvas);
      user-select: none;
      display: flex;
      align-items: center;
      gap: 8px;
      font-weight: 500;
    }

    .format-details summary:hover {
      color: var(--stripe-navy);
      background: var(--bg-hover);
    }

    .format-details[open] summary {
      border-bottom: 1px solid var(--stripe-border);
    }

    .format-help-content {
      padding: 12px 14px;
      font-size: 12px;
      color: var(--stripe-slate);
      line-height: 1.6;
      background: var(--stripe-surface);
    }

    .format-help-content p {
      margin: 4px 0;
      display: flex;
      gap: 8px;
    }

    .format-help-content strong {
      color: var(--stripe-navy);
      min-width: 70px;
    }

    /* 导出格式响应式 */
    @media (max-width: 480px) {
      .export-modal-compact {
        max-width: 100%;
      }

      .export-summary {
        flex-direction: column;
        align-items: stretch;
        gap: 10px;
        padding: 12px;
      }

      .export-sort-wrapper {
        width: 100%;
      }

      .export-sort-label {
        font-size: 12px;
      }

      .export-sort-select {
        flex: 1;
      }

      .format-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 8px;
      }
    }

    @media (min-width: 768px) and (max-width: 1279px) {
      .format-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media (max-width: 767px) {
      .format-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 8px;
      }
    }

    /* ========== 导入模态框 - 智能输入区 ========== */
    .import-modal-compact {
      max-width: var(--fab-modal-max-width, 600px);
    }

    .smart-import-zone {
      margin-bottom: 12px;
    }

    .import-textarea-smart {
      width: 100%;
      min-height: 130px;
      padding: 12px 14px;
      border: 1.5px dashed var(--stripe-border);
      border-radius: 10px;
      background: var(--stripe-canvas);
      color: var(--stripe-navy);
      font-size: 13px;
      font-family: var(--font-mono);
      line-height: 1.5;
      resize: vertical;
      transition: all 0.15s ease;
      box-sizing: border-box;
    }

    .import-textarea-smart::placeholder {
      color: var(--stripe-muted);
      font-family: var(--font-sans);
    }

    .import-textarea-smart:hover {
      border-color: var(--stripe-blurple);
      background: var(--bg-hover);
    }

    .import-textarea-smart:focus {
      outline: none;
      border-color: var(--stripe-blurple);
      border-style: solid;
      background: var(--input-bg-focus);
      box-shadow: 0 0 0 3px var(--stripe-blurple-ring);
    }

    .import-textarea-smart.drag-over {
      border-color: var(--stripe-green);
      border-style: solid;
      background: var(--stripe-green-light);
    }

    .import-textarea-smart.has-content {
      border-color: var(--stripe-blurple);
      border-style: solid;
    }

    /* 选择文件按钮区域 */
    .import-file-btn-wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      gap: 12px;
      margin-bottom: 12px;
    }

    .import-file-btn-wrapper > .btn {
      flex: 0 0 auto;
      width: auto;
      min-width: auto;
    }

    .import-file-hint {
      flex: 0 1 auto;
      font-size: 12px;
      color: var(--stripe-muted);
      text-align: left;
    }

    /* 已选文件信息徽章 */
    .file-info-badge {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 12px;
      background: var(--stripe-green-light);
      border: 1px solid rgba(0, 217, 126, 0.3);
      border-radius: 8px;
      margin-bottom: 12px;
      font-size: 13px;
    }

    .file-info-badge .file-icon {
      flex-shrink: 0;
      color: var(--stripe-green);
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .file-info-badge .file-name {
      font-weight: 600;
      color: var(--stripe-navy);
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .file-info-badge .file-size {
      color: var(--stripe-muted);
      font-size: 12px;
      font-family: var(--font-mono);
      flex-shrink: 0;
    }

    .file-info-badge .file-clear-btn {
      background: none;
      border: none;
      color: var(--stripe-muted);
      cursor: pointer;
      padding: 3px 6px;
      border-radius: 4px;
      font-size: 13px;
      transition: all 0.15s ease;
      flex-shrink: 0;
    }

    .file-info-badge .file-clear-btn:hover {
      background: var(--stripe-red-light);
      color: var(--stripe-red);
    }

    /* 导入小提示 */
    .import-tips {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 8px;
      padding: 8px 12px;
      margin: 10px 0;
      font-size: 12px;
      color: var(--stripe-slate);
      background: var(--stripe-canvas);
      border-radius: 6px;
      border: 1px solid var(--stripe-border);
    }

    .import-tip a {
      color: var(--stripe-blurple);
      text-decoration: none;
      font-weight: 600;
    }

    .import-tip a:hover {
      text-decoration: underline;
    }

    .import-tip-divider {
      color: var(--stripe-border);
    }

    /* 格式说明折叠区 */
    .import-format-details {
      margin: 8px 0;
      border: 1px solid var(--stripe-border);
      border-radius: 8px;
      overflow: hidden;
    }

    .import-format-details summary {
      cursor: pointer;
      font-size: 12px;
      color: var(--stripe-muted);
      padding: 8px 12px;
      background: var(--stripe-canvas);
      user-select: none;
      display: flex;
      align-items: center;
      gap: 6px;
      font-weight: 500;
    }

    .import-format-details summary:hover {
      color: var(--stripe-navy);
      background: var(--bg-hover);
    }

    .import-format-details[open] summary {
      border-bottom: 1px solid var(--stripe-border);
    }

    .import-format-help {
      padding: 10px 12px;
      font-size: 12px;
      color: var(--stripe-slate);
      line-height: 1.6;
      background: var(--stripe-surface);
    }

    .import-format-help p {
      margin: 3px 0;
    }

    .import-format-help strong {
      color: var(--stripe-navy);
      min-width: 80px;
      display: inline-block;
    }

    .import-format-help code {
      display: block;
      margin-top: 8px;
      padding: 8px;
      background: var(--stripe-canvas);
      border-radius: 6px;
      font-size: 11px;
      font-family: var(--font-mono);
      word-break: break-all;
      color: var(--stripe-navy);
      border: 1px solid var(--stripe-border);
    }

    /* 紧凑预览区 */
    .import-preview-compact {
      background: var(--stripe-canvas);
      border-radius: 10px;
      padding: 12px;
      margin: 14px 0;
      border: 1px solid var(--stripe-border);
    }

    .import-preview-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      flex-wrap: wrap;
      gap: 8px;
    }

    .preview-title {
      font-size: 13px;
      font-weight: 700;
      color: var(--stripe-navy);
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .import-stats-inline {
      display: flex;
      gap: 10px;
      font-size: 12px;
      font-family: var(--font-mono);
    }

    .stat-valid {
      color: var(--stripe-green);
      font-weight: 700;
    }

    .stat-invalid {
      color: var(--stripe-red);
      font-weight: 700;
    }

    .stat-skipped {
      color: var(--stripe-amber);
      font-weight: 700;
    }

    .stat-total {
      color: var(--stripe-muted);
    }

    .import-preview-list {
      max-height: 180px;
      overflow-y: auto;
      scrollbar-width: thin;
      scrollbar-color: var(--scrollbar-thumb) var(--scrollbar-track);
    }

    .import-preview-list::-webkit-scrollbar {
      width: 6px;
    }

    .import-preview-list::-webkit-scrollbar-track {
      background: var(--scrollbar-track);
      border-radius: 3px;
    }

    .import-preview-list::-webkit-scrollbar-thumb {
      background: var(--scrollbar-thumb);
      border-radius: 3px;
    }

    .import-progress-panel {
      background: var(--stripe-canvas);
      border-radius: 10px;
      padding: 12px 14px;
      margin: 10px 0 14px;
      border: 1px solid var(--stripe-border);
    }

    .import-progress-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      margin-bottom: 8px;
    }

    .import-progress-title {
      font-size: 13px;
      font-weight: 600;
      color: var(--stripe-navy);
    }

    .import-progress-percent {
      font-size: 12px;
      font-weight: 700;
      color: var(--stripe-blurple);
      font-family: var(--font-mono);
    }

    .import-progress-bar {
      width: 100%;
      height: 8px;
      background: var(--stripe-border-light);
      border-radius: 999px;
      overflow: hidden;
      margin-bottom: 8px;
    }

    .import-progress-fill {
      height: 100%;
      background: linear-gradient(90deg, #635bff, #00d4ff);
      border-radius: inherit;
      transition: width 0.25s ease;
    }

    .import-progress-meta,
    .import-progress-stats {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      flex-wrap: wrap;
      font-size: 11px;
    }

    .import-progress-meta {
      color: var(--stripe-slate);
      margin-bottom: 4px;
    }

    .import-progress-stats {
      color: var(--stripe-muted);
    }

    /* ========== 二级格式选择模态框 ========== */
    .sub-format-modal {
      max-width: var(--fab-modal-sm-max-width, 450px);
    }

    .sub-format-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 14px;
    }

    .sub-format-option {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 14px;
      background: var(--stripe-surface);
      border: 1px solid var(--stripe-border);
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.15s ease;
      box-shadow: var(--shadow-stripe-xs);
    }

    .sub-format-option:hover {
      border-color: var(--stripe-blurple);
      background: var(--stripe-blurple-light);
      box-shadow: var(--shadow-stripe-sm);
    }

    .sub-format-icon {
      flex-shrink: 0;
      color: var(--stripe-blurple);
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .sub-format-icon .ui-icon {
      width: 24px;
      height: 24px;
    }

    .sub-format-info {
      flex: 1;
    }

    .sub-format-name {
      font-size: 14px;
      font-weight: 600;
      color: var(--stripe-navy);
      margin-bottom: 2px;
    }

    .sub-format-ext {
      font-size: 11px;
      color: var(--stripe-blurple);
      font-weight: 600;
      margin-bottom: 4px;
      font-family: var(--font-mono);
    }

    .sub-format-desc {
      font-size: 12px;
      color: var(--stripe-muted);
      margin-bottom: 2px;
    }

    .sub-format-compat {
      font-size: 10px;
      color: var(--stripe-muted);
    }

    /* ========== 设置模态框样式 (Stripe Settings Panel) ========== */
    .settings-modal-content {
      max-width: var(--fab-modal-lg-max-width, 680px);
      padding: 0;
      overflow: hidden;
      border-radius: 16px;
    }

    .settings-modal-content .modal-header {
      padding: 18px 22px;
      border-bottom: 1px solid var(--stripe-border);
      margin-bottom: 0;
      background: var(--stripe-surface);
    }

    .settings-layout {
      display: flex;
      min-height: 400px;
      max-height: calc(85vh - 70px);
    }

    .settings-tabs {
      flex-shrink: 0;
      width: 160px;
      background: var(--stripe-canvas);
      border-right: 1px solid var(--stripe-border);
      padding: 10px 0;
      overflow-y: auto;
    }

    .settings-tab {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 16px;
      cursor: pointer;
      color: var(--stripe-slate);
      font-size: 13px;
      font-weight: 500;
      transition: all 0.15s ease;
      border-left: 3px solid transparent;
    }

    .settings-tab:hover {
      background: var(--bg-hover);
      color: var(--stripe-navy);
    }

    .settings-tab.active {
      background: var(--stripe-surface);
      color: var(--stripe-blurple);
      border-left-color: var(--stripe-blurple);
      font-weight: 600;
    }

    .settings-tab-icon {
      flex-shrink: 0;
      width: 16px;
      height: 16px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .settings-tab-text {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .settings-content {
      flex: 1;
      overflow-y: auto;
      padding: 20px 24px;
      background: var(--stripe-surface);
    }

    .settings-panel {
      display: none;
    }

    .settings-panel.active {
      display: block;
    }

    .settings-section {
      margin-bottom: 20px;
    }

    .settings-section:last-child {
      margin-bottom: 0;
    }

    .settings-section-title {
      font-size: 14px;
      font-weight: 700;
      color: var(--stripe-navy);
      margin: 0 0 10px 0;
      letter-spacing: 0;
    }

    .settings-desc {
      font-size: 12.5px;
      color: var(--stripe-muted);
      margin: 0 0 10px 0;
      line-height: 1.5;
    }

    .settings-divider {
      height: 1px;
      background: var(--stripe-border-light);
      margin: 18px 0;
    }

    .settings-form {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .settings-field label {
      display: block;
      font-size: 12.5px;
      font-weight: 600;
      color: var(--stripe-navy);
      margin-bottom: 5px;
    }

    .settings-field input {
      width: 100%;
      height: 38px;
      padding: 0 12px;
      border: 1px solid var(--stripe-border);
      border-radius: 7px;
      background: var(--input-bg);
      color: var(--stripe-navy);
      font-size: 13.5px;
      box-sizing: border-box;
      transition: all 0.15s ease;
      font-family: inherit;
    }

    .settings-field input:focus {
      outline: none;
      border-color: var(--stripe-blurple);
      box-shadow: 0 0 0 3px var(--stripe-blurple-ring);
    }

    .change-password-result {
      padding: 8px 12px;
      border-radius: 6px;
      font-size: 12px;
      line-height: 1.5;
    }

    .change-password-result.error {
      background: var(--stripe-red-light);
      color: var(--stripe-red);
      border: 1px solid rgba(223, 27, 65, 0.2);
    }

    .change-password-result.success {
      background: var(--stripe-green-light);
      color: #059669;
      border: 1px solid rgba(0, 217, 126, 0.2);
    }

    /* 同步设置卡片 */
    .sync-card {
      background: var(--stripe-canvas);
      border: 1px solid var(--stripe-border);
      border-radius: 12px;
      padding: 14px 16px;
      cursor: pointer;
      transition: all 0.15s ease;
      box-shadow: var(--shadow-stripe-xs);
    }

    .sync-card:hover {
      border-color: var(--stripe-blurple);
      box-shadow: var(--shadow-stripe-sm);
    }

    .sync-card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .sync-card-info {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .sync-card-icon {
      flex-shrink: 0;
      width: 20px;
      height: 20px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: var(--stripe-blurple);
    }

    .sync-card-title {
      font-size: 13.5px;
      font-weight: 600;
      color: var(--stripe-navy);
    }

    .sync-card-desc {
      font-size: 12px;
      color: var(--stripe-muted);
      margin-top: 2px;
    }

    .sync-status {
      font-size: 11px;
      padding: 3px 8px;
      border-radius: 6px;
      font-weight: 600;
      flex-shrink: 0;
    }

    .sync-status.configured {
      background: var(--stripe-green-light);
      color: #059669;
    }

    .sync-status.not-configured {
      background: var(--bg-hover);
      color: var(--stripe-muted);
    }

    .settings-info-box {
      margin-top: 14px;
      padding: 12px;
      border-radius: 8px;
      font-size: 12px;
      color: var(--stripe-muted);
      background: var(--stripe-canvas);
      border: 1px solid var(--stripe-border);
      line-height: 1.5;
    }

    /* 主题选项 */
    .theme-options {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .theme-option {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 12px;
      background: var(--stripe-canvas);
      border: 1px solid var(--stripe-border);
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.15s ease;
    }

    .theme-option:hover {
      border-color: var(--stripe-blurple);
      background: var(--bg-hover);
    }

    .theme-option input[type="radio"] {
      accent-color: var(--stripe-blurple);
    }

    .theme-option-label {
      font-size: 13px;
      font-weight: 500;
      color: var(--stripe-navy);
    }

    /* 设置下拉选择框 */
    .settings-select {
      width: 100%;
      height: 38px;
      padding: 0 12px;
      border: 1px solid var(--stripe-border);
      border-radius: 7px;
      background: var(--input-bg);
      color: var(--stripe-navy);
      font-size: 13.5px;
      cursor: pointer;
      appearance: auto;
      font-family: inherit;
    }

    .settings-select:focus {
      outline: none;
      border-color: var(--stripe-blurple);
      box-shadow: 0 0 0 3px var(--stripe-blurple-ring);
    }

    .settings-inline-group {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .settings-inline-group .settings-input {
      width: 80px;
      height: 36px;
      padding: 0 8px;
      border: 1px solid var(--stripe-border);
      border-radius: 7px;
      background: var(--input-bg);
      color: var(--stripe-navy);
      font-size: 13.5px;
      text-align: center;
      font-family: var(--font-mono);
    }

    .settings-inline-group .settings-input:focus {
      outline: none;
      border-color: var(--stripe-blurple);
      box-shadow: 0 0 0 3px var(--stripe-blurple-ring);
    }

    .settings-unit {
      font-size: 13px;
      color: var(--stripe-muted);
    }

    .settings-result {
      font-size: 12px;
      margin: 6px 0 0 0;
      line-height: 1.5;
    }

    .settings-result.success {
      color: var(--stripe-green);
    }

    .settings-result.error {
      color: var(--stripe-red);
    }

    /* ========== 手机端 Bottom Sheet ========== */
    @media (max-width: 640px) {
      .modal:not(.confirm-dialog-modal) {
        align-items: flex-end;
        padding: 0;
      }

      .modal:not(.confirm-dialog-modal) .modal-content {
        width: 100%;
        max-width: 100%;
        border-radius: 16px 16px 0 0;
        max-height: 90vh;
        margin: 0;
        transform: translateY(100%);
        opacity: 0;
        transition: transform 0.3s cubic-bezier(0.32, 0.72, 0, 1), opacity 0.25s ease;
      }

      .modal:not(.confirm-dialog-modal).show .modal-content {
        transform: translateY(0);
        opacity: 1;
      }

      .modal:not(.confirm-dialog-modal):not(#qrScanModal) .modal-content > .modal-header {
        position: sticky;
        top: 0;
        z-index: 10;
        background: var(--modal-bg);
      }

      .modal:not(.confirm-dialog-modal):not(#qrScanModal) .modal-content form > .form-actions,
      .modal:not(.confirm-dialog-modal):not(#qrScanModal) .modal-content > .form-actions,
      .modal:not(.confirm-dialog-modal):not(#qrScanModal) .modal-content .import-form-actions {
        position: sticky;
        bottom: 0;
        background: var(--modal-bg);
        z-index: 10;
      }
    }

    /* 设置模态框移动端适配 */
    @media (max-width: 600px) {
      .settings-layout {
        flex-direction: column;
        min-height: auto;
        max-height: calc(85vh - 70px);
      }

      .settings-tabs {
        width: 100%;
        border-right: none;
        border-bottom: 1px solid var(--stripe-border);
        display: flex;
        padding: 0;
        overflow-x: auto;
        overflow-y: hidden;
        flex-shrink: 0;
      }

      .settings-tab {
        flex: 1;
        flex-direction: row;
        justify-content: center;
        gap: 6px;
        padding: 10px 8px;
        border-left: none;
        border-bottom: 2.5px solid transparent;
        font-size: 12.5px;
        min-width: 0;
      }

      .settings-tab.active {
        border-left-color: transparent;
        border-bottom-color: var(--stripe-blurple);
        background: transparent;
      }

      .settings-tab-text {
        display: inline;
        white-space: nowrap;
      }

      .settings-tab-icon {
        font-size: 14px;
      }

      .settings-content {
        padding: 16px;
        overflow-y: auto;
        flex: 1;
      }

      .settings-modal-content {
        max-width: 100%;
        max-height: 90vh;
      }
    }

    @media (max-width: 359px) {
      .settings-tab-text {
        display: none;
      }
      .settings-tab-icon {
        font-size: 18px;
      }
    }
`;
}

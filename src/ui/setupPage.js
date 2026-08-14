/**
 * 首次设置页面模块 - Stripe 经典设计系统规范
 * 用于用户首次访问时设置管理员密码
 */

import { getVariables } from './styles/variables.js';
import { icon } from './icons.js';

/**
 * 创建首次设置页面
 * @returns {Response} HTML响应
 */
export async function createSetupPage() {
	const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, viewport-fit=cover">
  <title>首次设置 - 2FA 密钥管理器</title>

  <script>
    (function() {
      try {
        const theme = localStorage.getItem('theme') || 'auto';
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const dataTheme = (theme === 'dark' || (theme === 'auto' && prefersDark)) ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', dataTheme);
      } catch (e) {
        document.documentElement.setAttribute('data-theme', 'light');
      }
    })();
  </script>

  <style>
    ${getVariables()}

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
    }

    body {
      font-family: var(--font-sans, 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif);
      background: var(--bg-primary);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      color: var(--stripe-navy);
      line-height: 1.5;
    }

    .setup-container {
      background: var(--stripe-surface);
      border: 1px solid var(--stripe-border);
      border-radius: 16px;
      box-shadow: var(--shadow-stripe-floating);
      max-width: 460px;
      width: 100%;
      padding: 36px;
    }

    .setup-header {
      text-align: center;
      margin-bottom: 28px;
    }

    .setup-icon {
      width: 52px;
      height: 52px;
      margin-bottom: 16px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      background: var(--stripe-blurple);
      border-radius: 12px;
      box-shadow: 0 4px 14px rgba(99, 91, 255, 0.35);
    }

    .setup-title {
      font-size: 24px;
      font-weight: 800;
      color: var(--stripe-navy);
      margin-bottom: 8px;
      letter-spacing: 0;
    }

    .setup-description {
      font-size: 14px;
      color: var(--stripe-muted);
      line-height: 1.5;
    }

    .security-notice {
      background: var(--stripe-amber-light);
      border: 1px solid rgba(245, 158, 11, 0.3);
      border-radius: 10px;
      padding: 14px;
      margin-bottom: 24px;
      font-size: 12.5px;
      color: #92400e;
      line-height: 1.5;
    }

    .security-notice strong {
      display: block;
      margin-bottom: 4px;
      font-size: 13px;
      font-weight: 700;
    }

    .notice-title {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .ui-icon {
      width: 18px;
      height: 18px;
      flex-shrink: 0;
    }

    .setup-icon .ui-icon {
      width: 24px;
      height: 24px;
    }

    .form-group {
      margin-bottom: 18px;
    }

    .form-label {
      display: block;
      font-size: 13px;
      font-weight: 600;
      color: var(--stripe-navy);
      margin-bottom: 6px;
    }

    .password-input-wrapper {
      position: relative;
    }

    .form-input {
      width: 100%;
      height: 42px;
      padding: 0 40px 0 14px;
      border: 1px solid var(--stripe-border);
      border-radius: 8px;
      font-size: 14px;
      transition: all 0.15s ease;
      font-family: inherit;
      background: var(--input-bg);
      color: var(--stripe-navy);
      box-sizing: border-box;
    }

    .form-input:focus {
      outline: none;
      border-color: var(--stripe-blurple);
      background: var(--input-bg-focus);
      box-shadow: 0 0 0 3px var(--stripe-blurple-ring);
    }

    .toggle-password {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      background: none;
      border: none;
      cursor: pointer;
      padding: 5px;
      color: var(--stripe-muted);
      transition: color 0.15s;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .toggle-password:hover {
      color: var(--stripe-blurple);
    }

    .password-requirements {
      background: var(--stripe-canvas);
      border: 1px solid var(--stripe-border);
      border-radius: 8px;
      padding: 12px 14px;
      margin-top: 10px;
      font-size: 12px;
      color: var(--stripe-muted);
    }

    .password-requirements strong {
      color: var(--stripe-navy);
    }

    .password-requirements ul {
      list-style: none;
      margin: 6px 0 0 0;
    }

    .password-requirements li {
      padding: 2px 0;
      padding-left: 16px;
      position: relative;
    }

    .password-requirements li:before {
      content: '';
      position: absolute;
      left: 0;
      top: 8px;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: var(--stripe-green);
    }

    .password-strength {
      margin-top: 8px;
      height: 4px;
      background: var(--stripe-border);
      border-radius: 2px;
      overflow: hidden;
    }

    .password-strength-bar {
      height: 100%;
      width: 0%;
      transition: all 0.25s ease;
      border-radius: 2px;
    }

    .strength-weak { background: var(--stripe-red); width: 33%; }
    .strength-medium { background: var(--stripe-amber); width: 66%; }
    .strength-strong { background: var(--stripe-green); width: 100%; }

    .submit-button {
      width: 100%;
      height: 42px;
      background: var(--stripe-blurple);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.15s ease;
      margin-top: 12px;
      box-shadow: 0 2px 6px rgba(99, 91, 255, 0.3);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }

    .submit-button:hover {
      background: var(--stripe-blurple-hover);
      box-shadow: 0 4px 14px rgba(99, 91, 255, 0.4);
    }

    .submit-button:active {
      background: var(--stripe-blurple-active);
    }

    .submit-button:disabled {
      background: var(--stripe-muted);
      cursor: not-allowed;
      opacity: 0.6;
      box-shadow: none;
    }

    .error-message {
      background: var(--stripe-red-light);
      border: 1px solid rgba(223, 27, 65, 0.3);
      border-radius: 8px;
      padding: 10px 14px;
      margin-bottom: 18px;
      color: var(--stripe-red);
      font-size: 13px;
      display: none;
      text-align: center;
    }

    .success-message {
      background: var(--stripe-green-light);
      border: 1px solid rgba(0, 217, 126, 0.3);
      border-radius: 8px;
      padding: 10px 14px;
      margin-bottom: 18px;
      color: #059669;
      font-size: 13px;
      display: none;
      text-align: center;
    }

    .loading-spinner {
      display: inline-block;
      width: 16px;
      height: 16px;
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-top-color: white;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    @media (max-width: 480px) {
      .setup-container {
        padding: 24px 20px;
        border-radius: 14px;
      }

      .setup-title {
        font-size: 20px;
      }
    }
  </style>
</head>
<body>
  <div class="setup-container">
    <div class="setup-header">
      <div class="setup-icon">${icon('lock', 'ui-icon')}</div>
      <h1 class="setup-title">欢迎使用 2FA</h1>
      <p class="setup-description">
        首次使用需要设置管理密码<br>
        密码将被加密存储，用于身份验证
      </p>
    </div>

    <div class="security-notice">
      <strong class="notice-title">${icon('shield', 'ui-icon')}安全提示</strong>
      请设置一个强密码并妥善保管，这是您登录管理密钥的凭证。
    </div>

    <div id="errorMessage" class="error-message"></div>
    <div id="successMessage" class="success-message"></div>

    <form id="setupForm" onsubmit="handleSetup(event)">
      <div class="form-group">
        <label class="form-label" for="password">设置密码</label>
        <div class="password-input-wrapper">
          <input
            type="password"
            id="password"
            class="form-input"
            placeholder="请输入密码"
            autocomplete="new-password"
            required
            oninput="checkPasswordStrength()"
          >
          <button type="button" class="toggle-password" onclick="togglePasswordVisibility('password')" title="显示/隐藏密码">
            ${icon('eye', 'ui-icon')}
          </button>
        </div>
        <div class="password-strength" id="passwordStrength">
          <div class="password-strength-bar" id="passwordStrengthBar"></div>
        </div>
        <div class="password-requirements">
          <strong>密码要求：</strong>
          <ul>
            <li>至少 8 个字符</li>
            <li>包含大写字母（A-Z）</li>
            <li>包含小写字母（a-z）</li>
            <li>包含数字（0-9）</li>
            <li>包含特殊字符（如 !@#$%^&*）</li>
          </ul>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label" for="confirmPassword">确认密码</label>
        <div class="password-input-wrapper">
          <input
            type="password"
            id="confirmPassword"
            class="form-input"
            placeholder="请再次输入密码"
            autocomplete="new-password"
            required
          >
          <button type="button" class="toggle-password" onclick="togglePasswordVisibility('confirmPassword')" title="显示/隐藏密码">
            ${icon('eye', 'ui-icon')}
          </button>
        </div>
      </div>

      <button type="submit" class="submit-button" id="submitButton">
        完成设置
      </button>
    </form>
  </div>

  <script>
    const eyeIcon = ${JSON.stringify(icon('eye', 'ui-icon'))};
    const eyeOffIcon = ${JSON.stringify(icon('eyeOff', 'ui-icon'))};

    // 切换密码可见性
    function togglePasswordVisibility(inputId) {
      const input = document.getElementById(inputId);
      const button = input.nextElementSibling;

      if (input.type === 'password') {
        input.type = 'text';
        button.innerHTML = eyeOffIcon;
      } else {
        input.type = 'password';
        button.innerHTML = eyeIcon;
      }
    }

    // 检查密码强度
    function checkPasswordStrength() {
      const password = document.getElementById('password').value;
      const strengthBar = document.getElementById('passwordStrengthBar');

      let strength = 0;

      // 检查长度
      if (password.length >= 8) strength++;
      if (password.length >= 12) strength++;

      // 检查复杂性
      if (/[a-z]/.test(password)) strength++;
      if (/[A-Z]/.test(password)) strength++;
      if (/[0-9]/.test(password)) strength++;
      if (/[^A-Za-z0-9]/.test(password)) strength++;

      // 更新进度条
      strengthBar.className = 'password-strength-bar';
      if (strength <= 2) {
        strengthBar.classList.add('strength-weak');
      } else if (strength <= 4) {
        strengthBar.classList.add('strength-medium');
      } else {
        strengthBar.classList.add('strength-strong');
      }
    }

    // 显示错误消息
    function showError(message) {
      const errorDiv = document.getElementById('errorMessage');
      errorDiv.textContent = message;
      errorDiv.style.display = 'block';

      // 5秒后自动隐藏
      setTimeout(() => {
        errorDiv.style.display = 'none';
      }, 5000);
    }

    // 显示成功消息
    function showSuccess(message) {
      const successDiv = document.getElementById('successMessage');
      successDiv.textContent = message;
      successDiv.style.display = 'block';
    }

    // 处理表单提交
    async function handleSetup(event) {
      event.preventDefault();

      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirmPassword').value;
      const submitButton = document.getElementById('submitButton');

      // 验证密码
      if (password !== confirmPassword) {
        showError('两次输入的密码不一致');
        return;
      }

      // 验证密码强度
      if (password.length < 8) {
        showError('密码长度至少为 8 位');
        return;
      }

      if (!/[A-Z]/.test(password)) {
        showError('密码必须包含至少一个大写字母');
        return;
      }

      if (!/[a-z]/.test(password)) {
        showError('密码必须包含至少一个小写字母');
        return;
      }

      if (!/[0-9]/.test(password)) {
        showError('密码必须包含至少一个数字');
        return;
      }

      if (!/[^A-Za-z0-9]/.test(password)) {
        showError('密码必须包含至少一个特殊字符');
        return;
      }

      // 禁用按钮，显示加载状态
      submitButton.disabled = true;
      submitButton.innerHTML = '<span class="loading-spinner"></span>正在设置...';

      try {
        const response = await fetch('/api/setup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            password: password,
            confirmPassword: confirmPassword
          })
        });

        const data = await response.json();

        if (response.ok) {
          showSuccess(data.message || '密码设置成功！正在跳转...');

          // 2秒后跳转到主页
          setTimeout(() => {
            window.location.href = '/';
          }, 2000);
        } else {
          showError(data.message || '设置失败，请重试');
          submitButton.disabled = false;
          submitButton.textContent = '完成设置';
        }
      } catch (error) {
        console.error('设置失败:', error);
        showError('网络错误，请检查连接后重试');
        submitButton.disabled = false;
        submitButton.textContent = '完成设置';
      }
    }
  </script>
</body>
</html>`;

	return new Response(html, {
		headers: {
			'Content-Type': 'text/html; charset=utf-8',
			'Cache-Control': 'no-cache, no-store, must-revalidate',
			Pragma: 'no-cache',
			Expires: '0',
		},
	});
}

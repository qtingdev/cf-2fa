/**
 * UI 交互模块
 * 包含 Toast 提示、主题切换、模态框管理、滚动控制等 UI 交互功能
 */

/**
 * 获取 UI 交互相关代码
 * @returns {string} UI JavaScript 代码
 */
export function getUICode() {
	return `    // ========== UI 交互模块 ==========

    // Toast 提示相关变量
    let toastTimeout = null;
    let themeTransitionTimer = null;

    function formatToastCode(code) {
      const normalizedCode = String(code || '').replace(/\\s+/g, '');
      if (/^\\d{6}$/.test(normalizedCode)) {
        return normalizedCode.slice(0, 3) + ' ' + normalizedCode.slice(3);
      }

      if (/^\\d{8}$/.test(normalizedCode)) {
        return normalizedCode.slice(0, 4) + ' ' + normalizedCode.slice(4);
      }

      return normalizedCode;
    }

    // 显示底部操作提示，复制验证码时附带验证码徽标
    function showCenterToast(icon, message, code = '') {
      const toast = document.getElementById('centerToast');
      if (!toast) return;

      const iconElement = toast.querySelector('.toast-icon');
      const messageElement = toast.querySelector('.toast-message');
      const codeElement = toast.querySelector('.toast-code-badge');
      const formattedCode = formatToastCode(code);

      if (toastTimeout) {
        clearTimeout(toastTimeout);
      }

      iconElement.innerHTML = renderIcon(getToastIconName(icon), 'ui-icon toast-svg');
      messageElement.textContent = message;
      toast.dataset.tone = ['x', 'alertTriangle'].includes(icon)
        ? 'danger'
        : (icon === 'check' ? 'success' : 'info');

      if (codeElement) {
        codeElement.textContent = formattedCode;
        codeElement.hidden = !formattedCode;
      }

      toast.classList.add('show');
      toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
        toastTimeout = null;
      }, 2500);
    }

    // 顶部导航栏一键切换深浅色模式
    function toggleThemeQuick() {
      const root = document.documentElement;
      const isDark = root.getAttribute('data-theme') === 'dark';
      const nextTheme = isDark ? 'light' : 'dark';
      localStorage.setItem('theme', nextTheme);
      applyTheme(nextTheme, true);
      showCenterToast(nextTheme === 'dark' ? 'moon' : 'sun', nextTheme === 'dark' ? '已切换至深色模式' : '已切换至浅色模式');
    }

    function toggleTheme() {
      toggleThemeQuick();
    }

    function resolveTheme(theme) {
      if (theme === 'dark' || theme === 'light') {
        return theme;
      }

      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    // 应用主题（优先使用浏览器 View Transition，旧浏览器使用受控颜色过渡）
    function applyTheme(theme, withTransition = false) {
      const root = document.documentElement;
      const nextTheme = resolveTheme(theme);
      const commitTheme = () => root.setAttribute('data-theme', nextTheme);

      if (root.getAttribute('data-theme') === nextTheme) {
        return;
      }

      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!withTransition || reduceMotion) {
        commitTheme();
        return;
      }

      if (typeof document.startViewTransition === 'function') {
        const transition = document.startViewTransition(commitTheme);
        transition.finished.catch(() => {});
        return;
      }

      if (themeTransitionTimer) {
        clearTimeout(themeTransitionTimer);
      }

      root.classList.add('theme-transition');
      commitTheme();
      themeTransitionTimer = setTimeout(() => {
        root.classList.remove('theme-transition');
        themeTransitionTimer = null;
      }, 220);
    }

    function initTheme() {
      // 主题已在 head 内联脚本中应用，这里仅监听系统主题变化
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        const currentTheme = localStorage.getItem('theme') || 'auto';
        if (currentTheme === 'auto') {
          applyTheme('auto', true);
        }
      });
    }

    // 模态框管理
    function hideQRModal() {
      const modal = document.getElementById('qrModal');
      if (!modal || !modal.classList.contains('show')) return;
      modal.classList.remove('show');
      setTimeout(() => modal.style.display = 'none', 300);
      enableBodyScroll();
    }

    function showAddModal() {
      showModal('secretModal', () => {
        editingId = null;
        document.getElementById('modalTitle').textContent = '添加新密钥';
        document.getElementById('submitBtn').textContent = '保存';
        document.getElementById('secretForm').reset();
        document.getElementById('secretId').value = '';
      });
    }

    // 隐藏添加/编辑密钥模态框
    function hideSecretModal() {
      const modal = document.getElementById('secretModal');
      if (!modal || !modal.classList.contains('show')) return;
      modal.classList.remove('show');
      setTimeout(() => modal.style.display = 'none', 300);
      enableBodyScroll();
    }

    // 实用工具相关函数
    function showToolsModal() {
      showModal('toolsModal');
    }

    function hideToolsModal() {
      hideModal('toolsModal');
    }

    // 设置模态框相关函数
    function showSettingsModal() {
      showModal('settingsModal', () => {
        // 重置到第一个标签页
        switchSettingsTab('security');
      });
    }

    function hideSettingsModal() {
      hideModal('settingsModal');
    }

    // 折叠式菜单控制函数
    function toggleActionMenu() {
      const mainBtn = document.getElementById('mainActionBtn');
      const submenu = document.getElementById('actionSubmenu');
      const overlay = document.getElementById('menuOverlay');

      const isActive = mainBtn.classList.contains('active');

      if (isActive) {
        closeActionMenu();
      } else {
        openActionMenu();
      }
    }

    function openActionMenu() {
      const mainBtn = document.getElementById('mainActionBtn');
      const submenu = document.getElementById('actionSubmenu');
      const overlay = document.getElementById('menuOverlay');

      mainBtn.classList.add('active');
      submenu.classList.add('show');
      overlay.classList.add('show');

      // 防止点击事件冒泡
      event.stopPropagation();
    }

    function closeActionMenu() {
      const mainBtn = document.getElementById('mainActionBtn');
      const submenu = document.getElementById('actionSubmenu');
      const overlay = document.getElementById('menuOverlay');

      mainBtn.classList.remove('active');
      submenu.classList.remove('show');
      overlay.classList.remove('show');
    }

    // 高级选项切换函数
    function toggleAdvancedOptions() {
      const checkbox = document.getElementById('showAdvanced');
      const options = document.getElementById('advancedOptions');

      if (checkbox.checked) {
        options.style.display = 'block';
        updateAdvancedOptionsForType(); // 根据当前类型调整UI
      } else {
        options.style.display = 'none';
      }
    }

    // 根据OTP类型更新高级选项UI
    function updateAdvancedOptionsForType() {
      const typeSelect = document.getElementById('secretType');
      const digitsGroup = document.getElementById('digitsGroup');
      const periodGroup = document.getElementById('periodGroup');
      const algorithmGroup = document.getElementById('algorithmGroup');
      const counterRow = document.getElementById('counterRow');
      const advancedInfo = document.getElementById('advancedInfo');
      const digitsSelect = document.getElementById('secretDigits');
      const periodSelect = document.getElementById('secretPeriod');
      const algorithmSelect = document.getElementById('secretAlgorithm');

      const selectedType = typeSelect.value;

      switch (selectedType) {
        case 'HOTP':
          // HOTP: 显示位数、算法、计数器，隐藏周期
          digitsGroup.style.display = 'block';
          periodGroup.style.display = 'none';
          algorithmGroup.style.display = 'block';
          counterRow.style.display = 'block';
          advancedInfo.textContent = 'HOTP使用计数器基准，每次生成后计数器自动递增';
          break;

        case 'TOTP':
        default:
          // TOTP: 显示位数、周期、算法，隐藏计数器
          digitsGroup.style.display = 'block';
          periodGroup.style.display = 'block';
          algorithmGroup.style.display = 'block';
          counterRow.style.display = 'none';
          advancedInfo.textContent = '大多数2FA应用使用默认设置：TOTP、6位、30秒、SHA1算法';
          break;
      }
    }

    // ESC键关闭菜单
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
        closeActionMenu();
      }
    });
`;
}

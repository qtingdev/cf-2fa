/**
 * 搜索和排序模块
 * 包含搜索和排序密钥的功能
 */

/**
 * 获取搜索和排序相关代码
 * @returns {string} 搜索 JavaScript 代码
 */
export function getSearchCode() {
	return `    // ========== 搜索和排序模块 ==========

    // 排序相关变量
    let currentSortType = 'oldest-first';
    const VALID_VIEW_MODES = ['grid', 'list'];
    const VALID_SORT_TYPES = [
      'manual-order',
      'oldest-first',
      'newest-first',
      'name-asc',
      'name-desc',
      'account-asc',
      'account-desc'
    ];

    function normalizeSortType(sortType) {
      return VALID_SORT_TYPES.includes(sortType) ? sortType : 'oldest-first';
    }

    function isManualSortMode() {
      return currentSortType === 'manual-order';
    }

    function normalizeViewMode(viewMode) {
      return VALID_VIEW_MODES.includes(viewMode) ? viewMode : 'grid';
    }

    function markActiveViewOption(value) {
      document.querySelectorAll('.view-toggle-button').forEach(button => {
        const match = button.dataset.view === value;
        button.classList.toggle('active', match);
        button.setAttribute('aria-pressed', match ? 'true' : 'false');
      });
    }

    function saveViewPreference(viewMode) {
      try {
        const normalizedViewMode = normalizeViewMode(viewMode);
        localStorage.setItem('2fa-view-mode', normalizedViewMode);
        console.log('💾 已保存视图设置:', normalizedViewMode);
      } catch (e) {
        console.warn('⚠️  保存视图设置失败:', e);
      }
    }

    function restoreViewPreference() {
      try {
        const savedValue = localStorage.getItem('2fa-view-mode');
        currentViewMode = normalizeViewMode(savedValue || currentViewMode);
        markActiveViewOption(currentViewMode);
        console.log('✅ 已恢复视图设置:', currentViewMode);
      } catch (e) {
        currentViewMode = 'grid';
        markActiveViewOption(currentViewMode);
        console.warn('⚠️  恢复视图设置失败:', e);
      }
    }

    async function selectViewMode(value) {
      const nextViewMode = normalizeViewMode(value);
      if (currentViewMode === nextViewMode) {
        markActiveViewOption(currentViewMode);
        return;
      }

      currentViewMode = nextViewMode;
      markActiveViewOption(currentViewMode);
      saveViewPreference(currentViewMode);
      await renderFilteredSecrets();
    }

    // 从 localStorage 恢复排序选择
    function restoreSortPreference() {
      try {
        const savedValue = localStorage.getItem('2fa-sort-preference');
        if (savedValue) {
          const savedSort = normalizeSortType(savedValue);
          currentSortType = savedSort;
          const sortSelect = document.getElementById('sortSelect');
          if (sortSelect) {
            sortSelect.value = savedSort;
          }
          markActiveSortOption(savedSort);
          console.log('✅ 已恢复排序设置:', savedSort);
        }
      } catch (e) {
        console.warn('⚠️  恢复排序设置失败:', e);
      }
    }

    // 同步 popover 中的 active 高亮
    function markActiveSortOption(value) {
      document.querySelectorAll('.sort-option').forEach(o => {
        const match = o.dataset.sort === value;
        o.classList.toggle('active', match);
        o.setAttribute('aria-checked', match ? 'true' : 'false');
      });
    }

    // popover 选择事件：写入隐藏 select、关闭 popover、触发排序
    function selectSort(value) {
      value = normalizeSortType(value);
      const sortSelect = document.getElementById('sortSelect');
      if (sortSelect) sortSelect.value = value;
      markActiveSortOption(value);
      const dropdown = document.getElementById('sortDropdown');
      if (dropdown) dropdown.removeAttribute('open');
      applySorting();
    }

    // 点击 popover 外或按 Escape 关闭
    function initSortDropdownOutsideClose() {
      document.addEventListener('click', (e) => {
        const dropdown = document.getElementById('sortDropdown');
        if (!dropdown || !dropdown.hasAttribute('open')) return;
        if (!dropdown.contains(e.target)) {
          dropdown.removeAttribute('open');
        }
      });
      document.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape') return;
        const dropdown = document.getElementById('sortDropdown');
        if (dropdown && dropdown.hasAttribute('open')) {
          dropdown.removeAttribute('open');
        }
      });
    }

    // 保存排序选择到 localStorage
    function saveSortPreference(sortType) {
      try {
        const normalizedSortType = normalizeSortType(sortType);
        localStorage.setItem('2fa-sort-preference', normalizedSortType);
        console.log('💾 已保存排序设置:', normalizedSortType);
      } catch (e) {
        console.warn('⚠️  保存排序设置失败:', e);
      }
    }

    function getSecretsMatchingQuery(query) {
      if (!query) {
        return [...secrets];
      }

      return secrets.filter(secret => {
        const serviceName = (secret.name || '').toLowerCase();
        const accountName = (secret.account || '').toLowerCase();
        return serviceName.includes(query) || accountName.includes(query);
      });
    }

    function syncFilteredSecretsWithCurrentSearch() {
      filteredSecrets = getSecretsMatchingQuery(currentSearchQuery);
    }

    // 搜索过滤功能
    async function filterSecrets(query) {
      const trimmedQuery = query.trim().toLowerCase();
      currentSearchQuery = trimmedQuery;

      const searchClear = document.getElementById('searchClear');
      const searchStats = document.getElementById('searchStats');

      if (trimmedQuery) {
        searchClear.style.display = 'block';
      } else {
        searchClear.style.display = 'none';
      }

      if (!trimmedQuery) {
        filteredSecrets = [...secrets];
        searchStats.style.display = 'none';
        await renderFilteredSecrets();
        return;
      }

      filteredSecrets = getSecretsMatchingQuery(trimmedQuery);

      const totalCount = secrets.length;
      const foundCount = filteredSecrets.length;

      if (foundCount === 0) {
        searchStats.textContent = '未找到匹配的密钥';
        searchStats.style.color = '#e74c3c';
      } else if (foundCount === totalCount) {
        searchStats.textContent = '显示所有 ' + totalCount + ' 个密钥';
        searchStats.style.color = '#27ae60';
      } else {
        searchStats.textContent = '找到 ' + foundCount + ' 个匹配密钥（共 ' + totalCount + ' 个）';
        searchStats.style.color = '#3498db';
      }
      searchStats.style.display = 'block';

      await renderFilteredSecrets();
    }

    // 清除搜索
    function clearSearch() {
      document.getElementById('searchInput').value = '';
      filterSecrets('');
      document.getElementById('searchInput').focus();
    }

    // 应用排序
    async function applySorting() {
      const sortSelect = document.getElementById('sortSelect');
      const selectedSort = sortSelect ? sortSelect.value : currentSortType;
      currentSortType = normalizeSortType(selectedSort);
      if (sortSelect) {
        sortSelect.value = currentSortType;
      }
      markActiveSortOption(currentSortType);
      
      // 保存用户的排序选择
      saveSortPreference(currentSortType);
      
      await renderFilteredSecrets();
    }

    // 排序密钥
    function sortSecrets(secretsToSort, sortType) {
      if (!secretsToSort || secretsToSort.length === 0) {
        return secretsToSort;
      }

      const sortedSecrets = [...secretsToSort];

      switch (sortType) {
        case 'manual-order':
          return sortedSecrets;

        case 'name-asc':
          return sortedSecrets.sort((a, b) => {
            const nameA = (a.name || '').toLowerCase();
            const nameB = (b.name || '').toLowerCase();
            return nameA.localeCompare(nameB, 'zh-CN');
          });

        case 'name-desc':
          return sortedSecrets.sort((a, b) => {
            const nameA = (a.name || '').toLowerCase();
            const nameB = (b.name || '').toLowerCase();
            return nameB.localeCompare(nameA, 'zh-CN');
          });

        case 'account-asc':
          return sortedSecrets.sort((a, b) => {
            const accountA = (a.account || '').toLowerCase();
            const accountB = (b.account || '').toLowerCase();
            return accountA.localeCompare(accountB, 'zh-CN');
          });

        case 'account-desc':
          return sortedSecrets.sort((a, b) => {
            const accountA = (a.account || '').toLowerCase();
            const accountB = (b.account || '').toLowerCase();
            return accountB.localeCompare(accountA, 'zh-CN');
          });

        case 'oldest-first':
          // 最早添加：按添加顺序（保持原有顺序）
          return sortedSecrets;

        case 'newest-first':
          // 最晚添加：按添加顺序倒序
          return sortedSecrets.reverse();

        case 'default':
        default:
          // 兼容旧版本，默认使用最早添加
          return sortedSecrets;
      }
    }

    function getRenderedSecretIds() {
      return Array.from(document.querySelectorAll('#secretsList .secret-card[data-secret-id]'))
        .map(card => card.dataset.secretId)
        .filter(Boolean);
    }

    function getSecretCardElement(secretId) {
      return Array.from(document.querySelectorAll('#secretsList .secret-card[data-secret-id]'))
        .find(card => card.dataset.secretId === secretId) || null;
    }

    function clearSecretDragClasses() {
      document.querySelectorAll('.secret-card.dragging, .secret-card.drag-over').forEach(card => {
        card.classList.remove('dragging', 'drag-over');
      });
    }

    function shouldInsertAfterCard(card, clientX, clientY) {
      const rect = card.getBoundingClientRect();
      const xOffset = clientX - (rect.left + rect.width / 2);
      const yOffset = clientY - (rect.top + rect.height / 2);

      if (Math.abs(xOffset) > Math.abs(yOffset)) {
        return xOffset > 0;
      }

      return yOffset > 0;
    }

    function moveVisibleSecretId(sourceId, targetId, insertAfter) {
      const visibleIds = getRenderedSecretIds();
      if (sourceId === targetId || !visibleIds.includes(sourceId) || !visibleIds.includes(targetId)) {
        return null;
      }

      const nextVisibleIds = visibleIds.filter(id => id !== sourceId);
      const targetIndex = nextVisibleIds.indexOf(targetId);
      if (targetIndex === -1) {
        return null;
      }

      nextVisibleIds.splice(insertAfter ? targetIndex + 1 : targetIndex, 0, sourceId);
      return nextVisibleIds;
    }

    function mergeVisibleOrderIntoSecrets(visibleOrder) {
      const visibleSet = new Set(visibleOrder);
      const secretById = new Map(secrets.map(secret => [secret.id, secret]));
      let visibleIndex = 0;

      return secrets.map(secret => {
        if (!visibleSet.has(secret.id)) {
          return secret;
        }

        const nextId = visibleOrder[visibleIndex++];
        return secretById.get(nextId) || secret;
      });
    }

    function haveSameSecretOrder(a, b) {
      return a.length === b.length && a.every((secret, index) => secret.id === b[index].id);
    }

    async function persistManualSecretOrder(orderIds, previousSecrets) {
      saveQueue = saveQueue.then(async () => {
        const response = await authenticatedFetch('/api/secrets/reorder', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ids: orderIds })
        });

        if (response.status === 401) {
          handleUnauthorized();
          return;
        }

        let result = null;
        try {
          result = await response.json();
        } catch {
          result = null;
        }

        if (!response.ok) {
          const message = result && (result.message || result.error) ? (result.message || result.error) : '排序保存失败';
          throw new Error(message);
        }

        if (result && result.queued && result.offline) {
          showCenterToast('download', result.message || '排序已保存，网络恢复后自动同步');
          return;
        }

        const updatedSecrets = result && result.data && Array.isArray(result.data.secrets) ? result.data.secrets : null;
        if (updatedSecrets) {
          secrets = updatedSecrets;
          syncFilteredSecretsWithCurrentSearch();
          await renderFilteredSecrets();
        }

        showCenterToast('check', '排序已保存');
      }).catch(async error => {
        console.error('保存手动排序失败:', error);
        secrets = previousSecrets;
        syncFilteredSecretsWithCurrentSearch();

        try {
          await renderFilteredSecrets();
        } catch (renderError) {
          console.error('恢复排序显示失败:', renderError);
        }

        showCenterToast('x', '排序保存失败：' + error.message);
      });

      await saveQueue;
    }

    async function performManualSecretReorder(sourceId, targetId, insertAfter) {
      if (!isManualSortMode()) {
        return;
      }

      const visibleOrder = moveVisibleSecretId(sourceId, targetId, insertAfter);
      if (!visibleOrder) {
        return;
      }

      const previousSecrets = [...secrets];
      const nextSecrets = mergeVisibleOrderIntoSecrets(visibleOrder);
      if (haveSameSecretOrder(previousSecrets, nextSecrets)) {
        return;
      }

      secrets = nextSecrets;
      syncFilteredSecretsWithCurrentSearch();
      await renderFilteredSecrets();
      await persistManualSecretOrder(secrets.map(secret => secret.id), previousSecrets);
    }

    function handleSecretDragStart(event, secretId) {
      if (!isManualSortMode()) {
        event.preventDefault();
        return;
      }

      draggingSecretId = secretId;
      closeAllCardMenus();

      if (event.dataTransfer) {
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData('text/plain', secretId);
      }

      const card = getSecretCardElement(secretId);
      if (card) {
        card.classList.add('dragging');
      }
    }

    function handleSecretDragOver(event, targetId) {
      if (!isManualSortMode() || !draggingSecretId || draggingSecretId === targetId) {
        return;
      }

      event.preventDefault();
      if (event.dataTransfer) {
        event.dataTransfer.dropEffect = 'move';
      }

      document.querySelectorAll('.secret-card.drag-over').forEach(card => {
        if (card.dataset.secretId !== targetId) {
          card.classList.remove('drag-over');
        }
      });

      const card = getSecretCardElement(targetId);
      if (card) {
        card.classList.add('drag-over');
      }
    }

    function handleSecretDragLeave(event) {
      const card = event.currentTarget;
      if (event.relatedTarget && card.contains(event.relatedTarget)) {
        return;
      }
      card.classList.remove('drag-over');
    }

    async function handleSecretDrop(event, targetId) {
      if (!isManualSortMode()) {
        return;
      }

      event.preventDefault();
      const sourceId = (event.dataTransfer && event.dataTransfer.getData('text/plain')) || draggingSecretId;
      const targetCard = getSecretCardElement(targetId);
      const insertAfter = targetCard ? shouldInsertAfterCard(targetCard, event.clientX, event.clientY) : false;

      clearSecretDragClasses();
      draggingSecretId = null;
      await performManualSecretReorder(sourceId, targetId, insertAfter);
    }

    function handleSecretDragEnd() {
      clearSecretDragClasses();
      draggingSecretId = null;
    }

    function handleSecretPointerDown(event, secretId) {
      if (!isManualSortMode() || event.pointerType === 'mouse') {
        return;
      }

      event.preventDefault();
      closeAllCardMenus();

      pointerDragState = {
        sourceId: secretId,
        targetId: null,
        insertAfter: false
      };

      const card = getSecretCardElement(secretId);
      if (card) {
        card.classList.add('dragging');
      }

      const handle = event.currentTarget;
      if (handle.setPointerCapture) {
        handle.setPointerCapture(event.pointerId);
      }

      document.addEventListener('pointermove', handleSecretPointerMove);
      document.addEventListener('pointerup', handleSecretPointerUp, { once: true });
      document.addEventListener('pointercancel', handleSecretPointerCancel, { once: true });
    }

    function handleSecretPointerMove(event) {
      if (!pointerDragState) {
        return;
      }

      event.preventDefault();
      const element = document.elementFromPoint(event.clientX, event.clientY);
      const card = element ? element.closest('.secret-card[data-secret-id]') : null;

      document.querySelectorAll('.secret-card.drag-over').forEach(item => item.classList.remove('drag-over'));

      if (!card || card.dataset.secretId === pointerDragState.sourceId) {
        pointerDragState.targetId = null;
        return;
      }

      pointerDragState.targetId = card.dataset.secretId;
      pointerDragState.insertAfter = shouldInsertAfterCard(card, event.clientX, event.clientY);
      card.classList.add('drag-over');
    }

    async function handleSecretPointerUp(event) {
      if (!pointerDragState) {
        return;
      }

      event.preventDefault();
      const dragState = pointerDragState;
      pointerDragState = null;
      clearSecretDragClasses();

      document.removeEventListener('pointermove', handleSecretPointerMove);
      document.removeEventListener('pointercancel', handleSecretPointerCancel);

      if (dragState.targetId) {
        await performManualSecretReorder(dragState.sourceId, dragState.targetId, dragState.insertAfter);
      }
    }

    function handleSecretPointerCancel() {
      pointerDragState = null;
      clearSecretDragClasses();
      document.removeEventListener('pointermove', handleSecretPointerMove);
      document.removeEventListener('pointerup', handleSecretPointerUp);
    }
`;
}

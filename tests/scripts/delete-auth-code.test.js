import { describe, expect, it } from 'vitest';

import { createServiceWorker } from '../../src/ui/serviceworker.js';
import { getCoreCode } from '../../src/ui/scripts/core.js';
import { getUtilsCode } from '../../src/ui/scripts/utils.js';

describe('delete reauthentication runtime code', () => {
	it('requires the current password and sends it only with the online delete request', () => {
		const code = getCoreCode();
		const deleteStart = code.indexOf('async function deleteSecret(id)');
		const deleteEnd = code.indexOf('// 二维码解析工具', deleteStart);
		const deleteCode = code.slice(deleteStart, deleteEnd);

		expect(deleteCode).toContain('requirePassword: true');
		expect(deleteCode).toContain('navigator.onLine === false');
		expect(deleteCode).toContain('body: JSON.stringify({ password: password })');
		expect(deleteCode).not.toContain('result.queued');
	});

	it('keeps the password field in the confirmation dialog and clears it after requests', () => {
		const code = getUtilsCode();

		expect(code).toContain('type="password"');
		expect(code).toContain('autocomplete="current-password"');
		expect(code).toContain("passwordInput.value = ''");
		expect(code).toContain("setError(error && error.message ? error.message : '验证失败，请重试')");
	});

	it('never persists secret deletion requests in the offline queue', async () => {
		const response = createServiceWorker({ SW_VERSION: 'delete-auth-test' });
		const code = await response.text();
		const onlineOnlyCheck = code.indexOf("method === 'DELETE' && url.pathname.startsWith('/api/secrets/')");
		const requestClone = code.indexOf('const requestClone = request.clone()');

		expect(onlineOnlyCheck).toBeGreaterThan(-1);
		expect(onlineOnlyCheck).toBeLessThan(requestClone);
		expect(code).toContain('删除操作需要联网验证密码，请连接网络后重试');
		expect(code).not.toContain("operationType = 'DELETE'");
		expect(code).toContain("typeof operation.url === 'string'");
		expect(code).toContain("operation.url.startsWith('/api/secrets/')");
	});
});

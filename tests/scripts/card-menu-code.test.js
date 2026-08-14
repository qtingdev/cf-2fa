import { describe, expect, it } from 'vitest';

import { getCoreCode } from '../../src/ui/scripts/core.js';
import { getComponentStyles } from '../../src/ui/styles/components.js';

describe('card menu stacking runtime code', () => {
	it('raises the active card and clears the stacking state when menus close', () => {
		const code = getCoreCode();

		expect(code).toContain("card.classList.add('menu-open')");
		expect(code).toContain("document.querySelectorAll('.secret-card.menu-open')");
		expect(code).toContain("card.classList.remove('menu-open')");
		expect(code).toContain('closeAllCardMenus();');
	});

	it('gives the active card a higher stacking level than adjacent cards', () => {
		const styles = getComponentStyles();

		expect(styles).toContain('.secret-card.menu-open');
		expect(styles).toContain('z-index: 10001;');
		expect(styles).toContain('overflow: visible;');
	});
});

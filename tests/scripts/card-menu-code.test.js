import { describe, expect, it } from 'vitest';

import { getCoreCode } from '../../src/ui/scripts/core.js';
import { getComponentStyles } from '../../src/ui/styles/components.js';

describe('card menu stacking runtime code', () => {
	it('positions menus in the viewport and clears entry state when menus close', () => {
		const code = getCoreCode();

		expect(code).toContain("entry.classList.add('menu-open')");
		expect(code).toContain("document.querySelectorAll('[data-secret-id].menu-open')");
		expect(code).toContain("entry.classList.remove('menu-open')");
		expect(code).toContain("dropdown.style.left = left + 'px'");
		expect(code).toContain("window.addEventListener('scroll', closeAllCardMenus, true)");
		expect(code).toContain('closeAllCardMenus();');
	});

	it('keeps card entries raised and renders the dropdown above scroll containers', () => {
		const styles = getComponentStyles();

		expect(styles).toContain('.secret-card.menu-open');
		expect(styles).toContain('z-index: 10001;');
		expect(styles).toContain('overflow: visible;');
		expect(styles).toMatch(/\.card-menu-dropdown \{[^}]*position: fixed;/s);
		expect(styles).toMatch(/\.card-menu-dropdown \{[^}]*z-index: 100000;/s);
	});
});

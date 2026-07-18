/**
 * Inline SVG icon helpers.
 * Paths use the same 24px stroke style as Iconify's lucide icon set.
 */

export const ICON_PATHS = {
	activity: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>',
	alertTriangle:
		'<path d="m21.7 18-8-14a2 2 0 0 0-3.4 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-3Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path>',
	arrowRight: '<path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>',
	barChart: '<path d="M3 3v18h18"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path>',
	camera:
		'<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3Z"></path><circle cx="12" cy="13" r="3"></circle>',
	check: '<path d="M20 6 9 17l-5-5"></path>',
	chevronsUpDown: '<path d="m7 15 5 5 5-5"></path><path d="m7 9 5-5 5 5"></path>',
	clipboard:
		'<rect width="8" height="4" x="8" y="2" rx="1"></rect><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2"></path>',
	cloud: '<path d="M17.5 19H9a7 7 0 1 1 6.7-9h1.8a4.5 4.5 0 1 1 0 9Z"></path>',
	copy: '<rect width="14" height="14" x="8" y="8" rx="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>',
	database:
		'<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"></path><path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3"></path>',
	download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="M7 10l5 5 5-5"></path><path d="M12 15V3"></path>',
	eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"></path><circle cx="12" cy="12" r="3"></circle>',
	eyeOff:
		'<path d="M9.9 4.2A10.4 10.4 0 0 1 12 4c6.5 0 10 8 10 8a18.5 18.5 0 0 1-2.1 3.2"></path><path d="M14.1 14.1A3 3 0 0 1 9.9 9.9"></path><path d="M4.9 4.9 19.1 19.1"></path><path d="M6.6 6.6C3.7 8.6 2 12 2 12s3.5 8 10 8a10.8 10.8 0 0 0 5.4-1.4"></path>',
	file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"></path><path d="M14 2v6h6"></path>',
	fileText:
		'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"></path><path d="M14 2v6h6"></path><path d="M16 13H8"></path><path d="M16 17H8"></path><path d="M10 9H8"></path>',
	folder: '<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7l-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z"></path>',
	globe:
		'<circle cx="12" cy="12" r="10"></circle><path d="M2 12h20"></path><path d="M12 2a15.3 15.3 0 0 1 0 20"></path><path d="M12 2a15.3 15.3 0 0 0 0 20"></path>',
	hash: '<path d="M4 9h16"></path><path d="M4 15h16"></path><path d="M10 3 8 21"></path><path d="m16 3-2 18"></path>',
	image:
		'<rect width="18" height="18" x="3" y="3" rx="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"></path>',
	info: '<circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path>',
	key: '<circle cx="7.5" cy="15.5" r="5.5"></circle><path d="m21 2-9.6 9.6"></path><path d="m15.5 7.5 3 3L22 7l-3-3"></path>',
	link: '<path d="M10 13a5 5 0 0 0 7.1 0l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1"></path><path d="M14 11a5 5 0 0 0-7.1 0l-2 2A5 5 0 0 0 12 20l1.1-1.1"></path>',
	loader:
		'<path d="M12 2v4"></path><path d="M12 18v4"></path><path d="m4.93 4.93 2.83 2.83"></path><path d="m16.24 16.24 2.83 2.83"></path><path d="M2 12h4"></path><path d="M18 12h4"></path><path d="m4.93 19.07 2.83-2.83"></path><path d="m16.24 7.76 2.83-2.83"></path>',
	lock: '<rect width="18" height="11" x="3" y="11" rx="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',
	logOut: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><path d="m16 17 5-5-5-5"></path><path d="M21 12H9"></path>',
	monitor: '<rect width="20" height="14" x="2" y="3" rx="2"></rect><path d="M8 21h8"></path><path d="M12 17v4"></path>',
	moon: '<path d="M12 3a6 6 0 0 0 9 7.5A9 9 0 1 1 12 3Z"></path>',
	moreVertical: '<circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>',
	palette:
		'<circle cx="13.5" cy="6.5" r=".5"></circle><circle cx="17.5" cy="10.5" r=".5"></circle><circle cx="8.5" cy="7.5" r=".5"></circle><circle cx="6.5" cy="12.5" r=".5"></circle><path d="M12 2C6.5 2 2 5.8 2 10.5S5.6 19 10 19h1.5a2.5 2.5 0 0 1 0 5H13c5 0 9-4 9-9.5S17.5 2 12 2Z"></path>',
	plus: '<path d="M5 12h14"></path><path d="M12 5v14"></path>',
	qrCode:
		'<rect width="5" height="5" x="3" y="3" rx="1"></rect><rect width="5" height="5" x="16" y="3" rx="1"></rect><rect width="5" height="5" x="3" y="16" rx="1"></rect><path d="M21 16h-3a2 2 0 0 0-2 2v3"></path><path d="M21 21v.01"></path><path d="M12 7v3a2 2 0 0 1-2 2H7"></path><path d="M3 12h.01"></path><path d="M12 3h.01"></path><path d="M12 16v.01"></path><path d="M16 12h1"></path><path d="M21 12v.01"></path><path d="M12 21v-1"></path>',
	refresh:
		'<path d="M21 12a9 9 0 0 1-9 9 9.8 9.8 0 0 1-6.7-2.7L3 16"></path><path d="M3 21v-5h5"></path><path d="M3 12a9 9 0 0 1 15.7-6.3L21 8"></path><path d="M21 3v5h-5"></path>',
	save: '<path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8A2 2 0 0 1 21 8.8V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"></path><path d="M17 21v-7H7v7"></path><path d="M7 3v5h8"></path>',
	search: '<circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path>',
	settings:
		'<path d="M12.2 2h-.4a2 2 0 0 0-2 1.8l-.1 1a7.8 7.8 0 0 0-1.5.6l-.9-.6a2 2 0 0 0-2.6.2l-.3.3a2 2 0 0 0-.2 2.6l.6.9a7.8 7.8 0 0 0-.6 1.5l-1 .1A2 2 0 0 0 1.4 12v.4a2 2 0 0 0 1.8 2l1 .1c.1.5.3 1 .6 1.5l-.6.9a2 2 0 0 0 .2 2.6l.3.3a2 2 0 0 0 2.6.2l.9-.6c.5.2 1 .4 1.5.6l.1 1a2 2 0 0 0 2 1.8h.4a2 2 0 0 0 2-1.8l.1-1c.5-.1 1-.3 1.5-.6l.9.6a2 2 0 0 0 2.6-.2l.3-.3a2 2 0 0 0 .2-2.6l-.6-.9c.2-.5.4-1 .6-1.5l1-.1a2 2 0 0 0 1.8-2V12a2 2 0 0 0-1.8-2l-1-.1c-.1-.5-.3-1-.6-1.5l.6-.9a2 2 0 0 0-.2-2.6l-.3-.3a2 2 0 0 0-2.6-.2l-.9.6c-.5-.2-1-.4-1.5-.6l-.1-1a2 2 0 0 0-2-1.8Z"></path><circle cx="12" cy="12" r="3"></circle>',
	shield:
		'<path d="M20 13c0 5-3.5 7.5-7.7 8.9a1 1 0 0 1-.6 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.5a1.3 1.3 0 0 1 1.6 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1Z"></path>',
	shieldCheck:
		'<path d="M20 13c0 5-3.5 7.5-7.7 8.9a1 1 0 0 1-.6 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.5a1.3 1.3 0 0 1 1.6 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1Z"></path><path d="m9 12 2 2 4-4"></path>',
	smartphone: '<rect width="14" height="20" x="5" y="2" rx="2"></rect><path d="M12 18h.01"></path>',
	sparkles:
		'<path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"></path>',
	sun: '<circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.9 4.9 1.4 1.4"></path><path d="m17.7 17.7 1.4 1.4"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.3 17.7-1.4 1.4"></path><path d="m19.1 4.9-1.4 1.4"></path>',
	table:
		'<path d="M12 3v18"></path><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path>',
	upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m17 8-5-5-5 5"></path><path d="M12 3v12"></path>',
	wrench: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.4 2.4-2.8-2.8Z"></path>',
	x: '<path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>',
};

function escapeAttr(value) {
	return String(value).replace(
		/[&<>"']/g,
		(char) =>
			({
				'&': '&amp;',
				'<': '&lt;',
				'>': '&gt;',
				'"': '&quot;',
				"'": '&#39;',
			})[char],
	);
}

export function icon(name, className = 'ui-icon', label = '') {
	const body = ICON_PATHS[name] || ICON_PATHS.info;
	const accessibility = label ? `role="img" aria-label="${escapeAttr(label)}"` : 'aria-hidden="true" focusable="false"';
	return `<svg class="${escapeAttr(className)}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ${accessibility}>${body}</svg>`;
}

export function getIconRuntimeCode() {
	return `
    const ICON_PATHS = ${JSON.stringify(ICON_PATHS)};

    function renderIcon(name, className = 'ui-icon', label = '') {
      const body = ICON_PATHS[name] || ICON_PATHS.info;
      const safeClass = String(className).replace(/[&<>"']/g, '');
      const safeLabel = String(label).replace(/[&<>"']/g, '');
      const accessibility = safeLabel
        ? 'role="img" aria-label="' + safeLabel + '"'
        : 'aria-hidden="true" focusable="false"';
      return '<svg class="' + safeClass + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ' + accessibility + '>' + body + '</svg>';
    }

    function getToastIconName(icon) {
      const key = String(icon || '').trim();
      const iconMap = {
        '✅': 'check',
        '❌': 'x',
        '⚠️': 'alertTriangle',
        'ℹ️': 'info',
        '⏳': 'loader',
        '🔄': 'refresh',
        '📥': 'download',
        '📤': 'upload',
        '📋': 'clipboard',
        '🔗': 'link',
        '💾': 'save',
        '🌐': 'globe',
        '📡': 'cloud',
        '👋': 'logOut',
        '🔨': 'wrench',
        '⏭️': 'arrowRight',
        INFO: 'info',
        ERR: 'x',
      };
      return iconMap[key] || key || 'info';
    }
`;
}

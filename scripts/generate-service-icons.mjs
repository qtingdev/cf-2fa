import { writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import prettier from 'prettier';

const ICONIFY_API = 'https://api.iconify.design/simple-icons.json';
const SIMPLE_ICONS_METADATA = 'https://cdn.jsdelivr.net/npm/simple-icons@15.0.0/data/simple-icons.json';

const ICON_SPECS = [
	{ id: 'google', aliases: ['google workspace', 'google drive', 'google meet', '谷歌'] },
	{ id: 'googlecloud', aliases: ['google cloud', 'gcp', '谷歌云'] },
	{ id: 'gmail', aliases: ['google mail'] },
	{ id: 'googlegemini', aliases: ['gemini', 'google gemini', 'bard'] },
	{ id: 'microsoft', aliases: ['microsoft account', 'windows', 'office', 'microsoft 365', 'office 365', 'teams', 'skype', 'onedrive'] },
	{ id: 'microsoftazure', aliases: ['azure', 'microsoft azure'] },
	{ id: 'microsoftoutlook', aliases: ['outlook', 'microsoft outlook', 'hotmail', 'live.com'] },
	{ id: 'apple', aliases: ['apple id'] },
	{ id: 'icloud', aliases: [] },
	{ id: 'amazon', aliases: ['amazon account', 'prime video'] },
	{ id: 'amazonwebservices', aliases: ['aws', 'amazon web services', 'route53', 'route 53'] },
	{ id: 'meta', aliases: [] },
	{ id: 'facebook', aliases: [] },
	{ id: 'messenger', aliases: [] },
	{ id: 'threads', aliases: [] },
	{ id: 'x', aliases: ['twitter', 'twitter x'] },
	{ id: 'instagram', aliases: [] },
	{ id: 'linkedin', aliases: [] },
	{ id: 'reddit', aliases: [] },
	{ id: 'tiktok', aliases: ['douyin', '抖音'] },
	{ id: 'bilibili', aliases: ['哔哩哔哩', 'b站'] },
	{ id: 'wechat', aliases: ['微信', 'weixin', 'wechat work', '企业微信'] },
	{ id: 'qq', aliases: ['腾讯 qq', '腾讯qq'] },
	{ id: 'xiaohongshu', aliases: ['小红书', 'rednote'] },
	{ id: 'zhihu', aliases: ['知乎'] },
	{ id: 'discord', aliases: [] },
	{ id: 'slack', aliases: [] },
	{ id: 'telegram', aliases: [] },
	{ id: 'whatsapp', aliases: [] },
	{ id: 'signal', aliases: [] },
	{ id: 'zoom', aliases: [] },
	{ id: 'github', aliases: [] },
	{ id: 'gitlab', aliases: [] },
	{ id: 'bitbucket', aliases: [] },
	{ id: 'gitee', aliases: [] },
	{ id: 'npm', aliases: ['npmjs'] },
	{ id: 'docker', aliases: [] },
	{ id: 'kubernetes', aliases: ['k8s'] },
	{ id: 'jenkins', aliases: [] },
	{ id: 'firebase', aliases: [] },
	{ id: 'supabase', aliases: [] },
	{ id: 'vercel', aliases: [] },
	{ id: 'netlify', aliases: [] },
	{ id: 'heroku', aliases: [] },
	{ id: 'cloudflare', aliases: [] },
	{ id: 'digitalocean', aliases: ['digital ocean'] },
	{ id: 'vultr', aliases: [] },
	{ id: 'oracle', aliases: ['oracle cloud'] },
	{ id: 'alibabacloud', aliases: ['aliyun', 'alibaba cloud', '阿里云'] },
	{ id: 'salesforce', aliases: [] },
	{ id: 'wordpress', aliases: [] },
	{ id: 'tailscale', aliases: [] },
	{ id: 'notion', aliases: [] },
	{ id: 'atlassian', aliases: ['confluence'] },
	{ id: 'jira', aliases: [] },
	{ id: 'trello', aliases: [] },
	{ id: 'figma', aliases: [] },
	{ id: 'canva', aliases: [] },
	{ id: 'adobe', aliases: [] },
	{ id: 'dropbox', aliases: [] },
	{ id: '1password', aliases: ['1 password'] },
	{ id: 'bitwarden', aliases: [] },
	{ id: 'openai', aliases: ['chatgpt', 'dall-e', 'dalle'] },
	{ id: 'anthropic', aliases: ['claude'] },
	{ id: 'huggingface', aliases: ['hugging face'] },
	{ id: 'perplexity', aliases: ['perplexity ai'] },
	{ id: 'paypal', aliases: [] },
	{ id: 'stripe', aliases: [] },
	{ id: 'wise', aliases: ['transferwise'] },
	{ id: 'square', aliases: ['squareup'] },
	{ id: 'alipay', aliases: ['支付宝'] },
	{ id: 'binance', aliases: [] },
	{ id: 'coinbase', aliases: [] },
	{ id: 'okx', aliases: [] },
	{ id: 'steam', aliases: [] },
	{ id: 'epicgames', aliases: ['epic games'] },
	{ id: 'playstation', aliases: ['psn'] },
	{ id: 'xbox', aliases: [] },
	{ id: 'nintendo', aliases: [] },
	{ id: 'netflix', aliases: [] },
	{ id: 'spotify', aliases: [] },
	{ id: 'youtube', aliases: [] },
	{ id: 'twitch', aliases: [] },
	{ id: 'shopify', aliases: [] },
	{ id: 'proton', aliases: ['proton vpn', 'protonvpn'] },
	{ id: 'protonmail', aliases: ['proton mail'] },
	{ id: 'auth0', aliases: [] },
	{ id: 'okta', aliases: [] },
	{ id: 'baidu', aliases: ['百度'] },
	{ id: 'bytedance', aliases: ['byte dance', '字节跳动'] },
];

const MANUAL_COLORS = {
	microsoft: '00A4EF',
	microsoftazure: '0078D4',
	microsoftoutlook: '0078D4',
	amazon: 'FF9900',
	amazonwebservices: '232F3E',
	linkedin: '0A66C2',
	oracle: 'F80000',
	adobe: 'FF0000',
	xbox: '107C10',
	nintendo: 'E60012',
};

const ADAPTIVE_ICONS = new Set([
	'apple',
	'anthropic',
	'epicgames',
	'github',
	'notion',
	'okx',
	'steam',
	'tailscale',
	'threads',
	'tiktok',
	'vercel',
	'x',
]);

function normalizeAlias(value) {
	return String(value || '')
		.normalize('NFKC')
		.toLocaleLowerCase('en-US')
		.trim()
		.split(/[\s._:/+()-]+/)
		.filter(Boolean)
		.join(' ');
}

function metadataSlug(title) {
	return String(title || '')
		.normalize('NFKD')
		.replace(/[\u0300-\u036f]/g, '')
		.toLocaleLowerCase('en-US')
		.replace(/&/g, 'and')
		.replace(/\+/g, 'plus')
		.replace(/\./g, 'dot')
		.replace(/[^a-z0-9]/g, '');
}

async function fetchJson(url) {
	const response = await fetch(url, {
		headers: { 'User-Agent': 'cf-2fa-service-icon-generator' },
	});

	if (!response.ok) {
		throw new Error(`Request failed (${response.status}): ${url}`);
	}

	return response.json();
}

function chunk(values, size) {
	const chunks = [];
	for (let index = 0; index < values.length; index += size) {
		chunks.push(values.slice(index, index + size));
	}
	return chunks;
}

async function loadIconBodies(iconIds) {
	const iconSets = await Promise.all(chunk(iconIds, 40).map((ids) => fetchJson(`${ICONIFY_API}?icons=${ids.join(',')}`)));
	const bodies = Object.assign({}, ...iconSets.map((iconSet) => iconSet.icons || {}));
	const missing = iconIds.filter((iconId) => !bodies[iconId]?.body);

	if (missing.length > 0) {
		throw new Error(`Iconify is missing icons: ${missing.join(', ')}`);
	}

	return bodies;
}

async function main() {
	const iconIds = ICON_SPECS.map((spec) => spec.id);
	const [iconBodies, metadata] = await Promise.all([loadIconBodies(iconIds), fetchJson(SIMPLE_ICONS_METADATA)]);
	const metadataColors = new Map(metadata.map((icon) => [metadataSlug(icon.title), icon.hex]));
	const definitions = {};
	const aliases = {};

	for (const spec of ICON_SPECS) {
		const color = MANUAL_COLORS[spec.id] || metadataColors.get(spec.id);
		if (!color) {
			throw new Error(`Simple Icons metadata is missing a color for: ${spec.id}`);
		}

		definitions[spec.id] = {
			body: iconBodies[spec.id].body,
			color: `#${color.toUpperCase()}`,
			adaptive: ADAPTIVE_ICONS.has(spec.id),
		};

		for (const alias of [spec.id, ...spec.aliases]) {
			const normalizedAlias = normalizeAlias(alias);
			if (aliases[normalizedAlias] && aliases[normalizedAlias] !== spec.id) {
				throw new Error(`Duplicate service icon alias: ${normalizedAlias}`);
			}
			aliases[normalizedAlias] = spec.id;
		}
	}

	const output = `/**\n * Generated by scripts/generate-service-icons.mjs.\n * SVG paths: Simple Icons via Iconify (CC0-1.0).\n * Do not edit this file manually; run npm run icons:update.\n */\n\nexport const SERVICE_ICON_DEFINITIONS = Object.freeze(${JSON.stringify(definitions, null, 2)});\n\nexport const SERVICE_ICON_ALIASES = Object.freeze(${JSON.stringify(aliases, null, 2)});\n`;
	const scriptDirectory = dirname(fileURLToPath(import.meta.url));
	const outputPath = resolve(scriptDirectory, '../src/ui/config/serviceIcons.js');

	const formattedOutput = await prettier.format(output, { filepath: outputPath });

	await writeFile(outputPath, formattedOutput, 'utf8');
	console.log(`Generated ${iconIds.length} service icons and ${Object.keys(aliases).length} aliases.`);
}

await main();

# CF 2FA

A two-factor authentication key manager built on Cloudflare Workers. Your data stays in your own Cloudflare KV namespace, with PWA support, encrypted storage, responsive views, and remote backups.

**[中文](README.md)**

![Version](https://img.shields.io/badge/version-1.5.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Platform](https://img.shields.io/badge/platform-Cloudflare%20Workers-orange)

> Based on [wuzf/2fa](https://github.com/wuzf/2fa) and currently maintained at [qtingdev/cf-2fa](https://github.com/qtingdev/cf-2fa).

## New Interface

### Desktop Grid View

![Desktop grid view](docs/images/screenshot-desktop.png)

<table>
  <tr>
    <th width="72%">List view</th>
    <th width="28%">Mobile</th>
  </tr>
  <tr>
    <td><img src="docs/images/screenshot-tablet.png" alt="List view"></td>
    <td><img src="docs/images/screenshot-mobile.png" alt="Mobile view"></td>
  </tr>
</table>

## Highlights

- **Dashboard-style UI** with a fixed header, account count, sync status, and TOTP cadence
- **Grid and list views** optimized for desktop, tablet, and mobile screens
- **Fast filtering** by service or account, plus direct provider filters for Google, OpenAI, GitHub, and more
- **Duplicate account check** for matching account names under the same provider
- **Flexible sorting** by creation order, service, account, or manual drag and drop
- **Complete OTP details** including current code, circular countdown, next code, and creation time
- **Multiple add flows** through camera scan, image upload, clipboard paste, drag and drop, or manual entry
- **Broad import/export support** for TXT, JSON, CSV, HTML, migration QR codes, and authenticator backups
- **Encryption and re-authentication** with optional AES-GCM 256-bit storage and password confirmation before deletion
- **Automatic and remote backups** through WebDAV, S3, OneDrive, and Google Drive

## Quick Deployment

There is no public demo account. Two-factor authentication data is sensitive, so deploy the project to your own Cloudflare account instead.

### One-Click Deploy

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/qtingdev/cf-2fa)

1. Click the button and authorize with GitHub
2. Sign in to Cloudflare, confirm the project, and wait for the first deployment
3. Open the generated Workers URL and create the admin password
4. Configure and securely store `ENCRYPTION_KEY`

The repository's `wrangler.toml` declares `SECRETS_KV`. Wrangler creates or binds KV during the first deployment and reuses the same Worker and storage on later deployments.

If you configure the Git build command manually in Cloudflare Dashboard, use:

```bash
npm run deploy
```

Do not replace it with a direct `npx wrangler deploy` command, because that bypasses the project's version injection flow.

### Enable Data Encryption

Add this Secret under **Cloudflare Dashboard → Worker → Settings → Variables**:

```text
ENCRYPTION_KEY=<Base64 string containing 32 random bytes>
```

Generate one with either command:

```bash
openssl rand -base64 32
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

`ENCRYPTION_KEY` is the master key for existing secrets, backups, and remote storage credentials. Cloudflare will not reveal a Secret after it is saved. Losing the value makes existing encrypted data unrecoverable.

### Update an Existing Deployment

One-click deployment usually creates an independent repository. Before upgrading, save a local backup through **Bulk Export** or **Restore Config → Export Backup**, then:

1. Open your GitHub repository
2. Go to **Actions → Sync Upstream**
3. Select **Run workflow** and keep the default `main` branch
4. Wait for the sync and review the `wrangler.toml` diff in the run summary
5. Cloudflare Git integration redeploys the same Worker from the new commit

If the workflow is missing, add [`.github/workflows/sync-upstream.yml`](https://github.com/qtingdev/cf-2fa/blob/main/.github/workflows/sync-upstream.yml) and commit it once. It pulls updates from `qtingdev/cf-2fa` while preserving the current Worker name, KV IDs, routes, and common deployment settings.

Normal updates do not remove KV or Secrets and do not require recreating `ENCRYPTION_KEY`.

## Usage

### Add Accounts

- Click **Scan to add** in the header or the scan icon beside the search field
- Scan with the camera, or upload, paste, or drag a QR code image
- Use the floating action menu for **Manual Add** and **Bulk Import**
- Manual entries can configure TOTP/HOTP, digits, period, algorithm, and counter

### Browse and Filter

- Click a code or card to copy the current OTP
- Cards and rows show the full account, creation time, remaining seconds, and next code
- Click a provider chip to display only accounts from that service
- Click **Duplicates** to find repeated account names under the same provider
- Switch between grid and list views; choose **Manual order** to enable drag sorting

### Manage Accounts

Use the overflow menu on a card or list row to view its QR code, copy the `otpauth://` URI, edit it, or delete it.

Deletion requires confirmation and the current admin password. Delete requests must be completed online and are never placed in the PWA offline queue.

### Bulk Import

File upload and text paste support:

| Source                                | Supported format                         |
| ------------------------------------- | ---------------------------------------- |
| Generic                               | `otpauth://` URI, TXT, CSV, HTML         |
| Google Authenticator                  | `otpauth-migration://` migration QR code |
| Aegis / Bitwarden / LastPass / andOTP | JSON                                     |
| 2FAS                                  | `.2fas`                                  |
| Ente Auth / AuthPro and others        | Their exported backup files              |

### Export, Backup, and Restore

- Bulk export supports TXT, JSON, CSV, HTML, and Google Authenticator migration QR codes
- Data changes trigger automatic backups, with a daily scheduled check as a fallback
- Local automatic backups retain the latest 100 copies by default; `0` disables the count limit
- Upload `backup_*.(txt|json|csv|html)` files to preview and restore them
- Configure multiple WebDAV, S3, OneDrive, and Google Drive targets
- WebDAV automatically uses a `cf-2fa-backup` subdirectory and removes remote backup files older than seven days

Remote targets receive the same backup payload generated by the app. If a backup was created with `ENCRYPTION_KEY`, restoring it requires the same key.

See [Cloud Drive Setup](docs/CLOUD_DRIVE_SETUP.md) for configuration details.

### PWA and Offline Use

- iOS: Safari → Share → Add to Home Screen
- Android: Chrome → Menu → Install app or Add to Home Screen
- Desktop Chrome / Edge: use the install control in the address bar

Offline mode can display cached accounts and generate OTPs in the browser. Deletion, login, backup, and operations requiring server confirmation must be completed online.

## Security

- **Password storage**: salted PBKDF2-SHA256 with 100,000 iterations
- **Session**: JWT stored in an `HttpOnly + Secure + SameSite=Strict` cookie
- **Data encryption**: AES-GCM 256-bit for secrets, backups, and remote credentials when `ENCRYPTION_KEY` is configured
- **Transport**: HTTPS through Cloudflare Workers
- **Privacy**: OTPs are generated client-side and no usage analytics are collected
- **Sensitive actions**: account deletion requires the admin password again

## Public OTP API

Generate an OTP directly from a URL without signing in:

```text
https://your-worker.workers.dev/otp/YOUR_SECRET_KEY
https://your-worker.workers.dev/otp/YOUR_SECRET_KEY?digits=8&period=60
https://your-worker.workers.dev/otp/YOUR_SECRET_KEY?type=hotp&counter=5
```

Supported parameters: `type`, `digits`, `period`, `algorithm`, and `counter`.

## Documentation

| Document                                       | Contents                                           |
| ---------------------------------------------- | -------------------------------------------------- |
| [Deployment Guide](docs/DEPLOYMENT.md)         | Manual deployment, KV, Secrets, and updates        |
| [Cloud Drive Setup](docs/CLOUD_DRIVE_SETUP.md) | WebDAV, OneDrive, Google Drive, and remote backups |
| [API Reference](docs/API_REFERENCE.md)         | API endpoints, requests, and responses             |
| [Architecture](docs/ARCHITECTURE.md)           | System design and implementation                   |
| [Development Guide](docs/DEVELOPMENT.md)       | Local development, testing, and conventions        |
| [PWA Guide](docs/PWA_GUIDE.md)                 | Installation, caching, and offline behavior        |

## Contributing

Issues and pull requests are welcome at [qtingdev/cf-2fa](https://github.com/qtingdev/cf-2fa). See the [Contributing Guide](.github/CONTRIBUTING.md) for the development workflow.

## License

[MIT License](LICENSE)

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=qtingdev/cf-2fa&type=date&legend=top-left)](https://www.star-history.com/#qtingdev/cf-2fa&type=date&legend=top-left)

---

<div align="center">

Based on [wuzf/2fa](https://github.com/wuzf/2fa), maintained at [qtingdev/cf-2fa](https://github.com/qtingdev/cf-2fa).

</div>

# MCServerStatus

Check the live status of any Minecraft server — online players, version, MOTD, server icon, saved servers, MCServerHost node status, and player lookups.

## Features

- **Server Status** — ping any Java or Bedrock server and see online players, version, MOTD, and icon.
- **Saved Servers** — keep a list of servers with favourites and quick switching.
- **Node Status** — live MCServerHost node metrics (latency, uptime, CPU, memory, storage).
- **Player Lookup** — look up a player's UUID and skin, rendered in 3D.

## Development

```bash
npm run dev      # Start Vite dev server
npm run build    # Build for production
npm run preview  # Build + preview with Wrangler
npm run deploy   # Build + deploy to Cloudflare Pages
```

## Stack

- **Build:** [Vite](https://vitejs.dev/) with multi-page HTML input
- **Partials:** EJS includes resolved at build time via `transformIndexHtml`
- **Deploy:** [Cloudflare Pages](https://pages.cloudflare.com/) via [Wrangler](https://developers.cloudflare.com/workers/wrangler/)
- **3D Rendering:** [skinview3d](https://github.com/bs-community/skinview3d) for the player skin viewer
- **Icons:** [Lucide](https://lucide.dev/)

Built by [BananaBrother77](https://github.com/BananaBrother77).

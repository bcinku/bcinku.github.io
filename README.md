# BCIN website

## Run locally

```bash
npm ci
npm run dev
```

Open the address shown by Vite (normally `http://localhost:5173`). Create a production build with `npm run build`.

## Add a news article

1. Add its title, date, excerpt, and body to `frontend/src/content/articles.js`.
2. Copy `frontend/articles/template/` to `frontend/articles/your-new-slug/`.
3. Add that new HTML file to `frontend/vite.config.js` under `build.rollupOptions.input`.

The landing-page card automatically links to `/articles/your-new-slug/`.

## Deploy

GitHub Actions builds and publishes the site whenever changes are pushed to `main`.

The intended production URL is [https://bcin.github.io/](https://bcin.github.io/). GitHub only gives that root URL to a repository owned by the `bcin` account or organization and named `bcin.github.io` — that is, `github.com/bcin/bcin.github.io`.

If the repository remains under the `bcinku` owner as `github.com/bcinku/bcin.github.io`, GitHub treats it as a project site and its correct URL is `https://bcinku.github.io/bcin.github.io/`. The Vite configuration detects either form and uses the correct asset path.

This is entirely static: no database, API, backend host, or environment variables are required.

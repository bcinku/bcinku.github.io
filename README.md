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

The production URL is [https://bcinku.github.io/](https://bcinku.github.io/). The repository must be owned by the `bcinku` organization and named `bcinku.github.io` — that is, `github.com/bcinku/bcinku.github.io`.

If the repository has another name, GitHub treats it as a project site and adds that repository name to the URL. The Vite configuration detects either form and uses the correct asset path.

This is entirely static: no database, API, backend host, or environment variables are required.

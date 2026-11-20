# BCIKU web application

## Local development

```bash
npm install
cp backend/.env.example backend/.env
# Create the database and tables, then add an admin as noted in backend/db/schema.sql
mysql -u root -p < backend/db/schema.sql
npm run dev:api       # API: http://localhost:4000
npm run dev           # site: http://localhost:5173
```

Set `VITE_API_URL=http://localhost:4000/api` if the frontend and API do not use their default local ports.

```bash
npm run build
npm test
```

## Production and GitHub Pages

1. Deploy `backend/` to a Node-capable host with a managed MySQL database. Set the variables in `backend/.env.example`, including a long `JWT_SECRET` and `FRONTEND_URL` equal to the published Pages URL.
2. In the GitHub repository, enable **Settings → Pages → GitHub Actions**.
3. Add a repository variable named `VITE_API_URL`, for example `https://api.example.edu.np/api`.
4. Push to `main`. The workflow publishes the static frontend at `https://<account>.github.io/bcinku/`, including the login at `/bcinku/admin-panel/`. If the repository is named `<account>.github.io`, GitHub publishes it at the shorter `https://<account>.github.io/` address instead. A custom domain may be configured in GitHub Pages settings.

GitHub Pages cannot run Node.js or MySQL. The public site is deployed there; the CMS API must remain on the separate Node hosting service.

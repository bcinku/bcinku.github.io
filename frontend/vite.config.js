import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

// A root Pages site requires both parts to match: bcin/bcin.github.io.
// A repository named bcin.github.io under another account is still a project
// site and must retain its /bcinku.github.io/ path.
const [owner = "bcinku", repository = "bcinku.github.io"] =
  process.env.GITHUB_REPOSITORY?.split("/") || [];
const isRootPagesSite = repository === `${owner}.github.io`;
const pagesBase = isRootPagesSite ? "/" : `/${repository}/`;

export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS ? pagesBase : "/",
  build: {
    rollupOptions: {
      input: {
        home: resolve(import.meta.dirname, "index.html"),
        lowCostEeg: resolve(
          import.meta.dirname,
          "articles/low-cost-eeg-motor-intention/index.html",
        ),
        labLaunch: resolve(
          import.meta.dirname,
          "articles/bci-neurotechnology-lab-launch/index.html",
        ),
        mou: resolve(
          import.meta.dirname,
          "articles/neurotechnology-research-mou/index.html",
        ),
      },
    },
  },
});

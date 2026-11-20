import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

// A root GitHub Pages repository is named bcinku.github.io, so its assets
// and static article links must be emitted from `/`, not `/bcinku/`.
const repository =
  process.env.GITHUB_REPOSITORY?.split("/")[1] || "bcin.github.io";
const pagesBase = repository.endsWith(".github.io") ? "/" : `/${repository}/`;

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

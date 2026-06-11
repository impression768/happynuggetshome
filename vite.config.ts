import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const root = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(root, "index.html"),
        nuggets: resolve(root, "nuggets/index.html"),
        smilefit: resolve(root, "smilefit/index.html"),
        privacy: resolve(root, "privacy/index.html"),
      },
    },
  },
});

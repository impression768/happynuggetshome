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
        geniehr: resolve(root, "projects/geniehr/index.html"),
        insightGenie: resolve(root, "projects/insight-genie/index.html"),
        aded: resolve(root, "projects/aded/index.html"),
        aiMatchingPlatform: resolve(root, "projects/ai-matching-platform/index.html"),
        voiceInsight: resolve(root, "projects/voice-insight/index.html"),
        wellbeingPlatform: resolve(root, "projects/wellbeing-platform/index.html"),
        dataCollection: resolve(root, "projects/data-collection/index.html"),
        scientificResearchPlatform: resolve(root, "projects/scientific-research-platform/index.html"),
        ptbn: resolve(root, "projects/ptbn/index.html"),
        personalizedBook: resolve(root, "projects/personalized-book/index.html"),
        projectSmilefit: resolve(root, "projects/smilefit/index.html"),
        projectNuggets: resolve(root, "projects/nuggets/index.html"),
      },
    },
  },
});

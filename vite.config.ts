import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const librarySrc = path.resolve(__dirname, "src");
const demoRoot = path.resolve(__dirname, "dev");

// https://vite.dev/config/
export default defineConfig({
  root: "dev",
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Library source — HMR without rebuild
      "@thomas-forte/styles/theme.css": path.resolve(librarySrc, "theme.css"),
      "@thomas-forte/styles": path.resolve(librarySrc, "index.ts"),
    },
    dedupe: ["react", "react-dom"],
  },
  server: {
    fs: {
      allow: [librarySrc, demoRoot],
    },
  },
});

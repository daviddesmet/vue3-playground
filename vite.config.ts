import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import tsconfigPaths from "vite-tsconfig-paths"; // TODO: Doesn't work, wait for a new version
import { resolve } from "path";
import pkg from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue() /*, tsconfigPaths()*/],
  resolve: {
    alias: {
      // https://github.com/vitejs/vite/issues/88
      // "@/": new URL("./src/", import.meta.url).pathname
      "@": resolve(__dirname, "src")
    }
  },
  define: {
    _APP_VERSION: JSON.stringify(pkg.version)
  }
});

import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import eslintPlugin from "@nabla/vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslintPlugin()],
  server: {
    proxy: {
      "/api1": {
        target: "http://192.168.177.137:8000/glimmer-bank/platform/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api1/, ""),
      },
      "/api2": {
        target: "http://192.168.177.137:8000/glimmer-bank/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api2/, ""),
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      pages: path.resolve(__dirname, "src/pages"),
      components: path.resolve(__dirname, "src/components"),
      store: path.resolve(__dirname, "src/store"),
    },
  },
});

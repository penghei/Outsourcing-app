import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import eslintPlugin from "@nabla/vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslintPlugin()],
  server: {
    proxy: {
      // "/api": {
      //   target: "https://www.fastmock.site/mock/3ffed8b4724efef894113d023582584d/api",
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api/, ""),
      // },
      "/api2": {
        target: "http://8.130.17.61:8000/glimmer-bank/platform/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api2/, ""),
      },
      "/api3": {
        target: "http://8.130.17.61:8000/glimmer-bank/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api3/, ""),
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      pages: path.resolve(__dirname, "src/pages"),
      components: path.resolve(__dirname, "src/components"),
      styles: path.resolve(__dirname, "src/styles"),
      store:path.resolve(__dirname, "src/store"),
    },
  },
});

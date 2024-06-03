import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@public": path.resolve(__dirname, "./public"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@constants": path.resolve(__dirname, "./src/constants"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@redux": path.resolve(__dirname, "./src/redux"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@utils": path.resolve(__dirname, "./src/utils"),
    },
  },
});

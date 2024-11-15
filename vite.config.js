import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    host: "::",
    port: 2025,
  },
  plugins: [react()],
});

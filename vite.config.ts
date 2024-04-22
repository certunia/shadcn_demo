import { defineConfig } from "vite"
import path from "path"
import react from "@vitejs/plugin-react"
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'

const port = import.meta?.env?.PORT || 7906;

export default defineConfig({
  plugins: [
    react(),
    TanStackRouterVite(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  preview: {
    port,
  },
})

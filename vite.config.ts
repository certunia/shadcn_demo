import { defineConfig, loadEnv } from "vite"
import path from "path"
import react from "@vitejs/plugin-react"
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'

export default ({ mode }: { mode: string }) => {
  // preload env variables in process.env
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  const envPort = process.env.VITE_PORT
  const port = envPort !== undefined ? parseInt(envPort) : 7906;

  return defineConfig({
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
      host: true,
    },
  });
}

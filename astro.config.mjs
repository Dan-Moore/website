import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

const { PORT } = loadEnv(
  process.env.NODE_ENV || "development",
  process.cwd(),
  "",
);

export default defineConfig({
  server: {
    port: PORT ? parseInt(PORT) : 5173, // Default port for vite.
  },
});

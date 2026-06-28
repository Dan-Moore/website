import { defineConfig, fontProviders } from "astro/config";
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
  fonts: [
    // Font: Atkinson
    {
      provider: fontProviders.local(),
      name: "Atkinson",
      cssVariable: "--font-atkinson",
      fallbacks: ["sans-serif"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/Atkinson/atkinson-regular.woff"],
            weight: 400,
            style: "normal",
            display: "swap",
          },
          {
            src: ["./src/assets/fonts/Atkinson/atkinson-bold.woff"],
            weight: 700,
            style: "normal",
            display: "swap",
          },
        ],
      },
    },
    // Font: Literata
    {
      provider: fontProviders.local(),
      name: "Literata",
      cssVariable: "--font-literata",
      options: {
        variants: [
          {
            src: [
              "./src/assets/fonts/Literata/literata-cyrillic-500-normal.woff2",
            ],
            weight: "normal",
            style: "normal",
          },
          {
            src: [
              "./src/assets/fonts/Literata/literata-cyrillic-500-italic.woff2",
            ],
            weight: "normal",
            style: "italic",
          },
        ],
      },
    },
    // Font: Space Grotesk
    {
      provider: fontProviders.local(),
      name: "Space Grotesk",
      cssVariable: "--font-space-grotesk",
      options: {
        variants: [
          {
            src: [
              "./src/assets/fonts/Space Grotesk/space-grotesk-latin-500-normal.woff2",
            ],
            weight: "normal",
            style: "normal",
          },
        ],
      },
    },
    // Font: Atkinson
    // Font: Inter
    // Font: IBM Plex-Mono
    {
      provider: fontProviders.local(),
      name: "IBM Plex-Mono",
      cssVariable: "--font-ibm-plex-mono",
      options: {
        variants: [
          {
            src: [
              "./src/assets/fonts/IBM Plex-Mono/ibm-plex-mono-cyrillic-500-normal.woff2",
            ],
            weight: "normal",
            style: "normal",
          },
          {
            src: [
              "./src/assets/fonts/IBM Plex-Mono/ibm-plex-mono-cyrillic-ext-500-italic.woff2",
            ],
            weight: "normal",
            style: "italic",
          },
        ],
      },
    },
    // Font: Geist Mono
  ],
});

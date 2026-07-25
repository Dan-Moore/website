import { defineConfig, fontProviders } from "astro/config";
import { loadEnv } from "vite";
import tailwindcss from "@tailwindcss/vite";

import starlight from "@astrojs/starlight";

const { PORT } = loadEnv(
  process.env.NODE_ENV || "development",
  process.cwd(),
  "",
);

export default defineConfig({
  output: "static",

  server: {
    port: PORT ? parseInt(PORT) : 5173, // Default port for vite.
  },

  redirects: {
    "/posts": "/posts/1", // Sent to 1st pagination page.
  },

  vite: {
    plugins: [tailwindcss()],
  },

  markdown: {
    shikiConfig: {
      syntaxHighlight: "prism",
    },
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
    // Font: Inter
    {
      provider: fontProviders.local(),
      name: "Inter",
      cssVariable: "--font-inter",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/Inter/inter-cyrillic-500-normal.woff2"],
            weight: "normal",
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/Inter/inter-cyrillic-500-italic.woff2"],
            weight: "normal",
            style: "italic",
          },
        ],
      },
    },
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
    {
      provider: fontProviders.local(),
      name: "Geist Mono",
      cssVariable: "--font-geist-mono",
      options: {
        variants: [
          {
            src: [
              "./src/assets/fonts/Geist Mono/geist-mono-cyrillic-500-normal.woff2",
            ],
            weight: "normal",
            style: "normal",
          },
          {
            src: [
              "./src/assets/fonts/Geist Mono/geist-mono-cyrillic-500-italic.woff2",
            ],
            weight: "normal",
            style: "italic",
          },
        ],
      },
    },
    //Iosevka
    {
      provider: fontProviders.local(),
      name: "Iosevka",
      cssVariable: "--font-iosevka",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/Iosevka/iosevka-latin-500-normal.woff2"],
            weight: "normal",
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/Iosevka/iosevka-latin-500-italic.woff2"],
            weight: "normal",
            style: "italic",
          },
        ],
      },
    },
    // Font: Roboto
    {
      provider: fontProviders.local(),
      name: "Roboto",
      cssVariable: "--font-roboto",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/Roboto/roboto-cyrillic-500-normal.woff2"],
            weight: "normal",
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/Roboto/roboto-cyrillic-500-italic.woff2"],
            weight: "normal",
            style: "italic",
          },
        ],
      },
    },
  ],

  integrations: [
    starlight({
      title: "My Docs",
      // Disable Starlight's 404 route so it doesn't conflict with your main site's 404.astro [1.2.2]
      disable404Route: true,
      // Tell the sidebar to automatically generate links specifically from your nested /docs/ directory
    }),
  ],
});

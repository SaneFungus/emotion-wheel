import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  // WAZNE: musi sie zgadzac z nazwa repozytorium na GitHubie.
  // U Ciebie repo nazywa sie "emotion-wheel" -> zostaw tak jak jest.
  // Jesli kiedys zmienisz nazwe repo na GitHubie, zmien to tez tutaj.
  base: '/emotion-wheel/',
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'apple-touch-icon.png'],
      manifest: {
        name: 'Kolo Emocji - Aparat Aktorski',
        short_name: 'Kolo Emocji',
        description: 'Interaktywne narzedzie dydaktyczne oparte na teorii emocji Plutchika, dla studentow Wydzialu Aktorskiego.',
        theme_color: '#020617',
        background_color: '#020617',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/emotion-wheel/',
        scope: '/emotion-wheel/',
        icons: [
          {
            src: 'pwa-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'maskable-icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
      },
    }),
  ],
})

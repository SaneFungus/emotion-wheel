import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // WAZNE: musi sie zgadzac z nazwa repozytorium na GitHubie.
  // Jesli repo nazywa sie np. "kolo-emocji", wpisz tu "/kolo-emocji/".
  base: '/emotion-wheel/',
  plugins: [react(), tailwindcss()],
})

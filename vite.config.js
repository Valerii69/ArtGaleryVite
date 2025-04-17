import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr"

// https://vite.dev/config/
export default defineConfig({

  build: {
    outDir: 'dist'
  },
  // base:"/ArtGaleryVite/",
    base:"/",
  plugins: [react(), svgr()],
  server: {
    fs: {
      strict: false
    }
  }
})

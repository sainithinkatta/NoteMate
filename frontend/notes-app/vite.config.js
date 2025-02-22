import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    proxy: {
      '/api': {
        target: 'https://note-mate-two.vercel.app',
        changeOrigin: true,
        secure: false
      }
    }
  }
})

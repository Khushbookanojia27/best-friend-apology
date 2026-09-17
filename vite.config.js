import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  base: '/best-friend-apology/',

  server: {
    port: 5173,
    open: false
  }
})
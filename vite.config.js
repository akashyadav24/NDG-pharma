import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Served from the apex custom domain (ndgpharma.in) root.
  base: '/',
})
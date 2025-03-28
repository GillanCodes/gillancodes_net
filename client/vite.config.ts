import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        "target" : "http://localhost:5000",
        "changeOrigin": false,
        "secure": false
      },
      "/cdn": {
        "target" : "http://localhost:5000",
        "changeOrigin": false,
        "secure": false
      },
      "/assets": {
        "target" : "http://localhost:5000",
        "changeOrigin": false,
        "secure": false
      },
    }
  }
})

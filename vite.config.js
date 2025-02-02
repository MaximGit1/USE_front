import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'fs'

export default defineConfig({
    plugins: [vue()],
    server: {
      host: '127.0.0.1',
      port: 5173,
      https: {
        key: fs.readFileSync('key.pem'),
        cert: fs.readFileSync('cert.pem'),
      },
    }
  })

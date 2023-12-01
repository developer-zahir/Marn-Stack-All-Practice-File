import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/

// vite.config.js file 
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  }
})

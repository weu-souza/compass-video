import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import dotevn from 'dotenv'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define:{
    VITE_KEY:JSON.stringify(process.env.VITE_KEY)
  }
})

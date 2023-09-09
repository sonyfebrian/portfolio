import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  plugins: [react(), VitePWA({ registerType: "autoUpdate" })],
})

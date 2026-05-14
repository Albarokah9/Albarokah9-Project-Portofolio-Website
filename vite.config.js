import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

/**
 * Konfigurasi Vite untuk Project Portofolio.
 * File ini mengatur base path, plugin React, dan alias untuk mempermudah impor komponen.
 * 
 * @module vite.config
 */

export default defineConfig({
  // Base path disesuaikan dengan nama repository GitHub untuk deployment yang stabil
  base: "/Albarokah9-Project-Portofolio-Website/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})

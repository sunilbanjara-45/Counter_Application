import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss(),],
  // base: '/Counter_Application/', //for github pages
  base: '/',  // for netlify
})

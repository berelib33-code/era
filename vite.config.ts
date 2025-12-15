import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Bu sətir saytın həm cPanel, həm də Netlify-da problemsiz işləməsini təmin edir
})
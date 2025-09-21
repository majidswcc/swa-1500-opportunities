import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vercel يستضيف على الجذر "/", لذا لا نستخدم base باسم المستودع هنا
export default defineConfig({
  plugins: [react()],
  base: '/',
})

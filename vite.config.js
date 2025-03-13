import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Book_My_Show_Clone/', // ✅ Ensure trailing slash!
  build: {
    outDir: 'dist'
  }
});

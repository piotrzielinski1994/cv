import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/cv/' : '/',
  plugins: [svelte()],
  resolve: {
    alias: [
      { find: '#data', replacement: fileURLToPath(new URL('./data', import.meta.url)) },
      { find: /^#\//, replacement: fileURLToPath(new URL('./src/', import.meta.url)) },
    ],
  },
  server: {
    port: 8000,
  },
}));

import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [svelte()],
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    port: 8000,
  },
});

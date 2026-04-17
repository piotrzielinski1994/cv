import { chromium } from 'playwright';
import { createServer } from 'vite';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const server = await createServer({
  root,
  server: { port: 8001 },
});

await server.listen();

const browser = await chromium.launch();
const page = await browser.newPage();

await page.goto('http://localhost:8001', { waitUntil: 'networkidle' });
await page.pdf({
  path: resolve(root, 'dist', 'cv.pdf'),
  format: 'A4',
  printBackground: true,
});

console.log('PDF created at dist/cv.pdf');

await browser.close();
await server.close();

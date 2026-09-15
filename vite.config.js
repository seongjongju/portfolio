import { defineConfig, normalizePath } from 'vite'; 
import { viteStaticCopy } from 'vite-plugin-static-copy'; 
import react from '@vitejs/plugin-react'
import path from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url); 
const pdfjsDistPath = path.dirname(require.resolve('pdfjs-dist/package.json'));
const cMapsDir = normalizePath(path.join(pdfjsDistPath, 'cmaps'));

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: cMapsDir,
          dest: '',
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
    },
  },
})

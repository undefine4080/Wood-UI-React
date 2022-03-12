import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig( {
  plugins: [ react() ],
  base: "./",
  resolve: {
    alias: {
      '@': path.resolve( 'src' ),
      '@base': path.resolve( 'src/base' )
    }
  },
  build: {
    outDir: 'build'
  }
} );

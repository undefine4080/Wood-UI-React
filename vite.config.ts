import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig( {
  plugins: [ react() ],
  base: "./",
  resolve: {
    alias: {
      '@': resolve( __dirname, 'src/' ),
      '@base': resolve( __dirname, 'src/base/' ),
      '@style': resolve( __dirname, 'src/base/styles/' ),
      '@component': resolve( __dirname, 'src/components/' ),
      '@intro': resolve( __dirname, 'src/introFragments' ),
      '@util': resolve( __dirname, 'src/utils.ts' ),
    }
  }
} );

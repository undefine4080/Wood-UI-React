import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig( {
  plugins: [ react() ],
  resolve: {
    alias: {
      '@': path.resolve( 'src' ),
      '@base': path.resolve( 'src/base' )
    }
  }
} );

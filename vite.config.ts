import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig( {
  plugins: [ react() ],
  resolve: {
    alias: {
      '@': path.resolve( 'src' ),
      '@base': path.resolve( 'src/base' )
    }
  },
  build: {
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: [ 'react' ],
      output: {
        dir: 'docs'
      }
    }
  }
} );

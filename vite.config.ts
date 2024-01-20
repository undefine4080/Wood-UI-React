/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: './',
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src/'),
            '@common': resolve(__dirname, 'src/common/'),
            '@style': resolve(__dirname, 'src/styles/'),
            '@component': resolve(__dirname, 'src/components/'),
            '@doc': resolve(__dirname, 'src/doc/'),
            '@icon': resolve(__dirname, 'src/icon/'),
        },
    },
    test: {
        globals: true,
        environment: 'jsdom',
    },
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.js'),
            name: 'wood-ui-react',
            fileName: (format) => `wood-ui.${format}.js`,
        },
        rollupOptions: {
            // 确保外部化处理那些你不想打包进库的依赖
            external: ['react', 'react/jsx-runtime'],
            output: {
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    react: 'React',
                },
            },
        },
        minify: 'esbuild',
        emptyOutDir: true,
        outDir: 'build',
    },
    css: {
        preprocessorOptions: {
            less: {
                additionalData: `@import "@/styles/main.less";`,
            },
        },
    },
    server: {
        port: 4080,
        open: true,
    },
});

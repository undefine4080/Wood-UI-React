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

/// <reference types="vitest" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    server: {
        watch: {
            usePolling: true
        },
        host: true
    },
    preview: {
        port: 5173
    },
    envPrefix: 'REACT_',
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: 'src/__tests__/vitest/index.ts'
    }
});

import path from 'path';

import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';

const generateScopedName = '[local]__[hash:base64:5]';

export default defineConfig({
  base: '/',
  plugins: [react()],
  css: {
    modules: {
      generateScopedName,
      localsConvention: 'camelCaseOnly'
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      app: path.resolve(__dirname, './src/app'),
      entities: path.resolve(__dirname, './src/entities'),
      features: path.resolve(__dirname, './src/features'),
      pages: path.resolve(__dirname, './src/pages'),
      shared: path.resolve(__dirname, './src/shared'),
      widgets: path.resolve(__dirname, './src/widgets')
    }
  }
});

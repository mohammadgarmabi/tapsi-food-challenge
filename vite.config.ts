import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },

  build: {
    sourcemap: false,
    // minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log'],
        dead_code: true,
        reduce_vars: true,
      },
      mangle: true,
      output: {
        comments: false,
      },
    },
    assetsInlineLimit: 0,
    // cssMinify: 'esbuild',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 200,
    modulePreload: true,
    polyfillModulePreload: true,
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          zustand: ['zustand'],
          tanstackQuery: ['@tanstack/react-query'],
          'simplebar-react': ['simplebar-react'],
          'react-hook-form-resolvers': ['@hookform/resolvers'],
          '@emotion': ['@emotion/cache', '@emotion/react', '@emotion/styled'],
          'react-hook-form': ['react-hook-form'],
          axios: ['axios'],
          iconsax: ['iconsax-react'],
          notistack: ['notistack'],
          tozod: ['tozod'],
          zod: ['zod'],
          '@mui': ['@mui/material'],
        },
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
      treeshake: {
        moduleSideEffects: true,
        unknownGlobalSideEffects: true,
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 8080,
  },
  preview: {
    port: 8080,
  },
});

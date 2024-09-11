import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'
import removeConsole from 'vite-plugin-remove-console'

import { plugin as mdPlugin, Mode } from 'vite-plugin-markdown'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    mdPlugin({
      mode: [Mode.VUE],
    }),
    vueDevTools(),
    VitePWA({
      registerType: 'prompt',
      injectRegister: 'auto',

      includeAssets: ['*.svg'],

      pwaAssets: {
        disabled: false,
        config: true,
      },

      manifest: {
        name: 'Gestion Titres',
        short_name: 'Gestion Titres',
        description: 'Gestion efficace de vos portefeuilles de titres.',
        theme_color: '#ffffff',
        lang: 'fr',
      },

      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico,jpg}'],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
      },

      devOptions: {
        enabled: false,
        navigateFallback: 'index.html',
        suppressWarnings: true,
        type: 'module',
      },
    }),
    removeConsole(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  define: {
    BUILD_DATE: Date.now(),
    VERSION: "'1.2.1'",
    FAKE_BACKEND: true,
  },
})

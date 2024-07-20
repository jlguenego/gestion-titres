import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

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
      injectRegister: false,

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
        globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
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
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})

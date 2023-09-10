import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      workbox: {
        clientsClaim: true,
        skipWaiting: true
      },
      injectRegister: 'auto',
      manifest: {
        name: 'Vue Vite PWA Template',
        short_name: 'PWA Template',
        description: 'Vue Vite PWA Template',
        theme_color: '#ffffff',
        icons: [
          {"src":"./assets/icons/android-chrome-192x192.png","sizes":"192x192","type":"image/png"},
          {"src":"./assets/icons/android-chrome-512x512.png","sizes":"512x512","type":"image/png"},
          {"src":"./assets/icons/android-chrome-maskable-192x192.png","sizes":"192x192","type":"image/png","purpose":"maskable"},
          {"src":"./assets/icons/android-chrome-maskable-512x512.png","sizes":"512x512","type":"image/png","purpose":"maskable"}
        ]
      }
    })
  ],
})

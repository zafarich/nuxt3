// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    strict: false,
  },
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  modules: [
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-quasar-ui',
  ],
  quasar: {
    extras: {
      font: 'roboto-font',
    },
    components: {
      defaults: {
        QBtn: {
          color: 'primary',
          textColor: '#333333',
          ripple: false,
          unelevated: true,
          noCaps: true,
          size: '16px',
        },
        QSelect: {
          outlined: true,
        },
        QInput: {
          outlined: true,
        },
      },
    },
  },
  css: ['@/assets/css/main.scss', '@/assets/css/quasar.custom.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/css/quasar.variables.scss" as *;',
        },
      },
    },
  },
});

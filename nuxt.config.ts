// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindTypography from "@tailwindcss/typography";

export default defineNuxtConfig({
  // devtools: { enabled: true },
  ssr: true,
  modules: ["nuxt-microcms-module", "@nuxtjs/tailwindcss"],
  microCMS: {
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
  },
  tailwindcss: {
    config: {
      content: [],
      plugins: [tailwindTypography],
    },
  },
  // https://developer.mamezou-tech.com/nuxt/nuxt3-rendering-mode/
  // https://github.com/nuxt/nuxt/issues/18376
  // https://github.com/nuxt-contrib/vue-bundle-renderer/blob/main/src/types.ts
  hooks: {
    // 'build:manifest'(manifest) {
    //   for (const key in manifest) {
    //     const file = manifest[key];

    //     console.log("---")
    //     console.log(key)
    //     if (file.name) {
    //       console.log(file.name)
    //     }
    //     if (file.src) {
    //       console.log(file.src)
    //     }
    //     console.log(file.file)

    //     if (file.prefetch){
    //       console.log(file.prefetch)
    //     }

    //     if (file.preload){
    //       console.log(file.preload)
    //     }
    //   }
    //   console.log("---")
    // },
  },
});



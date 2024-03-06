export default defineNuxtConfig({
  modules: ["@nuxtjs/google-fonts", "@nuxt/ui", "@nuxt/content", "nuxt-icon", '@nuxtjs/device'],
  content: {
    highlight: {
      theme: "nord",
      preload: [
        "js",
        "css",
        "html",
        "md",
        "ts",
        "tsx",
        "vue",
        "python",
        "ruby",
        "java",
      ],
    },
  },
  googleFonts: {
    useStylesheet: true,
    preconnect: true,
    prefetch: true,
    preload: true,
      families: {
          'Open Sans': [200, 400, 900],
      },
  },
});

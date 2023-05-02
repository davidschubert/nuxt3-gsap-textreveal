// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ["~/assets/stylesheets/global.css"],
    app: {
        head: {
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1",
        },
    },
    build: {
        transpile: ["gsap"],
    },
    runtimeConfig: {
        public: {
            greensockclubToken: process.env.GREENSOCKCLUB_TOKEN,
        },
    },
});

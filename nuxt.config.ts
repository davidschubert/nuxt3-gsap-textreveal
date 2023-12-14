export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            greensockClubToken: process.env.GREENSOCK_CLUB_TOKEN,
        },
    },
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
});

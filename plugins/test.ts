export default defineNuxtPlugin((nuxtApp) => {
    const loading = ref(false);

    nuxtApp.hook("app:created", () => {
        console.log("hello from plugin");
        loading.value = false;
    });

    nuxtApp.hook("page:start", () => {
        console.log("page:start");
        loading.value = true;
    });

    nuxtApp.hook("page:finish", () => {
        console.log("page:finish");
        loading.value = false;
    });
});

<script setup>
/* GSAP TEXT REVEAL */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

onNuxtReady(async () => {
    // create the scrollSmoother before your scrollTriggers
    const smoother = ScrollSmoother.create({
        smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
        effects: false, // looks for data-speed and data-lag attributes on elements
        smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
    });
});

/* LOADER */
const nuxtApp = useNuxtApp();
const loading = ref(false);

nuxtApp.hook("page:start", () => {
    console.log("page:start");
    loading.value = true;
});

nuxtApp.hook("page:finish", () => {
    console.log("page:finish");
    loading.value = false;
    window.scrollTo(0, 0);
});
</script>

<template>
    <div>
        <div v-if="loading" class="loader">Loader</div>
        <div id="smooth-wrapper">
            <GsapCustomScrollbar />
            <div id="smooth-content">
                <h1>GSAP Text Reveal Component</h1>
                <p>
                    Text Revealing using GSAP ScrollTrigger and SplitText. With
                    SplitText we split a paragraph into words and characters.
                    Then we animate each character with ScrollTrigger.
                </p>
                <p>
                    I also added GSAP ScrollSmoother. With GSAP ScrollSmoother
                    we can create a smoother scrolling feeling.
                </p>
                <GsapRevealText />
                <GsapVideoScroller />
                <section class="fullbox white"></section>
                <section class="fullbox black"></section>
            </div>
        </div>
    </div>
</template>

<style>
.fullbox {
    width: 100%;
    height: 100vh;
}
.white {
    background-color: #fff;
}
.black {
    background-color: #000;
}

.loader {
    position: fixed;
    left: 0px;
    top: 0px;
    height: 0.125rem;
    width: 100%;
    z-index: 50;
    background-color: darkslategray;
}
</style>

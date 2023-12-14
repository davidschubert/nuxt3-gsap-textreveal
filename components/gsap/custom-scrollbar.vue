<script setup>
/* GSAP Libs */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

onNuxtReady(async () => {
    const scrollbarthumb = document.querySelector(".thumb");

    gsap.to(scrollbarthumb, {
        y: 50,
        ease: "none",
        scrollTrigger: {
            start: 0,
            end: "max",
            scrub: true,
        },
    });
});
</script>

<template>
    <div>
        <div class="scrollbar">
            <div class="thumb"></div>
        </div>
    </div>
</template>

<style>
body::-webkit-scrollbar {
    display: none;
}

.scrollbar {
    z-index: 2;
    position: absolute;
    width: 50px;
    height: 300px;
    top: 0;
    bottom: 0;
    margin: auto;

    right: 8px;
    overflow: hidden;
    width: 4px;
    height: 62px;
    border-radius: 4px;
    pointer-events: none;
    background-color: rgba(255, 255, 255, 0.2);
    mix-blend-mode: difference;
}

.thumb {
    width: 4px;
    height: 12px;
    border-radius: 4px;
    background-color: #fff;
}
</style>

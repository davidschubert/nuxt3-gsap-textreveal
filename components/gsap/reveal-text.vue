<script setup>
/* GSAP Libs */
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);

onNuxtReady(async () => {
    /* Creating a new GSAP SplitText and splitting the sentence into words */
    let split = new SplitText(".reveal-text", { type: "words, chars" });

    /* Animating each character with ScrollTrigger */
    gsap.to(split.chars, {
        scrollTrigger: {
            trigger: ".reveal-text",
            scrub: true,
            start: "top center",
            end: "bottom 80%",
            markers: false,
        },
        color: "rgb(247, 247, 247)",
        duration: 3,
        stagger: 1,
        ease: "expo.inOut",
    });
});
</script>

<template>
    <div>
        <div class="spacing-top"></div>
        <div class="reveal-wrapper">
            <div class="reveal-text">
                Et des expériences digitales ultra-fluides, pour ceux qui aiment
                avoir un coup d'avance.
            </div>
        </div>
        <div class="spacing-bottom"></div>
    </div>
</template>

<style scoped>
.spacing-top {
    height: 50vh;
}
.spacing-bottom {
    height: 100vh;
}

.reveal-wrapper {
    padding: 10% 10% 10% 30%;
    background-color: #002921;
}

.reveal-text {
    font-size: clamp(3rem, 8vw, 15rem);
    line-height: clamp(3rem, 8vw, 15rem);
    font-weight: 400;
    color: rgb(247, 247, 247, 0.05);
}

@media screen and (max-width: 500px) {
    .reveal-wrapper {
        padding-left: 20px;
    }
}
</style>

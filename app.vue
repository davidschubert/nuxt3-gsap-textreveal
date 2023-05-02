<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

onNuxtReady(async () => {
    // create the scrollSmoother before your scrollTriggers
    ScrollSmoother.create({
        smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
        effects: false, // looks for data-speed and data-lag attributes on elements
        smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
    });
});
</script>

<template>
    <div>
        <div id="smooth-wrapper">
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
            </div>
        </div>
    </div>
</template>

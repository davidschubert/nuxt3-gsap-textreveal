<script setup>
/* GSAP Libs */
import { gsap } from "gsap";

onNuxtReady(async () => {
    // gsap.to()... infinity and beyond!
    // For more check out greensock.com

    const video = document.getElementById("v1");
    let src = video.currentSrc || video.src;

    /* Make sure the video is 'activated' on iOS */
    function once(el, event, fn, opts) {
        var onceFn = function (e) {
            el.removeEventListener(event, onceFn);
            fn.apply(this, arguments);
        };
        el.addEventListener(event, onceFn, opts);
        return onceFn;
    }

    once(document.documentElement, "touchstart", function (e) {
        video.play();
        video.pause();
    });

    let tl = gsap.timeline({
        defaults: { duration: 1, ease: "none" },
        scrollTrigger: {
            start: "top top",
            end: "+=8000",
            trigger: "#pinnedVideo",
            scrub: -2,
            pin: ".videoBox",
            markers: false,
        },
    });

    // ScrollTrigger on last section
    gsap.to("#container", {
        ease: "slow",
        scrollTrigger: {
            trigger: "#container",
            start: "top center",
            end: "bottom bottom",
            scrub: true,
            pinnedContainer: "#container", // <-- neccessary here then
        },
    });

    once(video, "loadedmetadata", function (e) {
        console.log("video loadedmetadata");

        tl.fromTo(
            video,
            {
                currentTime: 0,
            },
            {
                currentTime: video.duration || 1,
            }
        );
    });

    /* When first coded, the Blobbing was important to ensure the browser wasn't dropping previously played segments, but it doesn't seem to be a problem now. Possibly based on memory availability? */
    setTimeout(function () {
        if (window["fetch"]) {
            fetch(src)
                .then(function (response) {
                    const blob = response.blob();
                    // console.log('blob', blob);
                    return blob;
                })
                .then((response) => {
                    console.log(response.type);

                    if (response.type.includes("video")) {
                        const blobURL = URL.createObjectURL(response);
                        const t = video.currentTime;

                        once(
                            document.documentElement,
                            "touchstart",
                            function (e) {
                                video.play();
                                video.pause();
                            }
                        );

                        video.setAttribute("src", blobURL);
                        video.currentTime = t + 0.01;
                    }
                });
        }
    }, 1000);
});
</script>

<template>
    <div>
        <div class="videoBox">
            <div id="pinnedVideo" class="fullscreen-video-wrap">
                <video
                    id="v1"
                    tabindex="0"
                    class="video-js"
                    mute
                    pause
                    preload="auto"
                >
                    <source
                        src="https://cdn.shopify.com/videos/c/o/v/fae886f3855441b699f1f50830bc11dc.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>
        </div>

        <div id="container"></div>
    </div>
</template>

<style scoped>
#v1 {
    width: 100%;
    height: 100%;
}
.videoBackground {
    height: auto;
    position: relative;
}

.videoBackground .fullscreen-video-wrap {
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    width: 100%;
}

.videoBackground .fullscreen-video-wrap .video-js {
    position: fixed;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    transform: translate(-50%, -50%);
}

.videoBackground .fullscreen-video-wrap video {
    min-height: 100%;
    min-width: 100%;
    width: 100%;
    height: 100%;
    border: red solid 10px;
}

.videoBackground .videoBox {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    padding: 100px 20px 80px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: calc(100vh);
    position: relative;
}

.videoBackground .imageBox {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    padding: 100px 20px 80px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    min-height: calc(100vh - 165px);
    height: 100%;
}

.videoBackground .videoBoxInfo,
.videoBackground .imageBoxInfo {
    z-index: 2;
    text-align: center;
}

.videoBackground .overlay {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #000;
    z-index: 1;
}

.videoBackground .videoBoxInfoBtn,
.videoBackground .imageBoxInfoBtn {
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: inline-block;
    width: auto;
    text-decoration: none;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 2px;
    padding: 8px 15px;
    font-style: normal;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    white-space: normal;
    font-size: 14px;
    margin-top: 20px;
}

#container {
    height: 100vh;
}

@media screen and (max-width: 749px) {
    body {
        position: absolute;
    }
}
</style>

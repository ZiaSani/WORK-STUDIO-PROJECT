function loaderanime() {
    var tl = gsap.timeline();

    tl.to(".loader .bgyellow-in", {
        top: "-100%",
        delay: 0.5,
        duration: 0.6,
        ease: "expo.out"
    })

    tl.from(".loader .bgyellow-out", {
        top: "100%",
        delay: 0.7,
        duration: 0.6,
        ease: "expo.out"
    }, "anim")

    tl.to(".loader h1", {
        delay: 0.2,
        duration: 0.6,
        color: "#000"
    }, "anim")

    tl.to(".loader", {
        display: "none"
    })

    tl.to(".loader", {
        opacity: 0,
    })
}
loaderanime();

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
gsap.registerPlugin(ScrollTrigger);


let tl = gsap.timeline();

tl.to('#img1', {
    left: "-40%",
    duration: 4,
    scrollTrigger: {
        trigger: '.section2',
        start: 'top top',
        end: '75% -120%',
        scrub: 1,
        pin: true,
        pinSpacing: false
    }
},'images')


tl.to("#img2", {
    left: "-20%",
    duration: 4 ,
    scrollTrigger: {
        trigger: ".section2",
        start: "top top",
        end: 'bottom -120%',
        scrub: 1
    }
})

tl.to("#img3", {
    left: "-20%",
    duration: 4 ,
    scrollTrigger: {
        trigger: ".section2",
        start: "top top",
        end: 'bottom -120%',
        scrub: 1
    }
})

tl.to("#img4", {
    right: "-20%",
    duration: 4 ,
    scrollTrigger: {
        trigger: ".section2",
        start: "top top",
        end: 'bottom -120%',
        scrub: 1
    }
})

tl.to("#img5", {
    right: "-20%",
    duration: 4 ,
    scrollTrigger: {
        trigger: ".section2",
        start: "top top",
        end: 'bottom -120%',
        scrub: 1
    }
})


tl.to("#img6", {
    right: "-40%",
    duration: 4 ,
    scrollTrigger: {
        trigger: ".section2",
        start: "top top",
        end: 'bottom -120%',
        scrub: 1
    }
})

tl.to("#designer", {
    width: "100%",
    height: "100%",
    borderRadius: "0%",
    duration: 4 ,
    scrollTrigger: {
        trigger: ".section2",
        start: "top top",
        end: '90% -120%',
        scrub: 1
    }
})


tl.from(".text", {
    opacity: "0",
    bottom: "-5%",
    duration: 4 ,
    scrollTrigger: {
        trigger: "#designer",
        start: "40% 20%",
        end: '90% -100%',
        scrub: 1
    }
})


let tl2 = gsap.timeline();

tl2.to(".img-lf", {
    y: "50%",
    scrollTrigger: {
        trigger: ".section5",
        start: 'top top',
        end: 'bottom -250%',
        scrub: 1,
        pin: true,
        pinSpacing: false
    }
})

tl2.to(".img-rt", {
    y: "-50%",
    scrollTrigger: {
        trigger: ".section5",
        start: 'top top',
        end: 'bottom -250%',
        scrub: 1
    }
})


let tl3 = gsap.timeline();

tl3.to('.text7', {
    y: "-200%",
    scrollTrigger: {
        trigger: '.section7',
        start: 'top top',
        end: 'bottom -100%',
        scrub: 1,
        pin: true,
        pinSpacing: false
    }
})


let tl4 = gsap.timeline();

tl4.to("#img-9-1", {
    y: "-400%",
    scale: "1.5",
    scrollTrigger: {
        trigger: '.section9',
        start: "top 90%",
        end: "bottom top",
        scrub: 1
    }
})

tl4.to("#img-9-2", {
    y: "-330%",
    scale: "1.5",
    scrollTrigger: {
        trigger: '.section9',
        start: "top 90%",
        end: "bottom top",
        scrub: 1
    }
})

tl4.to("#img-9-3", {
    y: "-300%",
    scale: "1.5",
    scrollTrigger: {
        trigger: '.section9',
        start: "top 90%",
        end: "bottom top",
        scrub: 1
    }
})

tl4.to("#img-9-4", {
    y: "-170%",
    scale: "1.5",
    scrollTrigger: {
        trigger: '.section9',
        start: "top 90%",
        end: "bottom top",
        scrub: 1
    }
})


tl4.to("#img-9-5", {
    y: "-170%",
    scale: "1.5",
    scrollTrigger: {
        trigger: '.section9',
        start: "40% 90%",
        end: "bottom top",
        scrub: 1
    }
})


let tl5 = gsap.timeline();



tl5.to(".section10",{
    scrollTrigger: {
        trigger: ".section10",
        start: "top top",
        end: "bottom 30%",
        srcub: 1,
        pin: true,
        pinSpacing: true
    }
},"section10")


tl5.from("#img-10-1", {
    width: "100%",
    height: "120vh",
    borderRadius: "0%",
    scrollTrigger: {
        trigger: ".section10",
        start: "3% top",
        end: "bottom -100%",
        scrub: 1,
        pin: true
    }
})


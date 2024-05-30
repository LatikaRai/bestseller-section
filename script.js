var tl = gsap.timeline();
tl.to(".slide",{
    transform: "translateX(-350%)",
        scrollTrigger: {
            trigger: ".bestseller",
            start: "top top",
            end: "bottom bottom",
            scrub:1,
            pin: true
        },
        xPercent:-300,
        ease:Power4
    
})



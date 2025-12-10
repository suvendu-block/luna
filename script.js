// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});







gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray("#panel").forEach((section) => {
  gsap.from(section, {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: section,
      start: "top 80%",   
      end: "top 40%",
      scrub: false,
      once: true  ,
      // markers:true       
    }
  });
});

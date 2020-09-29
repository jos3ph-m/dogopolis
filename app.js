function pageTransition() {
  const tl = gsap.timeline();

  tl.to("ul.transition li", {
    duration: 0.7,
    scaleY: 1,
    transformOrigin: "bottom left",
    stagger: 0.2,
  });
  tl.to("ul.transition li", {
    duration: 0.6,
    scaleY: 0,
    transformOrigin: "bottom left",
    stagger: 0.1,
  });
}

function pictureAnimation() {}

function delay(n) {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

barba.init({
  sync: true,
  transitions: [
    {
      async leave(data) {
        const done = this.async();
        pageTransition();
        await delay(1500);
        done();
      },
      async enter(data) {
        pictureAnimation();
      },
      async once(data) {
        pictureAnimation();
      },
    },
  ],
});

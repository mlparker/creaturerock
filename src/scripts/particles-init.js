tsParticles.load("tsparticles", {
  fullScreen: {
    enable: true,
    zIndex: 0 // behind content
  },
  background: {
    color: {
      value: "transparent"
    }
  },
  particles: {
    number: {
      value: 8
    },
    shape: {
      type: "image",
      image: [
        {
          src: "images/glyphs/spiral1.svg",
          width: 32,
          height: 32
        },
        {
          src: "images/glyphs/spiral2.svg",
          width: 32,
          height: 32
        },
        {
          src: "images/glyphs/spiral3.svg",
          width: 32,
          height: 32
        }
      ]
    },
    opacity: {
      value: 0.4
    },
    size: {
      value: 24,
      random: true
    },
    move: {
      enable: true,
      speed: 0.5,
      direction: "none",
      outModes: "bounce"
    }
  },
  detectRetina: true
});


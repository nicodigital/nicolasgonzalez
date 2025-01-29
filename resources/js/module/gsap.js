import { gsap } from "gsap";

export function removeOnce(container) {
  setTimeout(() => { // Removemos la clase "once" para que saber que ya se ha cargado el ONCE
    document.querySelector('body').classList.remove('once');
  }, 5000)
}

/* Menu Intro */
export function menuIntro() {

  return gsap.to("menu a span", {
    duration: 1,
    y: 0,
    stagger: 0.1,
  });

}
/* Lang Switcher */
export function langSwitcher() {
  const tl = gsap.timeline()

  return tl.to(".lang-switcher a:nth-child(1)", {
    x: 0,
    duration: .5,
  }, "3")
    .to(".lang-switcher span", {
      width: "100%",
      duration: .5,
    }, "-=.5")
    .to(".lang-switcher a:nth-child(3)", {
      x: 0,
      duration: .5,
    }, "-=.5");

}
/* Home Intro */
export function homeIntro(container) {
  const tl = gsap.timeline()

  return tl.to('.home h1', {
    y: 0,
    duration: .75,
    delay: .75
  }, "-=.2")
    .to(".home line span", {
      y: 0,
      stagger: 0.15,
      duration: .6,
    }, "-=1")
    .to("#btnWorks", {
      y: 0,
      duration: .65,
    }, "-=.2")
    .to(".home .chars span", {
      y: 0,
      stagger: 0.05,
      duration: 0.1,
    }, "-=1")
}
/* Home Outro */
export function homeOutro(container) {
  const tl = gsap.timeline()

  return tl.to('.home h1', {
    y: "-3rem",
    duration: .75,
  })
    .to(".home line span", {
      y: "-3rem",
      stagger: -0.1,
      duration: .7,
    }, "-=.75")
    .to("#btnWorks", {
      y: "-3rem",
      duration: .75,
    }, "-=.75")
    .to(".home .chars span", {
      y: "-20rem",
      stagger: {
        each: -0.05,
        from: "end",
      },
      duration: 0.1,
    }, "-=1");
}
/* Logo Intro */
export function logoIntro() {

  const tl = gsap.timeline()

  return tl.to("body:not(.logo-active) logo .name span", {
    y: 0,
    duration: .6,
  }).to("body:not(.logo-active) logo .claim span", {
    y: 0,
    duration: .6,
    onComplete: () => {
      setTimeout(() => {
        document.querySelector('body').classList.add('logo-active')
      },1000) 
    }
  }, "-=.4");

}

/* remove LogoActive */
export function removeLogoActive() {
  document.querySelector('body').classList.remove('logo-active')
}

/* logo outro */
export function logoOutro(container) {

  const tl = gsap.timeline()
  // const logo = container.querySelector('logo .name span')
  // const claim = container.querySelector('logo .claim span')

  return tl.to("logo .name span", {
    yPercent: 110,
    duration: .6,
  }).to("logo .claim span", {
    yPercent: -110,
    duration: .6
  }, "-=.4");

}

/* Works Intro */
export function worksIntro() {
  const tl = gsap.timeline()

  return tl.to(".works .chars span", {
    y: 0,
    stagger: 0.05,
    duration: 0.1,
  })
    .to(".works line span", {
      y: 0,
      stagger: 0.1,
      duration: .5,
    }, "-=.5").to(".works card", {
      y: 0,
      stagger: 0.1,
      duration: .65,
      ease: "power4.In"
    }, "-=.5");

}

/* Works Outro */
export function worksOutro() {
  const tl = gsap.timeline()

  return tl.to(".works .chars span", {
    y: "-20rem",
    stagger: {
      each: -0.05,
      from: "end",
    },
    duration: 0.2,
  })
    .to(".works line span", {
      y: "-3rem",
      stagger: {
        each: -0.1,
        from: "end",
      },
      duration: .7,
    }, "-=.5").to(".works card", {
      yPercent: 100,
      stagger: {
        each: -0.1,
        from: "end",
      },
      duration: .65,
      ease: "power4.In"
    })
}

/* My Stack Intro */
export function myStackIntro() {
  const tl = gsap.timeline()

  return tl.to(".my-stack line span", {
    y: 0,
    stagger: 0.1,
    duration: .2,
  }, "-=.5")
}

/* My Stack Outro */
export function myStackOutro() {

  const tl = gsap.timeline()
  return tl.to(".my-stack line span", {
    y: "-3rem",
    stagger: {
      each: -0.05,
      from: "end",
    },
    duration: .2,
  })

}

/* Packs Intro */
export function packsIntro() {
  const tl = gsap.timeline()

  return tl.to(".packs line span", {
    y: 0,
    stagger: 0.1,
    duration: .4,
  }, "-=.5").to(".packs card-pack", {
    y: 0,
    stagger: 0.1,
    duration: .7,
    ease: "power4.In"
  })
}

/* Packs Outro */
export function packsOutro() {
  const tl = gsap.timeline()

  return tl.to(".packs line span", {
    y: "-3rem",
    stagger: 0.1,
    duration: .4,
  }, "-=.5").to(".packs card-pack", {
    yPercent: 100,
    stagger: {
      each: -0.05,
      from: "end",
    },
    duration: 0.6,
    ease: "power4.In"
  })
}

/* Contact Intro */
export function contactIntro() {

  const tl = gsap.timeline()

  return tl.to(".contact h1 a", {
    y: 0,
    duration: .7,
  })
  .to(".contact .tel-1 a", {
    y: 0,
    duration: .6,
  }, "-=.2")
  .to(".contact .tel-2 a", {
    y: 0,
    duration: .6,
  }, "-=.2")
  .to(".contact .chars span", {
    y: 0,
    stagger: 0.05,
    duration: 0.1,
  }, "-=.8")
}


/* Contact Outro */
export function contactOutro() {

  const tl = gsap.timeline()

  return tl.to(".contact h1 a", {
    y: "-4.5rem",
    duration: .4,
  })
  .to(".contact .tel-1 a", {
    y: "-3.5rem",
    duration: .3,
  }, "-=.2")
  .to(".contact .tel-2 a", {
     y: "-3.5rem",
    duration: .3,
  }, "-=.2")
  .to(".contact .chars span", {
    yPercent: -100,
    stagger: {
      each: -0.05,
      from: "end",
    },
    duration: 0.1,
  }, "-=.8")
}

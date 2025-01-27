import { gsap } from "gsap";

export function removeOnce(container) {
  setTimeout(() => { // Removemos la clase "once" para que saber que ya se ha cargado el ONCE
    document.querySelector('body').classList.remove('once');
  },5000)
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

  return tl.to('h1', {
    y: 0, 
    duration: .75,
    delay: .75
  }, "-=.2")
  .to("line span", {
    y: 0,
    stagger: 0.15,
    duration: .6,
  }, "-=1")
  .to("#btnWorks", {
    y: 0, 
    duration: .65,
  }, "-=.2")
  .to(".chars span", {
    y: 0,
    stagger: 0.05,
    duration: 0.1,
  }, "-=1")
}

/* Home Outro */
export function homeOutro(container) {
  const tl = gsap.timeline()

  return tl.to('h1', {
    y: "-3rem",  
    duration: .75,
  })
  .to("line span", {
    y: "-3rem", 
    stagger: -0.1,
    duration: .7,
  }, "-=.75")
  .to("#btnWorks", {
    y: "-3rem", 
    duration: .75,
  }, "-=.75")
  .to(".chars span", {
    y: "-20rem",
    stagger: {
      each: -0.05,
      from: "end",
    },
    duration: 0.1,
  }, "-=1");
}

/* Logo Intro */
export function logoIntro(){

  const tl = gsap.timeline()

  return tl.to("logo .name span", {
    y: 0,
    duration: .6,
  }).to("logo .claim span", {
    y: 0,
    duration: .6
  }, "-=.4");

}

/* logo outro */
export function logoOutro(container){

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

/* BigTitleIntro */
export function bigTitleIntro(container) {
  return gsap.to(".title.chars span", {
    y: 0,
    stagger: 0.05,
    duration: 0.2,
  }, "-=.65");
}

export function bigTitleOutro(container) {
  return gsap.to(".title.chars span", {
    y: "-20rem",
    stagger: {
      each: -0.05,
      from: "end",
    },
    duration: 0.2,
  })
}

/* Works Intro */
export function worksIntro(){
  const tl = gsap.timeline()

  return tl.to("line span", {
    y: 0,
    stagger: 0.1,
    duration: .7,
  }, "-=.5").to(".loop card", {
    y: 0,
    stagger: 0.1,
    duration: .65,
    ease: "power4.In"
  }, "-=.5");

}

/* Works Outro */
export function worksOutro() {
  const tl = gsap.timeline()

  return tl.to("line span", {
    y: "-3rem",
    stagger: {
      each: -0.1,
      from: "end",
    },
    duration: .7,
  }, "-=.5").to(".loop card", {
    yPercent: 100,
    stagger: {
      each: -0.1,
      from: "end",
    },
    duration: .65,
    ease: "power4.In"
  })
}

// export function animEnter( container ) {
//   container.classList.remove('once');
//   return gsap.from(container, { autoAlpha: 0, duration: 1, y: 20, clearProps: "all" } );
// }

// export function animLeave( container ) {
//   return gsap.to( container, { autoAlpha: 0, duration: 0.4, y: -20 } );
// }

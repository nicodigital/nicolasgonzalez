import { gsap } from "gsap";
import SplitType from 'split-type'

export function removeOnce(container) {
  setTimeout(() => { // Removemos la clase "once" para que saber que ya se ha cargado el ONCE
    document.querySelector('body').classList.remove('once');
  }, 3000)
}

export function menuIntro() {

  return gsap.to("menu a span", {
    duration: 1,
    y: 0,
    stagger: 0.1,
  }, "=0.5");

}

export function langSwitcher() {
  const tl = gsap.timeline();

  return tl.to(".lang-switcher a:nth-child(1)", {
    x: 0,
    duration: .5,
  }, "3.5")
  .to(".lang-switcher a:nth-child(3)", {
    x: 0,
    duration: .5,
  }, "-=.5");

}

export function homeIntro(container) {
  const tl = gsap.timeline();

  let txtNico = new SplitType("#txtNico");
  let txtAbout = new SplitType("#txtAbout", { types: "lines" });

  return tl.to('h1', {
    y: 0, 
    duration: .75,
    delay: 1
  })
  .to("p .line", {
    y: 0,
    stagger: 0.1,
    duration: .7,
    clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
  }, "-=1")
  .to("#btnWorks", {
    y: 0, 
    duration: .75,
  })
  .to(".char", {
    y: 0,
    stagger: 0.05,
    duration: 0.1
  }, "-=0.5");
}

// export function animEnter( container ) {
//   container.classList.remove('once');
//   return gsap.from(container, { autoAlpha: 0, duration: 1, y: 20, clearProps: "all" } );
// }

// export function animLeave( container ) {
//   return gsap.to( container, { autoAlpha: 0, duration: 0.4, y: -20 } );
// }

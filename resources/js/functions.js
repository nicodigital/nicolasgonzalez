// import startHtmx from './module/startHtmx.js'
import lenisScroll from './module/lenisScroll.js'
import menuMobile from './module/menuMobile.js'
import scrollMarkers from './module/scrollMarkers.js'
import pointer from './module/pointer.js'
// import customSwiper from './module/customSwiper.js'
// import modal from './module/modal.js'
// import accordion from './module/accordion.js'
// import cookies from './module/cookies.js'
// import filters from './module/filters.js'
// import darkModeOS from './module/darkModeOS.js'
import animations from './module/animations.js'
import contactForm from './module/contactForm.js'
import preventZoom from './module/preventZoom.js'
import alertRotateDevice from './module/alertRotateDevice.js'
// import tabs from './module/tabs.js'
// import customRellax from './module/customRellax.js';
// import getUrlParams from './module/getUrlParams.js';

// function functions (deviceData) { // Only One Param if not using Barba.js
function functions (container = document, deviceData) {
  // console.log(deviceData);
  lenisScroll()
  // startHtmx(container, animations)
  menuMobile(deviceData)
  scrollMarkers(deviceData)
  
  if (deviceData.isDesktop === true ) pointer()
  // customSwiper()
  // modal()
  // filters()
  // accordion()
  // darkModeOS(cookies)
  animations(container)
  contactForm(container)
  // tabs()
  preventZoom()
  alertRotateDevice(deviceData.isDesktop, deviceData.isBigTablet, deviceData.isMobile)
}

export default functions

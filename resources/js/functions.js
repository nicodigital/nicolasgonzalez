import lenisScroll from './module/lenisScroll.js'
import menuMobile from './module/menuMobile.js'
import scrollMarkers from './module/scrollMarkers.js'
import pointer from './module/pointer.js'
import filters from './module/filters.js'
// import modal from './module/modal.js'
// import accordion from './module/accordion.js'
// import cookies from './module/cookies.js'
// import darkModeOS from './module/darkModeOS.js'
import animations from './module/animations.js'
import preventZoom from './module/preventZoom.js'
import alertRotateDevice from './module/alertRotateDevice.js'


// function functions (deviceData) { // Only One Param if not using Barba.js
function functions (container = document, deviceData) {
  // console.log(deviceData);
  lenisScroll()
  menuMobile(container, deviceData)
  scrollMarkers(deviceData)
  
  if (deviceData.isDesktop === true ) pointer()
  filters()
  animations(container)
  preventZoom()
  alertRotateDevice(deviceData.isDesktop, deviceData.isBigTablet, deviceData.isMobile)

  window.scrollTo(0, 0)
}

export default functions

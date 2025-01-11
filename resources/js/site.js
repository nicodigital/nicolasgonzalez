import getDevice from './module/getDevice.js'
import transitions from './module/transitions.js'
// import functions from './functions.js' // Activamos functions si no usamos Barba.js

/* ///////////////////////////////////////////////////////////////////// */
/* ///////////////////////// SERVICE WORKER //////////////////////////// */
/* ///////////////////////////////////////////////////////////////////// */

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register(currDomain + '/sw.js')
//     .then(reg => console.log('Registro de SW exitoso', reg))
//     .catch(err => console.warn('Error al tratar de registrar el sw', err))
// }

/* ///////////////////////////////////////////////////////////////////// */
/* /////////////////////////// DEVICE DATA ///////////////////////////// */
/* ///////////////////////////////////////////////////////////////////// */

const deviceData = getDevice()

/* Ejecutar el getDevice si cambia el tamaño del navegador o rota el dispositivo */
window.addEventListener('resize', getDevice)
window.addEventListener('orientationchange', getDevice)

/* ///////////////////////////////////////////////////////////////////// */
/* /////////////////////////////// EXEC //////////////////////////////// */
/* ///////////////////////////////////////////////////////////////////// */

document.addEventListener('DOMContentLoaded', function () {
  // Activamos functions si no usamos Barba.js
  // functions( deviceData )

  // Activamos Barba.js
  transitions(deviceData)
})


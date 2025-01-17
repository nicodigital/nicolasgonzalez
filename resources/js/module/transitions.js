import barba from '@barba/core'
import barbaPrefetch from '@barba/prefetch'
import { removeOnce, animEnter, animLeave } from './gsap.js'
import functions from '../functions.js'

function transitions (deviceData) {
  barba.use(barbaPrefetch)

  // Variable para mantener la función de limpieza actual
  let currentCleanup = null

  barba.init({
    debug: true,
    sync: true,
    timeout: 10000,
    transitions: [
      {
        once ({ next }) {
          console.log('ONCE DEFAULT')
          currentCleanup = functions(next.container, deviceData)
          removeOnce()
        },

        leave: ({ next, current }) => {
          console.log('LEAVE DEFAULT')
          
          // Limpiar funciones anteriores
          if (currentCleanup && typeof currentCleanup === 'function') {
            currentCleanup()
          }
          
          animLeave(current.container)

          return new Promise(resolve => {
            setTimeout(() => {
              resolve()
            }, 400)
          })
        },

        enter: ({ next }) => {
          console.log('ENTER DEFAULT')
          animEnter(next.container)
          // Inicializar nuevas funciones después de que el DOM esté listo
          setTimeout(() => {
            currentCleanup = functions(next.container, deviceData)
          }, 300)
        }
      }
    ]
  })
}

export default transitions

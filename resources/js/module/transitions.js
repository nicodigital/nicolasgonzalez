import barba from '@barba/core'
import barbaPrefetch from '@barba/prefetch'
import { removeOnce, homeIntro } from './gsap.js'
import functions from '../functions.js'

function transitions(deviceData) {
  barba.use(barbaPrefetch)

  // Variable para mantener la función de limpieza actual
  let currentCleanup = null

  barba.init({
    debug: true,
    sync: true,
    timeout: 10000,
    transitions: [
      {
        name: 'home',
        to: { namespace: 'home' },
        enter() {
          console.log('ENTER HOME')
          homeIntro()
          currentCleanup = functions(next.container, deviceData)
          removeOnce()
        },
        once({ next }) {
          console.log('ONCE HOME')
          homeIntro()
          currentCleanup = functions(next.container, deviceData)
          removeOnce()
        },
        leave: ({ next, current }) => {
          console.log('LEAVE HOME')

        },
      },
      { // DEFAULT
        name: 'default',
        once({ next }) {
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

          return new Promise(resolve => {
            // animLeave(current.container)

            setTimeout(() => {
              resolve()
            }, 400)
          })
        },

        enter: ({ next }) => {
          console.log('ENTER DEFAULT')

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


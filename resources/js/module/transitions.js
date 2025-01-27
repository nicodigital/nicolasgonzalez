import barba from '@barba/core'
import barbaPrefetch from '@barba/prefetch'
import { removeOnce, homeIntro, homeOutro, menuIntro, langSwitcher, logoIntro, logoOutro, bigTitleIntro, worksIntro, worksOutro, bigTitleOutro } from './gsap.js'
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
      // TO HOME
      {
        name: 'to-home',
        to: { namespace: 'home' },
        enter({ next }) {
          console.log('ENTER TO HOME')
          homeIntro()
          currentCleanup = functions(next.container, deviceData)
          removeOnce()
        },
        once({ next }) {
          console.log('ONCE TO HOME')
          menuIntro()
          homeIntro()
          langSwitcher()
          currentCleanup = functions(next.container, deviceData)
          removeOnce()
        },
        leave: ({ next, current }) => {
          console.log('LEAVE -> TO HOME')
          return new Promise(resolve => {

            logoOutro(current.container)
            bigTitleOutro()
            worksOutro()

            setTimeout(() => {
              resolve()
            }, 1400)

          })
        },
      },
      // TO WORKS
      { 
        name: 'to-works',
        to: { namespace: 'works' },
        once({ next }) {
          console.log('ONCE TO WORKS')
          logoIntro()
          bigTitleIntro()
          worksIntro()
          currentCleanup = functions(next.container, deviceData)
          removeOnce()
        },

        leave: ({ next, current }) => {
          console.log('LEAVE -> TO WORKS')
          
          // Limpiar funciones anteriores
          if (currentCleanup && typeof currentCleanup === 'function') {
            currentCleanup()
          }

          return new Promise(resolve => {
            homeOutro()
            setTimeout(() => {
              resolve()
            }, 1400)
          })
        },

        enter: ({ next }) => {
          console.log('ENTER TO WORKS')
          logoIntro()
          bigTitleIntro()
          worksIntro()
          // Inicializar nuevas funciones después de que el DOM esté listo
          setTimeout(() => {
            currentCleanup = functions(next.container, deviceData)
          }, 300)
        }
      },
      // DEFAULT
      { 
        name: 'default',
        once({ next }) {
          console.log('ONCE DEFAULT')
          currentCleanup = functions(next.container, deviceData)
          removeOnce()
        },

        leave: ({ next, current }) => {
          console.log('LEAVE -> DEFAULT')

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


import barba from '@barba/core'
import barbaPrefetch from '@barba/prefetch'
import { removeOnce, homeIntro, homeOutro, menuIntro, langSwitcher, logoIntro, logoOutro, removeLogoActive, worksIntro, worksOutro, myStackIntro, myStackOutro } from './gsap.js'
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
      // HOME
      {
        name: 'to-home',
        to: { namespace: 'home' },
        once({ next }) {
          console.log('ONCE TO HOME')
          menuIntro()
          homeIntro(next.container)
          langSwitcher()
          currentCleanup = functions(next.container, deviceData)
          removeOnce()
        },
        enter({ next }) {
          console.log('ENTER TO HOME')
          // console.log(next)
          removeLogoActive()
          homeIntro(next.container)
          currentCleanup = functions(next.container, deviceData)
          removeOnce()
        },
        leave: ({ next, current }) => {
          console.log('LEAVE -> TO HOME')
          return new Promise(resolve => {

            logoOutro()
            worksOutro()
            myStackOutro()

            setTimeout(() => {
              resolve()
            }, 1600)

          })
        },
      },
      // WORKS
      { 
        name: 'to-works',
        to: { namespace: 'works' },

        once({ next }) {
          console.log('ONCE TO WORKS')
          logoIntro()
          worksIntro()
          currentCleanup = functions(next.container, deviceData)
          removeOnce()
        },

        enter: ({ next }) => {
          console.log('ENTER TO WORKS')
          logoIntro()
          worksIntro()
          // Inicializar nuevas funciones después de que el DOM esté listo
          setTimeout(() => {
            currentCleanup = functions(next.container, deviceData)
          }, 300)
        },

        leave: ({ next, current }) => {
          console.log('LEAVE -> TO WORKS')
          
          // Limpiar funciones anteriores
          if (currentCleanup && typeof currentCleanup === 'function') {
            currentCleanup()
          }

          return new Promise(resolve => {
            homeOutro(current.container)
            myStackOutro(current.container)
            setTimeout(() => {
              resolve()
            }, 1600)
          })
        }

      },
      // MY STACK
      { 
        name: 'to-my-stack',
        to: { namespace: 'my-stack' },

        once({ next }) {
          console.log('ONCE TO MY STACK')
          currentCleanup = functions(next.container, deviceData)
          logoIntro()
          myStackIntro()
          removeOnce()
        },

        enter: ({ next }) => {
          console.log('ENTER TO MY STACK')
          logoIntro()
          currentCleanup = functions(next.container, deviceData)
          myStackIntro()
        },

        leave: ({ next, current }) => {
          console.log('LEAVE -> TO MY STACK')
          
          // Limpiar funciones anteriores
          if (currentCleanup && typeof currentCleanup === 'function') {
            currentCleanup()
          }

          return new Promise(resolve => {

            homeOutro()
            worksOutro()
            
            setTimeout(() => {
              resolve()
            }, 1600)
          })
        }
      }
    ]
  })
}

export default transitions


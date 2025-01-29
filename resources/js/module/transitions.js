import barba from '@barba/core'
import barbaPrefetch from '@barba/prefetch'
import { removeOnce, homeIntro, homeOutro, menuIntro, langSwitcher, logoIntro, logoOutro, removeLogoActive, worksIntro, worksOutro, myStackIntro, myStackOutro, packsIntro, packsOutro, contactIntro, contactOutro } from './gsap.js'
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
            packsOutro()
            contactOutro()

            setTimeout(() => {
              resolve()
            }, 1400)

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
            homeOutro()
            myStackOutro()
            packsOutro()
            contactOutro()
            setTimeout(() => {
              resolve()
            }, 1400)
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
            packsOutro()
            contactOutro()
            
            setTimeout(() => {
              resolve()
            }, 1400)
          })
        }
      },
      // PACKS
      { 
        name: 'to-packs',
        to: { namespace: 'packs' },

        once({ next }) {
          console.log('ONCE PACKS')
          currentCleanup = functions(next.container, deviceData)
          logoIntro()
          packsIntro()
          removeOnce()
        },

        enter: ({ next }) => {
          console.log('ENTER PACKS')
          logoIntro()
          currentCleanup = functions(next.container, deviceData)
          packsIntro()
        },

        leave: ({ next, current }) => {
          console.log('LEAVE -> TO PACKS')
          
          // Limpiar funciones anteriores
          if (currentCleanup && typeof currentCleanup === 'function') {
            currentCleanup()
          }

          return new Promise(resolve => {

            homeOutro()
            worksOutro()
            myStackOutro()
            contactOutro()
            
            setTimeout(() => {
              resolve()
            }, 1400)
          })
        }
      },
      // CONTACT
      { 
        name: 'to-contact',
        to: { namespace: 'contact' },

        once({ next }) {
          console.log('ONCE CONTACT')
          currentCleanup = functions(next.container, deviceData)
          logoIntro()
          contactIntro()
          removeOnce()
        },

        enter: ({ next }) => {
          console.log('ENTER CONTACT')
          logoIntro()
          currentCleanup = functions(next.container, deviceData)
          contactIntro()
        },

        leave: ({ next, current }) => {
          console.log('LEAVE -> TO CONTACT')
          
          // Limpiar funciones anteriores
          if (currentCleanup && typeof currentCleanup === 'function') {
            currentCleanup()
          }

          return new Promise(resolve => {

            homeOutro()
            worksOutro()
            myStackOutro()
            packsOutro()
            
            setTimeout(() => {
              resolve()
            }, 1400)
          })
        }
      }
    ]
  })
}

export default transitions


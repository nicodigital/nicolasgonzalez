function scrollMarkers (device_data) {
  const body = device_data.body
  const footer = device_data.footer
  const isDesktop = device_data.isDesktop
  const isMobile = device_data.isMobile
  const isTablet = device_data.isTablet
  const platform = device_data.platform

  // Variable para mantener referencia al observer
  let currentObserver = null

  function setMarkers () {
    // Limpiar observer anterior si existe
    if (currentObserver) {
      currentObserver.disconnect()
    }

    const scrollPosition = window.scrollY

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    }

    const callback = function (entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          body.setAttribute('data-scroll', 'bottom')
        } else {
          if (scrollPosition < 100) {
            body.setAttribute('data-scroll', 'top')
          } else {
            body.setAttribute('data-scroll', 'down')
          }
        }
      })
    }

    // Crear nueva instancia del observer
    currentObserver = new IntersectionObserver(callback, options)
    
    // Asegurarse de que el footer existe antes de observarlo
    if (footer) {
      currentObserver.observe(footer)
    }
  }

  let lastScrollTop = ''

  function smart_menu () {
    const st = window.scrollY

    if (st > lastScrollTop) {
      body.dataset.stack = 'off'
    } else {
      body.dataset.stack = 'on'
    }
    lastScrollTop = st
  }

  // Inicializar los markers
  setMarkers()

  // Event listeners
  window.addEventListener('scroll', () => {
    setMarkers()
    if (platform != 'ios' && isMobile === true) {
      smart_menu()
    } else if (isDesktop === true || isTablet === true) {
      smart_menu()
    }
  })

  // Retornar función de limpieza
  return () => {
    if (currentObserver) {
      currentObserver.disconnect()
    }
    window.removeEventListener('scroll', () => {
      setMarkers()
      if (platform != 'ios' && isMobile === true) {
        smart_menu()
      } else if (isDesktop === true || isTablet === true) {
        smart_menu()
      }
    })
  }
}

export default scrollMarkers

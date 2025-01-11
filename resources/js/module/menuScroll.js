function menuScroll (device_data) {
  if (!device_data.isDesktop) return
  const menuItems = document.querySelectorAll('.m-item')
  const sectionsScroll = document.querySelectorAll('.scroll-case')

  const options = {
    threshold: [0.1, 0.2] // Configura umbrales para detectar 10% y 20% de visibilidad
  }

  function cleanPath (path) { // Esta función es para obtener el Hash desde un path compuesto
    // Dividir la cadena en partes utilizando el símbolo #
    const partes = path.split('#')
    // Retornar la última parte (la que sigue después del último #)
    return partes[partes.length - 1]
  }

  let currentActive = null // Variable para almacenar el elemento activo actual

  // Crear un IntersectionObserver
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      const sectionID = entry.target.getAttribute('id')
      const menuItem = Array.from(menuItems).find(
        item => cleanPath(item.getAttribute('href').substring(1)) === sectionID // Quitar la función cleanPath en caso de que el Hash se encuentre solo
      )

      if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
        // Si la sección está más del 20% visible
        if (currentActive && currentActive !== menuItem) {
          currentActive.classList.remove('active')
        }
        menuItem.classList.add('active')
        currentActive = menuItem
      } else if (!entry.isIntersecting && entry.intersectionRatio <= 0.1) {
        // Si la sección está menos del 10% visible
        menuItem.classList.remove('active')
        if (currentActive === menuItem) {
          currentActive = null
        }
      }
    })
  }, options)

  // Observar cada sección
  sectionsScroll.forEach(section => {
    observer.observe(section)
  })
}

export default menuScroll

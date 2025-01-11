import { CountUp } from 'countup.js'

function counterIncrement () {
  const counterSections = document.querySelectorAll('.counter')

  counterSections.forEach(section => {
    function animateCounters () {
      const counters = section.querySelectorAll('.counter-num')

      counters.forEach(counter => {
        const target = +counter.getAttribute('data-target')
        new CountUp(counter, target, {
          decimalPlaces: 0,
          separator: '.',
          useGrouping: true
        }).start()
      })
    }

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(animateCounters, 300)
            observer.unobserve(entry.target)
          }
        })
      }, {
        threshold: 0,
        rootMargin: '0px'
      })

      // Verificar si el elemento ya está visible
      const rect = section.getBoundingClientRect()
      const isVisible = rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

      if (isVisible) {
        setTimeout(animateCounters, 300)
      } else {
        observer.observe(section)
      }
    } else {
      setTimeout(animateCounters, 300)
    }
  })
}

export default counterIncrement

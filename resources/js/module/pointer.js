function pointer () {
  const pointer = document.querySelector('.pointer')
  const pointerLink = document.querySelectorAll('.pointer-link')
  const pointerArrow = document.querySelectorAll('.pointer-arrow')

  // Optimización: Usar requestAnimationFrame para el mousemove
  let rafId
  document.addEventListener('mousemove', (e) => {
    if (rafId) cancelAnimationFrame(rafId)

    rafId = requestAnimationFrame(() => {
      pointer.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    })
  })

  function handleHover (elements, className) {
    elements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        pointer.classList.add(className)
      })

      element.addEventListener('mouseleave', () => {
        pointer.classList.remove(className)
      })
    })
  }

  if (pointerLink?.length) {
    handleHover( pointerLink, 'o-pointer' )
  }

  if (pointerArrow?.length) {
    handleHover(pointerArrow, 'arrow')
  }


}

export default pointer

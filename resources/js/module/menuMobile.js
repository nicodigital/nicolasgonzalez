function menuMobile( container, device_data ) {

  if (device_data.isDesktop) return
  
  const html = device_data.html;
  const body = device_data.body;
  const btn_togg = container.querySelectorAll('.togg');

  // Crea un elemento div que tenga un ancho forzado de desbordamiento
  var scrollDiv = container.createElement('div');
  scrollDiv.style.width = '100px';
  scrollDiv.style.height = '100px';
  scrollDiv.style.overflow = 'scroll';

  // Agrega el elemento al documento, pero fuera del área visible
  container.body.appendChild(scrollDiv);

  // Calcula el ancho de la barra de desplazamiento restando el ancho del contenido interno del div del ancho del div con desbordamiento
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

  // Elimina el div de prueba
  container.body.removeChild(scrollDiv);

  // La variable "scrollbarWidth" ahora contiene el ancho de la barra de desplazamiento en píxeles
  // console.log('Ancho de la barra de desplazamiento: ' + scrollbarWidth + ' píxeles');


  function menuToggler() {

    const toggler = container.querySelector('body.toggler');

    if ( toggler.classList.contains('menu-in') ) {

      toggler.classList.toggle('menu-in');
      html.style.overflowY = 'auto';
      body.style.overflowY = 'auto';
      body.style.paddingRight = '0';

    } else {
      toggler.classList.toggle('menu-in');
      html.style.overflowY = 'hidden';
      body.style.overflowY = 'hidden';
      body.style.paddingRight = scrollbarWidth + 'px';
    }

  }

  btn_togg.forEach(btn => {
    btn.onclick = () => menuToggler();
  });


}

export default menuMobile
function menuMobile( container, device_data ) {

  if (device_data.isDesktop) return
  
  const html = device_data.html;
  const body = device_data.body;
  const btn_togg = container.querySelectorAll('.togg');

  function menuToggler() {

    const toggler = document.querySelector('body.toggler');

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
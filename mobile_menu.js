const hdr = document.querySelector('#header')
const btn = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')
const sect1 = document.querySelector('#section1')
const link = document.querySelectorAll('.link')

const cross = document.createElement('button')
cross.setAttribute('style', 'margin: 50px 50px 50px auto; width: max-content; background: none; font-weigth: 500; font-size: 20px; border: none; cursor: pointer;');
cross.innerHTML = '&times;';

function open() {
  hdr.setAttribute('style', 'height: 100vh; width: 100%; background-image: url(./mobile-menu-image/image_geometry_menu_1.png), url(./mobile-menu-image/image_geometry_menu_2.png); background-repeat: no-repeat; background-position: left top, center bottom; margin-top: 0; position: fixed; background-color: white; flex-direction: column-reverse; justify-content: start;');
  btn.setAttribute('style', 'display: none');
  sect1.style.marginTop = '0';
  menu.setAttribute('style', 'display: flex; flex-direction: column; align-items: center; align-self: center; margin-top: 20px;');
  for (i = 0; i < link.length; ++i)
    { link[i].setAttribute('style', 'margin-left: 0; margin-top: 20px; color: #35418c;'); }

  hdr.appendChild(cross)
}

btn.addEventListener('click', open);

function close() {
  hdr.removeAttribute('style');
  menu.removeAttribute('style');
  sect1.style.marginTop = '70px';
  btn.removeAttribute('style');
  hdr.removeChild(cross);
  for (i = 0; i < link.length; ++i)
    { link[i].setAttribute('style', 'margin-left: 20px; margin-top: 0;') }
}

cross.addEventListener('click', close)

for (i = 0; i < link.length; ++i)
  { link[i].addEventListener('click', close) } // close menu when clicking on link

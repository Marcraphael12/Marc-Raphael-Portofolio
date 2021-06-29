const hamburger = document.querySelector('.class-side-menu');
const menuContainer = document.getElementById('id-header-content');
const nav = document.querySelector('.menu-nav');
const links = document.querySelectorAll('a.menu-link');
const logo = document.querySelector('.class-my-logo');


function open() {
  // 
  menuContainer.style.height = '568px';
  menuContainer.style.width = '100%';
  menuContainer.style.margin = '0 0 50px 0';
  menuContainer.style.backgroundColor = 'rgba(255, 255, 255, 1)';
  menuContainer.style.backgroundImage = 'url(./mobile-menu-image/image_geometry_menu_1.png), url(./mobile-menu-image/image_geometry_menu_2.png)';
  menuContainer.style.backgroundPosition = 'top left, bottom';
  menuContainer.style.backgroundRepeat = 'no-repeat, no-repeat';
  menuContainer.style.backgroundSize = 'auto auto, 100% auto';
  menuContainer.style.fontFamily = '"Poppins", sans-serif';
  menuContainer.style.color = 'rgba(26, 34, 54, 1)';
  menuContainer.style.display = 'flex';
  menuContainer.style.flexDirection = 'column';
  menuContainer.style.flexWrap = 'wrap';
  menuContainer.style.position = 'fixed';
  menuContainer.style.zIndex = '2';

  logo.style.display = 'none';

  hamburger.src = './mobile-menu-image/Union.png';
  
  hamburger.style.margin = '24px 20px auto auto';
  

  nav.style.display = 'initial';
  nav.style.display = 'flex';
  nav.style.flexDirection = 'column';
  nav.style.justifyContent = 'center';

  const cross = hamburger;
  cross.setAttribute ('class', 'cross');

  function close() {
    logo.style.display = 'initial';
    menuContainer.style.height = 'auto';
    menuContainer.style.width = '100%';
    menuContainer.style.background = 'unset';
    menuContainer.style.display = 'flex';
    menuContainer.style.flexDirection = 'row';
    menuContainer.style.flexWrap = 'nowrap';
    menuContainer.style.position = 'unset';
    menuContainer.style.margin = '10px 0 50px 0';

    hamburger.style.margin = 'auto 16px auto auto';
    nav.style.display = 'none';

    cross.src = './images/ic_menu.svg';
    hamburger.setAttribute ('class', 'class-side-menu');
  }
  cross.addEventListener('click', close);
}

hamburger.addEventListener('click', open);


const hamburger = document.querySelector('.class-side-menu');


function mobileMenu() {
  // create menu element
  const menuContainer = document.getElementById('id-header-content');
  menuContainer.style.height = '568px';
  menuContainer.style.width = '100%';
  menuContainer.style.margin = '0 0 50px 0'
  menuContainer.style.listStyleType = 'unset'
  menuContainer.style.backgroundColor = 'rgba(255, 255, 255, 1)';
  menuContainer.style.backgroundImage = 'url(./mobile-menu-image/image_geometry_menu_1.png), url(./mobile-menu-image/image_geometry_menu_2.png)';
  menuContainer.style.backgroundPosition = 'top left, bottom';
  menuContainer.style.backgroundRepeat = 'no-repeat, no-repeat';
  menuContainer.style.backgroundSize = 'auto auto, 100% auto';
  menuContainer.style.fontFamily = '"Poppins", sans-serif';
  menuContainer.style.color = 'rgba(26, 34, 54, 1)';
  //menucontainer.style.display = 'grid';
  menuContainer.style.position = 'fixed';
  menuContainer.style.zIndex = '2';

  const logo = document.querySelector('.class-my-logo');
  logo.style.display = 'none';

  hamburger.src = './mobile-menu-image/Union.png';
  hamburger.style.gridColumn = '1 / 2';
  hamburger.style.alignSelf = 'initial';

  const links = document.querySelectorAll('header.class-header-link');
  links.style.display = 'initial';
}

hamburger.addEventListener('click', mobileMenu);
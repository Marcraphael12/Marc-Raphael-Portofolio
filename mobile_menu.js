const hamburger = document.querySelector('.class-side-menu');


function mobileMenu() {
  // create menu element
  const menuContainer = document.getElementById('id-header-content');
  menuContainer.style.height = '568px';
  menuContainer.style.width = '100%';
  menuContainer.style.margin = '0 0 50px 0'
  menuContainer.style.listStyleType = 'unset'
  menuContainer.style.backgroundColor = 'white';
  menuContainer.style.backgroundImage = 'url(./mobile-menu-image/image_geometry_menu_1.png), url(./mobile-menu-image/image_geometry_menu_2.png)';
  menuContainer.style.backgroundPosition = 'top left, bottom';
  menuContainer.style.backgroundRepeat = 'no-repeat, no-repeat';
  menuContainer.style.backgroundSize = 'auto auto, 100% auto';
  menuContainer.style.fontFamily = '"Poppins", sans-serif';
  menuContainer.style.color = 'rgba(26, 34, 54, 1)';

  const logo = document.querySelector('.class-my-logo');
  logo.style.display = 'none';

  hamburger.src = './mobile-menu-image/Union.png';
  

  //document.body.appendChild(menuContainer);

  // create menu links
  // let link1 = document.createElement('a').innerHTML = 'Hello';
  // let link2 = document.createElement('a').innerHTML = 'Portofolio';
  ///let link3 = document.createElement('a').innerHTML = 'About';
  // let link4 = document.createElement('a').innerHTML = 'Contact';
}

hamburger.addEventListener('click', mobileMenu);
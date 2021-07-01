const hamburger = document.querySelector('.class-side-menu');

const menuContainer = document.getElementById('id-header-content');

const nav = document.querySelector('.menu-nav');

const links = document.querySelectorAll('a.menu-link')

const logo = document.querySelector('.class-my-logo');
//the closig button
const button = document.querySelector('.close-btn');
button.style.width = 'min-content';
button.style.height = 'auto';
button.style.background = 'unset';
button.style.fontSize = '30px';
button.style.fontWeight = '500';
button.style.padding = '0 0';
button.style.margin = '20px 20px auto auto'
button.style.color = '#35418c';// copy the color of background image
button.style.border = 'none';
button.style.display = 'none';

//initializing the opening function
function open() {
  // reset the height, width, the display, and the background of header
  menuContainer.style.height = '568px';
  menuContainer.style.width = '100%';
  menuContainer.style.margin = '0 0 50px 0';
  menuContainer.style.backgroundColor = 'rgba(255, 255, 255, 1)';
  menuContainer.style.backgroundImage = 'url(./mobile-menu-image/image_geometry_menu_1.png), url(./mobile-menu-image/image_geometry_menu_2.png)';
  menuContainer.style.backgroundPosition = 'top left, bottom';
  menuContainer.style.backgroundRepeat = 'no-repeat, no-repeat';
  menuContainer.style.backgroundSize = 'auto auto, 100% auto';
  menuContainer.style.display = 'flex';
  menuContainer.style.flexDirection = 'column';
  menuContainer.style.flexWrap = 'wrap';
  menuContainer.style.position = 'initial';
  menuContainer.style.zIndex = '2';

// display the links and style
  nav.style.display = 'initial';
  nav.style.display = 'flex';
  nav.style.flexDirection = 'column';
  nav.style.justifyContent = 'center';
  
  // remove the logo from header
  logo.style.display = 'none';
  hamburger.style.display = 'none';
  button.style.display = 'initial';
}

hamburger.addEventListener('click', open);

// initializing the closing function
function close() {
  // display the logo
  logo.style.display = 'initial';

  // reinitialize the Header
  menuContainer.style.height = 'auto';
  menuContainer.style.width = '100%';
  menuContainer.style.background = 'unset';
  menuContainer.style.display = 'flex';
  menuContainer.style.flexDirection = 'row';
  menuContainer.style.flexWrap = 'nowrap';
  menuContainer.style.position = 'unset';
  menuContainer.style.margin = '10px 0 50px 0';
  // remove the menu
  nav.style.display = 'none';
  // restore the hamburger margin
  button.style.display = 'none';
  hamburger.style.display = 'initial'
}

button.addEventListener('click', close);
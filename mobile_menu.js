/* eslint-disable no-plusplus */
/* eslint-disable no-multi-str */
const hdr = document.querySelector('#header'); // the header element
const btn = document.querySelector('.menu-btn'); // the opening button
const menu = document.querySelector('.menu');
const sect1 = document.querySelector('#section1');
const link = document.querySelectorAll('.link'); // Each link element class

/** ******* The closig button *********** */
const cross = document.createElement('button');
cross.setAttribute('style', '\
margin: 30px 30px 50px auto;\
width: max-content;\
background: none;\
font-weight: 500;\
font-size: 20px;\
border: none;\
cursor: pointer;');
cross.innerHTML = '&times;';

/** ********* The opening function ************** */
function open() {
  hdr.setAttribute('style', '\
  height: 100vh;\
  width: 100%;\
  background-image: url(./mobile-menu-image/image_geometry_menu_1.png),\
  url(./mobile-menu-image/image_geometry_menu_2.png);\
  background-repeat: no-repeat;\
  background-position: left top, center bottom;\
  margin-top: 0;\
  position: fixed;\
  background-color: white;\
  flex-direction: column-reverse;\
  justify-content: flex-end;');

  btn.setAttribute('style', 'display: none');
  sect1.style.marginTop = '0';
  menu.setAttribute('style', '\
  display: flex;\
  flex-direction: column;\
  align-items: center;\
  align-self: center; margin-top: 20px;');

  // Apply style on every link element
  for (let i = 0; i < link.length; ++i) {
    link[i].setAttribute('style', '\
    margin-left: 0;\
    margin-top: 20px;\
    color: #35418c;');
  }

  hdr.appendChild(cross); // add cross to the header
}

btn.addEventListener('click', open); // calling the opening function

/** *********** The closing function *************** */
function close() {
  hdr.removeAttribute('style'); // remove the style attribute
  menu.removeAttribute('style');// remove the style attribute
  sect1.style.marginTop = '70px';
  btn.removeAttribute('style'); // remove the style attribute
  hdr.removeChild(cross); // remove cross from header

  // reset the link element style
  for (let i = 0; i < link.length; ++i) {
    link[i].setAttribute('style', '\
    margin-left: 20px;\
    margin-top: 0;');
  }
}

cross.addEventListener('click', close); // calling the closing function and reset the header

for (let i = 0; i < link.length; ++i) { link[i].addEventListener('click', close); } // close menu when clicking on link

/* eslint-disable no-multi-str */
/** ****** Projects techs ********* */
const technologiesUsed = {
  htmlCss: 'HTML/CSS',
  ruby: 'Ruby on Rails',
  JavaScript: 'JavaScript',
};

function techStyle(tech) {
  tech.setAttribute('style', '\
  display: flex;\
  align-items: center;\
  justify-content: center;\
  padding: 4px 10px;\
  font-size: 9px;\
  font-weight: 300;\
  margin-right: 10px;\
  border: solid 0.5px #1A2236;\
  color: #1A2236;');
  return tech;
}

/** *** Technologies list *** */
const tech1 = document.createElement('li');
tech1.innerHTML = technologiesUsed.htmlCss;
techStyle(tech1);

const tech2 = document.createElement('li');
tech2.innerHTML = technologiesUsed.ruby;
techStyle(tech2);

const tech3 = document.createElement('li');
tech3.innerHTML = technologiesUsed.JavaScript;
techStyle(tech3);

const techs = document.createElement('ul');
techs.setAttribute('style', '\
list-style-type: none;\
display: flex;\
width: 93%;\
margin-bottom: 18px;\
border: none;\
height: auto;');

techs.appendChild(tech1);
techs.appendChild(tech2);
techs.appendChild(tech3);

/** ****** Images library: Found all modal's images here ********* */
const images = {
  image1: document.createElement('img'),
  // can add more imeges later
};

function imagesStyle(img) { // the default dispay of each big image is set to none
  img.setAttribute('style', '\
  width: 93%;\
  height: auto;\
  margin: auto;');
  img.setAttribute('class', 'img-to-slide'); // This class will be used to create the slider in the opening function
  return img;
}

const img1 = images.image1; // The first big image
img1.setAttribute('src', './images/Rectangle21_2.png');
imagesStyle(img1);

/** ************ The button allowing to slide images ************* */
function slideButtonStyle(elem) {
  elem.setAttribute('style', '\
  width: 35px;\
  height: 50px;\
  margin: auto 3.5%;\
  cursor: pointer;');
  return elem;
}
const slideLeft = document.createElement('img');
slideLeft.setAttribute('src', './linkpics/angle-left.svg');
slideButtonStyle(slideLeft);

const slideRight = document.createElement('img');
slideRight.setAttribute('src', './linkpics/angle-right.svg');
slideButtonStyle(slideRight);

const slideButtonContainer = document.createElement('div');
// eslint-disable-next-line no-multi-str
slideButtonContainer.setAttribute('style', '\
width: 100%;\
height: auto;\
position: absolute;\
z-index: 1;\
top: 100px;\
margin-top: 40%;\
display: flex;\
flex-direction: row;\
justify-content: space-between;\
align-items: center;');
slideButtonContainer.appendChild(slideLeft);
slideButtonContainer.appendChild(slideRight);

/** ***** Little images library ******* */
const litlesImages = {
  img1: document.createElement('img'),
  img2: document.createElement('img'),
  img3: document.createElement('img'),
  img4: document.createElement('img'),
};

// The litles images
function litleImageStyle(ele) {
  ele.setAttribute('style', ' width: 100%; height: auto;');

  ele.setAttribute('src', './images/Rectangle21.png');

  return ele;
}

const litleImage1 = litlesImages.img1;
litleImageStyle(litleImage1);

const litleImage2 = litlesImages.img2;
litleImageStyle(litleImage2);

const litleImage3 = litlesImages.img3;
litleImageStyle(litleImage3);

const litleImage4 = litlesImages.img4;
litleImageStyle(litleImage4);

// the list element to keep every litle images
function litleImageListStyle(ele) {
  ele.setAttribute('style', '\
  width: 25%;\
  height: auto;\
  padding: 0 !important;');

  return ele;
}

const litleImageList1 = document.createElement('li');
litleImageListStyle(litleImageList1);
litleImageList1.appendChild(litleImage1);

const litleImageList2 = document.createElement('li');
litleImageListStyle(litleImageList2);
litleImageList2.appendChild(litleImage2);

const litleImageList3 = document.createElement('li');
litleImageListStyle(litleImageList3);
litleImageList3.appendChild(litleImage3);

const litleImageList4 = document.createElement('li');
litleImageListStyle(litleImageList4);
litleImageList4.appendChild(litleImage4);

const litlesImagesKeeper = document.createElement('ul');
litlesImagesKeeper.setAttribute('style', '\
width: 93%;\
height: auto;\
margin: auto;\
display: flex;\
border: none;');
litlesImagesKeeper.appendChild(litleImageList1);
litlesImagesKeeper.appendChild(litleImageList2);
litlesImagesKeeper.appendChild(litleImageList3);
litlesImagesKeeper.appendChild(litleImageList4);

/** ****** Texts library ********* */
const texts = {
  title: 'Project name goes here',

  text1: '  Lorem ipsum dolor sit amet consectetur,\
  adipisicing elit. Illum, sed doloribus praesentium\
  aperiam voluptate facilis maxime quos similique nihil saepe,\
  qui soluta! Ad minima, architecto nostrum earum nobis id provident? Lorem ipsum dolor sit amet consectetur,\
  adipisicing elit. Illum, sed doloribus praesentium\
  aperiam voluptate facilis maxime quos similique nihil saepe,\
  qui soluta! Ad minima, architecto nostrum earum nobis id provident?',

  text2: ' Lorem ipsum dolor sit amet consectetur,\
  adipisicing elit. Illum, sed doloribus praesentium\
  aperiam voluptate facilis maxime quos similique nihil saepe,\
  qui soluta! Ad minima, architecto nostrum earum nobis id provident? Lorem ipsum dolor sit amet consectetur,\
  adipisicing elit. Illum, sed doloribus praesentium\
  aperiam voluptate facilis maxime quos similique nihil saepe,\
  qui soluta! Ad minima, architecto nostrum earum nobis id provident?',
};

const projectName = document.createElement('h2');
projectName.innerHTML = texts.title;
projectName.setAttribute('style', '\
width: 93%;\
height: auto;\
font-size: 20px;\
font-weight: 700;\
color: #1A2236;\
margin-bottom: 23px;');

function textsStyle(txt) {
  txt.setAttribute('style', '\
  font-family: "Poppins", sans-serif;\
  color: #1A2236;\
  font-size: 12px;\
  line-height: 21px;\
  font-weight: 400;\
  max-width: 600px;\
  height: auto;\
  margin: auto;\
  margin-block-start: 10px;\
  margin-block-end: 0;');
  return txt;
}

const txt1 = document.createElement('p');
txt1.innerHTML = texts.text1;
textsStyle(txt1);

const txt2 = document.createElement('p');
txt2.innerHTML = texts.text2;
textsStyle(txt2);

/** ****************** Project buttons ********************* */
const projectButtons = {
  button1: 'See live',
  button2: 'See source',
  icon1: document.createElement('img'),
  icon2: document.createElement('img'),
};

/// //// Only for icons ///////
function iconsStyle(icn) {
  icn.setAttribute('style', '\
  margin-left: 36px;\
  margin-right: 15.5px');

  return icn;
}

const live = projectButtons.icon1;
live.setAttribute('src', './linkpics/ic_union.svg');
iconsStyle(live);

const gitHub = projectButtons.icon2;
gitHub.setAttribute('src', './linkpics/ic_github.svg');
iconsStyle(gitHub);

/// ////// The links style //////////
function buttonLinksStyle(txt) {
  txt.setAttribute('style', '\
  width: 246px;\
  height: 51px;\
  color: white;\
  font-size: 18px;\
  background: #1A2236;\
  font-weight: 300;\
  border: 1px solid #1A2236;\
  display: flex;\
  align-items: center;\
  padding: 12px 15px;\
  justify-content: flex-end;\
  cursor: pointer;\
  margin: 15px;');

  return txt;
}

const seeLive = document.createElement('a');
seeLive.innerHTML = projectButtons.button1;
buttonLinksStyle(seeLive);
seeLive.appendChild(live);

const seeSource = document.createElement('a');
seeSource.innerHTML = projectButtons.button2;
buttonLinksStyle(seeSource);
seeSource.appendChild(gitHub);

const Buttons = document.createElement('div');
Buttons.setAttribute('style', '\
max-width: 555px;\
height: auto;\
display: flex;\
flex-direction: row;\
flex-wrap: wrap;\
justify-content: center;\
margin: 29px auto 0 auto;');

Buttons.appendChild(seeLive);
Buttons.appendChild(seeSource);

/** ***************** Open modal button: see this project **************** */
const openModal = document.querySelector('.see-btn');

/** ***************** Close modal button ****************** */
const closeModal = document.createElement('button'); // create closeBtn button
closeModal.setAttribute('style', '\
width: max-content;\
background: none;\
font-weight: 500;\
font-size: 20px;\
border: none;\
cursor: pointer;\
align-self: flex-end;\
margin: 19px 0;\
color: rgba(226, 80, 92, 1);');
closeModal.innerHTML = '&times;';

/** ********* The card element ******** */
const card = document.createElement('div');
card.setAttribute('style', '\
height: auto;\
width: 100%;\
background: white;\
display: flex;\
margin: 0 auto;\
padding: 0 10px;\
align-items: center;\
flex-direction: column;');

card.appendChild(closeModal);
card.appendChild(projectName);
card.appendChild(techs);
card.appendChild(slideButtonContainer);
card.appendChild(img1);
card.appendChild(litlesImagesKeeper);
card.appendChild(txt1);
card.appendChild(txt2);
card.appendChild(Buttons);

/** ********* The modal element ******** */
const modal = document.createElement('aside'); // Consider modal as an aside element
modal.setAttribute('style', '\
height: 100%;\
width: 100vw;\
background: rgba(26, 34, 54, 1);\
position: fixed;\
top: 0;\
left: 0;\
display: flex;\
flex-direction: column;\
overflow: scroll;');
modal.appendChild(card);

/** ***** Opening and closing functions part ******** */
function openProject() { // open the modal
  document.body.appendChild(modal);
}
openModal.addEventListener('click', openProject);

function closeProject() { // close the modal
  document.body.removeChild(modal);
}
closeModal.addEventListener('click', closeProject);

/******** Projects techs **********/
const technologiesUsed = {
  htmlCss : 'HTML/CSS',
  JavaScript : 'JavaScript',
  ruby : 'Ruby',
}

function techStyle(tech) {
  tech.setAttribute('style', '\
  display: flex;\
  align-items: center;\
  justify-content: center;\
  padding: 6px 10px;\
  font-size: 11px;\
  font-weight: 300;\
  margin-right: 10px;\
  border: solid 0.5px #1A2236;\
  color: #1A2236;')
  return tech
}

/***** Technologies list ****/
const tech1 = document.createElement('li')
tech1.innerHTML = technologiesUsed.htmlCss
techStyle(tech1)

const tech2 = document.createElement('li')
tech2.innerHTML = technologiesUsed.JavaScript
techStyle(tech2)

const tech3 = document.createElement('li')
tech3.innerHTML = technologiesUsed.ruby
techStyle(tech3)

const techs = document.createElement('ul')
techs.setAttribute('style', '\
list-style-type: none;\
display: flex;\
width: 100%;\
margin-bottom: 18px;\
height: auto;')

techs.appendChild(tech1)
techs.appendChild(tech2)
techs.appendChild(tech3)

/******** Images library **********/
const images = {
  image1 : document.createElement('img')
  // can add more imeges later
}

function imagesStyle(img) {
  img.setAttribute('style','\
  width: 93%;\
  height: auto;\
  margin: auto;')
  return img
}

const img1 = images.image1
img1.setAttribute('src', './images/Rectangle21_2.png')
imagesStyle(img1)

/******** Texts library **********/
const texts = {
  title: 'Project name goes here',

  text1 :'	Lorem ipsum dolor sit amet consectetur,\
	adipisicing elit. Illum, sed doloribus praesentium\
	aperiam voluptate facilis maxime quos similique nihil saepe,\
	qui soluta! Ad minima, architecto nostrum earum nobis id provident?',

  text2 : '	Lorem ipsum dolor sit amet consectetur,\
	adipisicing elit. Illum, sed doloribus praesentium\
	aperiam voluptate facilis maxime quos similique nihil saepe,\
	qui soluta! Ad minima, architecto nostrum earum nobis id provident?',
}

const projectName = document.createElement('h2')
projectName.innerHTML = texts.title
projectName.setAttribute('style', '\
width: 100%;\
height: auto;\
font-weight: 700;\
color: #1A2236;\
margin-bottom: 23px;')

function textsStyle(txt) {
  txt.setAttribute('style', '\
  font-family: "Poppins", sans-serif;\
  color: #1A2236;\
  font-size: 12px;\
  line-height: 21px;\
  font-weight: 400;\
  max-width: 700px;\
  height: auto;\
  margin: auto;\
  margin-block-start: 10px;\
  margin-block-end: 0;')
  return txt
}

const txt1 = document.createElement('p')
txt1.innerHTML = texts.text1
textsStyle(txt1)

const txt2 = document.createElement('p')
txt2.innerHTML = texts.text2
textsStyle(txt2)

/******************** Project buttons **********************/
const projectButtons = {
  button1 : 'See live',
  button2 : 'See source',
  icon1 : document.createElement('img'),
  icon2 : document.createElement('img')
}

/////// Only for icons ///////
function iconsStyle(icn) {
  icn.setAttribute('style', '\
  margin-left: 36px;\
  margin-right: 15.5px')

  return icn
}

const live = projectButtons.icon1
live.setAttribute('src', './linkpics/ic_union.svg')
iconsStyle(live)

const gitHub = projectButtons.icon2
gitHub.setAttribute('src', './linkpics/ic_github.svg')
iconsStyle(gitHub)

///////// The links style //////////
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
  margin: 15px;')

  return txt
}

const seeLive = document.createElement('a')
seeLive.innerHTML = projectButtons.button1
buttonLinksStyle(seeLive)
seeLive.appendChild(live)

const seeSource = document.createElement('a')
seeSource.innerHTML = projectButtons.button2
buttonLinksStyle(seeSource)
seeSource.appendChild(gitHub)

const Buttons = document.createElement('div')
Buttons.setAttribute('style', '\
max-width: 555px;\
height: auto;\
display: flex;\
flex-direction: row;\
flex-wrap: wrap;\
justify-content: center;\
margin: 29px auto 0 auto;')

Buttons.appendChild(seeLive)
Buttons.appendChild(seeSource)

/******************* Open modal button: see this project *****************/
const openModal = document.querySelector('.see-btn')

/******************* Close modal button *******************/
const closeModal = document.createElement('button') //create closeBtn button
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

/*********** The card element *********/
const card = document.createElement('div')
card.setAttribute('style','\
height: auto;\
width: 100%;\
background: white;\
display: flex;\
margin: 0 auto;\
padding: 0 10px;\
align-items: center;\
flex-direction: column;')

card.appendChild(closeModal)
card.appendChild(projectName)
card.appendChild(techs)
card.appendChild(img1)
card.appendChild(txt1)
card.appendChild(txt2)
card.appendChild(Buttons)

/*********** The modal element *********/
const modal = document.createElement('aside') // Consider modal as an aside element
modal.setAttribute('style','\
height: 100%;\
width: 100%;\
background: rgba(26, 34, 54, 1);\
position: fixed;\
top: 0;\
left: 0;\
display: flex;\
flex-direction: column;\
overflow: scroll;')
modal.appendChild(card)

/************ Window object: screen size by using JavaScript Media method ************/

/******* Opening and closing functions part *********/
function openProject() { // open the modal
  document.body.appendChild(modal)
}
openModal.addEventListener('click', openProject)

function closeProject() { //close the modal
  document.body.removeChild(modal)
}
closeModal.addEventListener('click', closeProject)

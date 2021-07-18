/******** Projects techs **********/
const technologiesUsed = {
  htmlCss : 'HTML/CSS',
  JavaScript : 'JavaScript',
  ruby : 'Ruby',
  technologies : []
}



const techs = technologiesUsed.technologies

for (i = 0; i < 3; ++i) {
  const tech = document.createElement('li')
  tech.setAttribute('style', '\
  list-style-type: none;\
  width: max-content; height: auto;\
  padding: 10px;\
  border 1px solid #1A2236;')

  techs[i] = tech
}

/******** Images library **********/
const images = {
  image1 : document.createElement('img')
}

function imagesStyle(img) {
  img.setAttribute('style','\
  width: 100%;\
  height: auto;')
  return img
}

const img1 = images.image1
img1.setAttribute('src', './images/Rectangle21_2.png')
imagesStyle(img1)

/******** Texts library **********/
const texts = {
  text1 :'	Lorem ipsum dolor sit amet consectetur,\
	adipisicing elit. Illum, sed doloribus praesentium\
	aperiam voluptate facilis maxime quos similique nihil saepe,\
	qui soluta! Ad minima, architecto nostrum earum nobis id provident?',

  text2 : '	Lorem ipsum dolor sit amet consectetur,\
	adipisicing elit. Illum, sed doloribus praesentium\
	aperiam voluptate facilis maxime quos similique nihil saepe,\
	qui soluta! Ad minima, architecto nostrum earum nobis id provident?',
}

function textsStyle(txt) {
  txt.setAttribute('style', '\
  font-family: "Poppins", sans-serif;\
  color: #1A2236;\
  font-size: 12px;\
  line-height: 21px;\
  font-weight: 400;\
  width: 97%;\
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
  margin: 0 5px;\
  color: rgba(226, 80, 92, 1);');
closeModal.innerHTML = '&times;';

/*********** The card element *********/
const card = document.createElement('div')
card.setAttribute('style','\
height: calc(100% - 50px);\
width: calc(100% - 50px);\
max-width: 600px;\
background: white;\
display: flex;\
margin: 0 auto;\
flex-direction: column;')
card.appendChild(techs)
card.appendChild(img1)
card.appendChild(txt1)
card.appendChild(txt2)

/*********** The modal element *********/
const modal = document.createElement('aside')
modal.setAttribute('style','\
height: 100%;\
width: 100%;\
background: rgba(26, 34, 54, 0.8);\
position: fixed;\
top: 0;\
left: 0;\
display: flex;\
flex-direction: column;')
modal.appendChild(closeModal)
modal.appendChild(card)

function openProject() { // open the modal
  document.body.appendChild(modal)
}
openModal.addEventListener('click', openProject)


function closeProject() { //close the modal
  document.body.removeChild(modal)
}
closeModal.addEventListener('click', closeProject)

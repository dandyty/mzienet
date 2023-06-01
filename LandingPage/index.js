//  Getting elements

const slicedText = document.getElementById('sliced-text');
const descImgContainer = document.querySelector('.desc-images'); //conatiner show all desc img
const descImg = document.querySelectorAll('.desc-images img');
const fullDescImgContainer = document.querySelector('.desc-images-full-view'); // container for full img (the clicked one)
const fullDescImg = document.querySelector('.desc-images-full-view img');
const imgCloseBtn = document.querySelector('.desc-images-full-view #close-btn');
const hamburger = document.querySelector('.hamburger')
const menu_start = document.querySelector('#menu');
const menu_close = document.querySelector('#menu-close');
const hamburger_child = document.querySelector('.drop-down');


const leftBtn = document.querySelector('.bx.bx-chevron-left'),
  rightBtn = document.querySelector('.bx.bx-chevron-right');

//  sliced text

const theText = 'Innovating with Technology';
let theStart = 5;

slicer();
function slicer() {
  slicedText.textContent = theText.slice(0, theStart);
  theStart++;
  setTimeout(slicer, 100);
}


let currentFullImg = '';

descImg.forEach((item, index) => {
  item.addEventListener('click', () => {
    // get the clicked image
    currentFullImg = item.getAttribute('src');
    //  set the full img to display
    fullDescImg.setAttribute('src', currentFullImg);

    // show full image
    fullDescImgContainer.classList.add('active');
  });
});

imgCloseBtn.addEventListener('click', () => {
  // hide full image
  fullDescImgContainer.classList.remove('active');

  //  show all images
  descImgContainer.classList.remove('inactive');
});

const picArr = [
  '/images/three.JPG',
  '/images/five.JPG',
  '/images/four.JPG',
  '/images/two.JPG',
  '/images/six.JPG',
  '/images/nine.JPG',
  '/images/seven.JPG',
];

let newSrc;

leftBtn.addEventListener('click', () => {
  for (i = 0; i < picArr.length; i++) {
    currentFullImg = fullDescImg.getAttribute('src');

    if (currentFullImg == picArr[i]) {
      if (i == 0) {
        newSrc = picArr.length - 1;
      } else {
        newSrc = i - 1;
      }

      fullDescImg.setAttribute('src', picArr[newSrc]);
    }
  }
});

rightBtn.addEventListener('click', () => {

    for (i = 0; i < picArr.length; i++) {
        currentFullImg = fullDescImg.getAttribute('src');

        if (currentFullImg == picArr[i]) {
        if (i < picArr.length - 1) {
            newSrc = i - 1;
        } else {
            newSrc == i - 1;
        }
        fullDescImg.setAttribute('src', picArr[newSrc]);
        }
    }
});

menu_start.addEventListener('click', () =>{
  // menu_start.classList.toggle('active');
  menu_close.classList.toggle('active');
  hamburger_child.classList.toggle('active');
  menu_start.classList.toggle('active');


})
menu_close.addEventListener('click', () =>{
  // menu_start.classList.toggle('active');
  menu_close.classList.toggle('active');
  hamburger_child.classList.toggle('active');
  menu_start.classList.toggle('active');
})

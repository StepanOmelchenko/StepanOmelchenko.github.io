
// -hamburger

var menuList = [
    {
        name: 'о нас',
        href: '#second-section'
    },
    {
        name: 'бургеры',
        href: '#'
    },
    {
        name: 'команда',
        href: '#'
    },
    {
        name: 'меню',
        href: '#'
    },
    {
        name: 'отзывы',
        href: '#'
    },
    {
        name: 'контакты',
        href: '#'
    }
];


const body = document.body;
const button = document.querySelector('#hamburger');
const overlay = createOverlay(menuList);

button.addEventListener('click', function(e){
    e.preventDefault();
    body.appendChild(overlay);
});


function createOverlay(list) {
    let logo = document.querySelector('#logo').cloneNode(true);
    logo.classList.add('overlay__logo');

    let closeBtn = document.createElement('a');
    closeBtn.classList.add('overlay__close-btn');
    closeBtn.classList.add('close-btn');
    closeBtn.href = '#';
    closeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        body.removeChild(overlay);
    });

    let header = document.createElement('div');
    header.classList.add('overlay__header');

    let overlay = document.createElement('div');
    overlay.classList.add('overlay');
    
    let menu = document.createElement('ul');
    menu.classList.add('overlay__list');

    for (i = 0; i < list.length; i++) {

        const link = document.createElement('a');
        link.classList.add('overlay__link');
        link.href = list[i].href;
        link.textContent = list[i].name;
        link.addEventListener('click', function(e) {
            body.removeChild(overlay);
        });

        const item = document.createElement('li');
        item.classList.add('overlay__item');
        item.appendChild(link);

        menu.appendChild(item);

    }

    header.appendChild(logo);
    header.appendChild(closeBtn);
    overlay.appendChild(header);
    overlay.appendChild(menu);

    return overlay;

}

// -slider

const slider = document.querySelector('#slider-list');
const sliderItems = slider.querySelectorAll('li');
const sliderItemsNumber = sliderItems.length;
const sliderItem = slider.querySelector('li');
const sliderLeftBtn = document.querySelector('#slider-left');
const sliderRightBtn = document.querySelector('#slider-right');
const sliderMinPosition = 0;

sliderLeftBtn.addEventListener('click', (e) =>{
  e.preventDefault();
  let params = getSliderSize(sliderItem, slider);
  if (params.curentPosition > 0) {
    setSliderPosition(params.curentPosition, -(params.step));
  } else {
    setSliderPosition(params.maxPosition, 0);
  }
});

sliderRightBtn.addEventListener('click', (e) =>{
  e.preventDefault();
  let params = getSliderSize(sliderItem, slider);
  if (params.curentPosition < params.maxPosition) {
    setSliderPosition(params.curentPosition, params.step);
  } else {
    setSliderPosition(0, 0);
  }
});

function getSliderSize(item, slider) {
  let step = parseInt(getComputedStyle(item).width);
  let curent = checkSliderPosition(parseInt(getComputedStyle(slider).right), step);
  let max = parseInt(getComputedStyle(slider).width) - step;
  
  return {
    curentPosition: curent,
    step: step,
    maxPosition: max
  };
}

function setSliderPosition(curentPosition, step) {
  slider.style.right = curentPosition + step + 'px';
}

function checkSliderPosition(curentPosition, step) {
  let checkVal = curentPosition % step;
  if (checkVal != 0) {
    slider.style.right = 0;
    return 0;
  }  
  return curentPosition;
}

// - team-menu

const items = document.querySelector('#team-menu').querySelectorAll('.fourth__item');

items.forEach((item) => {
  item.addEventListener('click', (e) =>{
    e.preventDefault();
    items.forEach((item) => {
       if (e.currentTarget != item) {
        item.classList.remove('fourth__item--active');
       }
      });
    item.classList.toggle('fourth__item--active');
    });  
});
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
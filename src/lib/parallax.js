const parallax = document.querySelector('.parallax');
const layers = [];
const layersCount = 7;

for (let index = 1; index <= layersCount; index++) {
    const layer = document.createElement('li');

    layer.classList.add('parallax__item', 'parallax__item--layer' + index);
    layers.push(layer);
    parallax.appendChild(layer);
}

window.addEventListener('mousemove', (e) => {
    const initialX = window.innerWidth / 2 - e.pageX;
    const initialY = window.innerHeight / 2 - e.pageY;

    layers.forEach((layer, index) => {
        const divider = index / 100;
        const positionX = initialX * divider;
        const positionY = initialY * divider;

        layer.style.transform = `translate(${positionX}px, ${positionY}px)`;
    });
});

const layersArr = document.querySelectorAll('.parallax__item');

window.addEventListener('mousemove', (e) => {
    let initialX = window.innerWidth / 2 - e.pageX;
    let initialY = window.innerHeight / 2 - e.pageY;

    layersArr.forEach((layer, index) => {
        let divider = index / 100;
        let positionX = initialX * divider;
        let positionY = initialY * divider;

        layer.style.transform = `translate(${positionX}px, ${positionY}px)`;
    });
});
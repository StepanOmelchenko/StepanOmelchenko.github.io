const preloader = document.querySelector('.preloader');

if (preloader) {
    let percentageTotal = 0;
    const paths = [];
    const preloaderTitle = document.querySelector('.preloader__title');

    document.querySelectorAll('img').forEach((img) => {
        paths.push(img.src);
    });
    document.querySelectorAll('*').forEach((elem) => {
        const backGround = getComputedStyle(elem).getPropertyValue('background-image');

        if (backGround && backGround !== 'none') {
            paths.push(backGround.replace('url("', '').replace('")', ''));
        }
    });

    if (paths.length) {
        paths.forEach((path) => {
            imgLoader(path).then(() => {
                percentageTotal++;
                setPercentage(paths.length, percentageTotal);
            });
        });
    }

    function imgLoader(path) {
        return new Promise((resolve) => {
            let fakeImg = document.createElement('img');

            fakeImg.src = path;
            fakeImg.addEventListener('load', () => {
                resolve();
            });
            fakeImg.addEventListener('error', () => {
                resolve();
            });
        });
    }

    function setPercentage(total, current) {
        const percentage = Math.ceil(current / total * 100);

        preloaderTitle.innerText = percentage + '%';

        if (percentage >= 100) {
            preloader.classList.add('preloader--hide');
        }
    }
}

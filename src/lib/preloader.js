const preloader = document.querySelector('#preloader');

if (preloader) {
    let precentTotal = 0;
    let paths = [];
    let preloaterTitle = document.querySelector('#preloader-title');

    document.querySelectorAll('img').forEach((img) => {
        paths.push(img.src);
    });
    document.querySelectorAll('*').forEach((elem) => {
        let backGround = getComputedStyle(elem).getPropertyValue('background-image');

        if (backGround && backGround !== 'none') {
            paths.push(backGround.replace('url("', '').replace('")', ''));
        }
    });

    if (paths.length) {
        paths.forEach((path) => {
            imgLoader(path).then(() => {
                precentTotal++;
                setPrecent(paths.length, precentTotal);
            });
        });
    }

    function imgLoader(path) {
        return new Promise((resolve) => {
            let fakeImg = document.createElement('img');

            fakeImg.src = path;
            fakeImg.addEventListener('load', () => {
                resolve();
            })
            fakeImg.addEventListener('error', () => {
                resolve();
            });
        });
    }

    function setPrecent(total, current) {
        let precent = Math.ceil(current / total * 100);

        preloaterTitle.innerText = precent + '%';

        if (precent >= 100) {
            preloader.classList.add('preloader--hide');
        }
    }
}
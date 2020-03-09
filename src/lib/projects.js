const production = [
    {
        href: 'http://app.swapwallet.com',
        title: 'SWAP Wallet'
    },
    {
        href: 'https://dogovor24.ru',
        title: 'Договор 24'
    }
];
const pets = [
    {
        href: 'https://stepanomelchenko.github.io/portfolio/build/',
        title: 'Portfolio (adp.)',
    },
    {
        href: 'https://stepanomelchenko.github.io/burger/build/',
        title: 'BurgerShop (adp.)',
    },
    {
        href: 'https://stepanomelchenko.github.io/coworking/build/',
        title: 'Coworking',
    },
    {
        href: 'https://stepanomelchenko.github.io/airplanet/build/',
        title: 'Airplanet',
    }
];

createProjects('prod', production);
createProjects('pets', pets);

/**
* @param containerName: {string}
* @param projects: {array}: {href: string, title: string}
* */
function createProjects(containerName, projects) {
    const container = document.querySelector('.' + containerName);

    projects.forEach((project) => {
        const li = document.createElement('li');
        const link = document.createElement('a');

        li.classList.add('window__item');
        link.classList.add('window__link');
        link.href = project.href;
        link.text = project.title;
        link.setAttribute('target', '_blank');
        li.appendChild(link);
        container.appendChild(li);
    });
}

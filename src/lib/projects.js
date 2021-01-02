const production = [
    {
        href: 'http://app.swapwallet.com',
        title: 'SWAP Wallet (Vue, Vuex, TS)',
    },
    {
        href: 'https://dogovor24.ru',
        title: 'Договор 24 (Nuxt, Vue, Vuex, TS, Angular)',
    },
    {
        href: 'https://aerosoltech.ru',
        title: 'Aerosol tech (Angular, TS)',
    },
    {
        href: 'https://dglyphs.com/',
        title: 'dGlyphs (React)',
    },
];

createProjects('prod', production);
// createProjects('pets', pets);

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

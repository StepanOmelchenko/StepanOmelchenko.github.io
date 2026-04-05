const links = [
    {
        title: 'MAX',
        href: 'https://max.ru/u/f9LHodD0cOIe7Yz-hO32AjJtX3Tk2cd6kByj2m9MDxBqIpN1WEPUWiogmDA',
        prefix: '->',
    },
    {
        title: 'Почта',
        href: 'mailto:steve.omelchenko@yandex.ru',
        prefix: '->',
    },
    {
        title: 'Telegram',
        href: 'https://t.me/StepanOmelchenko',
        prefix: '->',
    },
    {
        title: 'Github',
        href: 'https://github.com/StepanOmelchenko',
        prefix: '->',
    },
    {
        title: 'Linkedin',
        href: 'https://www.linkedin.com/in/stepan-omelchenko',
        prefix: '->',
    },
];

const container = document.querySelector('.links');

links.forEach((item) => {
   const link = document.createElement('a');
   const li = document.createElement('li');
   const prefix = document.createElement('span');
   const title = document.createElement('span');

   title.textContent = item.title;
   prefix.classList.add('window__link-prefix');
   prefix.textContent = item.prefix;
   link.classList.add('window__link');
   link.href = item.href;
   link.setAttribute('target', '_blank');
   link.appendChild(prefix);
   link.appendChild(title);
   li.appendChild(link);
   container.appendChild(li);
});

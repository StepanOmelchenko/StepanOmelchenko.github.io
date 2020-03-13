const links = [
    {
        title: 'linkedin',
        href: 'https://www.linkedin.com/in/stepan-omelchenko',
        prefix: '->',
    },
    {
        title: 'telegram',
        href: 'https://t.me/StepanOmelchenko',
        prefix: '->',
    },
    {
        title: 'github',
        href: 'https://github.com/StepanOmelchenko',
        prefix: '->',
    }
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

const bodyElement = document.querySelector('body');
bodyElement.style.backgroundColor = '#e9e9e9';

const whiteBacknd = document.querySelector('.news');
whiteBacknd.style.backgroundColor = 'white';
whiteBacknd.style.maxWidth = '60rem';

const newsTitle = document.querySelector('h1');
newsTitle.classList.add('news__title');
newsTitle.textContent = 'Aktuální novinky';

const changeMsg = document.getElementById('zprava1');
changeMsg.classList.add('post--main');

const imgNew = document.getElementById('zprava3');
imgNew.src = 'images/zprava3-novy.jpg';

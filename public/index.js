'use-strict'


const section = window.Section;
const menu = window.Menu;
const form = window.Form;
const image = window.Image;
const title = window.Title;
const input = window.Input;

const menuItems = [
  'login',
  'reg',
  'game',
  'score'
];
const menuBlock = menu.Create(menuItems);

const loginFormBlock = form.Create('form', [
  input.Create('login', 'text', 'Enter login', '').el,
  input.Create('password', 'password', 'Enter password', '').el,
  input.Create('button', 'submit', '', 'Войти').el,
]);
const signUpFormBlock = form.Create('form', [
  input.Create('login', 'text', 'Enter login', '').el,
  input.Create('password', 'password', 'Enter password', '').el,
  input.Create('password', 'password', 'Re-enter password', '').el,
  input.Create('button', 'submit', '', 'Зарегистрироваться').el,
]);

const gameBlock = Block.Create('div', ['game__container']);
const gameImg = Image.Create('game__persona', 'img/vlad.png', 'Vlad');
const gameCounter = title.Create('span', ['game__counter'], '0');
gameBlock.append(gameImg.el);
gameBlock.append(gameCounter.el);

const scoreBlock = Block.Create('div', ['score__container']);

const menuSection = section.Create('menu', 'h1', 'Menu', menuBlock.el);
const loginSection = section.Create('login', 'h1', 'Login', loginFormBlock.el);
const regSection = section.Create('reg', 'h1', 'Sign-Up', signUpFormBlock.el);
const gameSection = section.Create('game', 'h1', 'Hello Game', gameBlock.el);
const scoreSection = section.Create('score', 'h1', 'Hello Score', scoreBlock.el);

document.getElementById('app').appendChild(menuSection.el);
document.getElementById('app').appendChild(loginSection.el);
document.getElementById('app').appendChild(regSection.el);
document.getElementById('app').appendChild(gameSection.el);
document.getElementById('app').appendChild(scoreSection.el);

const persona = document.getElementsByClassName('game__persona')[0];
const sections = document.getElementsByTagName('section');
const links = document.querySelectorAll('.menu__link');
const sectionsArray = Array.from(sections);
const linksArray = Array.from(links);

function linkClick(event) {
  event.preventDefault();
  sectionsArray.forEach(function (item) {
    const link = event.target.dataset.link;
    if (link === undefined) {
      return;
    }
    item.hidden = !item.classList.contains(link);
  })
}

linksArray.forEach(function (item) {
  item.addEventListener('click', linkClick);
});

persona.addEventListener('click', function (event) {
  let counter = document.getElementsByClassName('game__counter')[0];
  let textContent = counter.textContent;
  counter.textContent = parseInt(textContent) + 1;
});
'use-strict'

const sections = window.Sections;
const persona = document.getElementsByClassName('game__persona')[0];
const links = document.querySelectorAll('.menu__link');
const linksArray = Array.from(links);

function linkClick(event) {
  event.preventDefault();
  sections.forEach(function (item) {
    const link = event.target.dataset.link;
    if (link === undefined) {
      return;
    }
    item.style.display = !item.classList.contains(link) ? 'none': 'flex';
  })
}

linksArray.forEach(function (item) {
  item.addEventListener('click', linkClick);
});

persona.addEventListener('click', function (event) {
  let counter = document.getElementsByClassName('game__counter')[0];
  let textContent = counter.textContent;
  counter.textContent = parseInt(textContent, 10) + 1;
});
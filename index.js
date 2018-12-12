'use-strict'


const persona = document.getElementById('game__persona');
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
  let counter = document.getElementById('game__counter');
  let textContent = counter.textContent;
  counter.textContent = parseInt(textContent) + 1;
});
'use-strict'


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
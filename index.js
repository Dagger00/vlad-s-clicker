'use-strict'


const sections = document.getElementsByTagName('section');
const sectionsArray = Array.from(sections);

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

sectionsArray.forEach(function (item) {
  item.addEventListener('click', linkClick);
});


'use-strict'

const sections = window.Sections;


const links = document.querySelectorAll('.link');
const linksArray = Array.from(links);

linksArray.forEach(function (item) {
  item.addEventListener('click', linkClick);
});

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


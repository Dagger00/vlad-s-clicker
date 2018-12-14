(function () {
  "use strict";

  const Block = window.Block;
  const Title = window.Title;
  const Link = window.Link;

  class Section extends Block {
    static create(className, titleTag, title, innerElem) {
      const section = Block.create('section', className);
      const titleElement = Title.create(titleTag, ['title'], title);
      if (className[1] !== 'section_menu') {
        const link = Link.create('menu', ['link'], {'data-link': 'section_menu'}, 'Меню');
        section.append(link.el);
        section.el.style.display = 'none';
      }
      section.append(titleElement.el);
      section.append(innerElem);
      return new Section(section.el);
    }
  }
  window.Section = Section;
})();
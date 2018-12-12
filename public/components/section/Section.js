(function () {
  "use strict";

  const Block = window.Block;
  const Title = window.Title;
  const Link = window.Link;

  class Section extends Block {
    constructor(el) {
      super(el);
    }

    static create(className, titleTag, title, innerElem) {
      const section = Block.create('section', [className]);
      const titleElement = Title.create(titleTag, [className], title);
      if (className !== 'menu') {
        const link = Link.create('menu', ['menu__link'], {'data-link': 'menu'}, 'Меню');
        section.append(link.el);
        section.el.hidden = true;
      }
      section.append(titleElement.el);
      section.append(innerElem);
      return new Section(section.el);
    }
  }
  window.Section = Section;
})();
(function () {
  "use strict";
  const Block = window.Block;
  const Link = window.Link;

  class Nav extends Block {
    static create(elements = [], attributes = {}) {
      const list = Block.create('ul', ['nav'], attributes);
      elements.forEach(function (item) {
        let listItem = Block.create('li', ['nav__item']);
        let link = Link.create(item, ['link'], {'data-link': item}, item);
        listItem.append(link.el);
        list.append(listItem.el);
      });

      return new Nav(list.el);
    }
  }

  window.Nav = Nav;
})();
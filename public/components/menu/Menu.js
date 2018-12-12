(function () {
  "use strict";
  const Block = window.Block;
  const Link = window.Link;

  class Menu extends Block {
    constructor(el) {
      super(el)
    }

    static Create(elements = [], attributes = {}) {
      const list = Block.Create('ul', ['menu__item-list'], attributes);
      elements.forEach(function (item) {
        let listItem = Block.Create('li', ['menu__item']);
        let link = Link.Create(item, ['menu__link'], {'data-link': item}, item);
        listItem.append(link.el);
        list.append(listItem.el);
      });

      return new Menu(list.el);
    }
  }

  window.Menu = Menu;
})();
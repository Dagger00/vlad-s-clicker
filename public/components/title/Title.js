(function () {
  "use strict";
  const Block = window.Block;

  class Title extends Block {
    constructor(el) {
      super(el);
    }

    static create(tagName, classnames = [], text) {
      let element = document.createElement(tagName);
      classnames.forEach(function (item) {
        element.classList.add(item);
      });
      element.textContent = text;
      return new Block(element);
    }
  }

  window.Title = Title;
})();
(function () {
  "use strict";
  const Block = window.Block;

  class Link extends Block{
    constructor(el) {
      super(el);
    }

    static create(href, classes = [], attributes = {}, text) {
      const a = document.createElement('a');
      classes.forEach(function (item) {
        a.classList.add(item);
      });
      for(let attr in attributes) {
        a.setAttribute(attr, attributes[attr]);
      }
      a.setAttribute('href', href);
      a.textContent = text;
      return new Link(a);
    }

  }

  window.Link = Link;
})();
(function () {
    "use strict";

    class Block {

      constructor(el) {
        this.el = el;
      }

      static create(tagName = 'div', classes = [], attributes = {}) {
        const el = document.createElement(tagName);
        classes.forEach(function (item) {
          el.classList.add(item);
        });
        for (let attr in attributes) {
          el.setAttribute(attr, attributes[attr]);
        }
        return new Block(el);
      }

      hide() {
        this.el.setAttribute('hidden', true);
      }

      show() {
        this.el.removeAttribute('hidden');
      }

      append(elem) {
        this.el.appendChild(elem);
      }

      setText(text) {
        this.el.textContent = text;
      }

    }

    window.Block = Block;
  })();
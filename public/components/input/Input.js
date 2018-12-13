(function () {
  "use strict";
  const Block = window.Block;

  class Input extends Block {
    static create(name, type, placeholder, value) {
      let input = Block.create('input', [type === 'submit' ? 'form__button' : 'form__input'], {'name': name, 'type': type, 'placeholder': placeholder, 'value': value});
      return new Input(input.el);
    }
  }

  window.Input = Input;
})();
(function () {
  "use strict";
  const Block = window.Block;

  class Input extends Block {
    constructor(el) {
      super(el);
    }

    static Create(name, type, placeholder, value) {
      let input = Block.Create('input', [type === 'submit' ? 'form__button' : 'form__input'], {'name': name, 'type': type, 'placeholder': placeholder, 'value': value});
      return new Input(input.el);
    }
  }

  window.Input = Input;
})();
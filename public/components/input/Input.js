(function () {
  "use strict";
  const Block = window.Block;

  class Input extends Block {
    constructor(el) {
      super(el);
    }

    static Create(className, name, type, placeholder, value) {
      let input = Block.Create('input', [className], {'name': name, 'type': type, 'placeholder': placeholder, 'value': value});
      return new Input(input.el);
    }

  }

  window.Input = Input;
})();
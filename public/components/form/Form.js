(function () {
  "use strict";

  const Block = window.Block;
  const Input = window.Input;

  class Form extends Block {
    constructor(el) {
      super(el);
    }

    static Create(classname, inputs = [],) {
      let form = Block.Create('form', [classname]);

      inputs.forEach(function (input) {
        form.append(Input.Create(input.className, input.name, input.type, input.placeholder, input.value).el);
      });
      return new Form(form.el)
    }
  }

  window.Form = Form;

})();
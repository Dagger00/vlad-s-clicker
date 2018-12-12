(function () {
  "use strict";

  const Block = window.Block;
  const Input = window.Input;

  class Form extends Block {
    constructor(el) {
      super(el);
    }

    static create(classname, inputs = [],) {
      let form = Block.create('form', [classname]);

      inputs.forEach(function (input) {
        form.append(Input.create(input.name, input.type, input.placeholder, input.value).el);
      });
      return new Form(form.el)
    }
  }

  window.Form = Form;

})();
(function () {
  "use strict";

  const Block = window.Block;
  const Input = window.Input;

  class Form extends Block {
    static create(classname, inputs = [],) {
      let form = Block.create('form', [classname]);

      inputs.forEach(function (input) {
        const inp = input.el;
        form.append(Input.create(inp.name, inp.type, inp.placeholder, inp.value).el);
      });
      return new Form(form.el)
    }
  }

  window.Form = Form;

})();
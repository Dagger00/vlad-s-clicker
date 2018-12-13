(function () {
  "use strict";

  const form = window.Form;
  const input = window.Input;
  const section = window.Section;

  const signUpFormBlock = form.create('form', [
    input.create('login', 'text', 'Enter login', ''),
    input.create('password', 'password', 'Enter password', ''),
    input.create('password', 'password', 'Re-enter password', ''),
    input.create('button', 'submit', '', 'Зарегистрироваться'),
  ]);

  window.SignUpPage = section.create('reg', 'h1', 'Sign-Up', signUpFormBlock.el);
})();
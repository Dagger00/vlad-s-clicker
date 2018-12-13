(function () {
  "use strict";

  const input = window.Input;
  const form = window.Form;
  const section = window.Section;

  const loginFormBlock = form.create('form', [
    input.create('login', 'text', 'Enter login', ''),
    input.create('password', 'password', 'Enter password', ''),
    input.create('button', 'submit', '', 'Войти'),
  ]);

  window.LoginPage = section.create('login', 'h1', 'Login', loginFormBlock.el);
})();
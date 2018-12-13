(function () {
  "use strict";

  const input = window.Input;
  const Block = window.Block;
  const form = window.Form;
  const section = window.Section;
  const authService = window.AuthService;

  class SignUpPage extends Block {
    static create() {
      const elements = [
        input.create('login', 'text', 'Придумайте логин', ''),
        input.create('name', 'text', 'Введите имя', ''),
        input.create('password', 'password', 'Придумайте пароль', ''),
        input.create('password2', 'password', 'Повторите пароль', ''),
        input.create('button', 'submit', '', 'Зарегистрироваться'),
      ];

      const signUpFormBlock = form.create('form', elements);

      return new SignUpPage(section.create('reg', 'h1', 'Sign-Up', signUpFormBlock.el).el);
    }

    initEventListeners() {
      this.el.addEventListener('submit', function (e) {
        e.preventDefault();

        const inputs = document.querySelectorAll('.reg .form__input');
        const array = {
          login: inputs[0].value,
          name: inputs[1].value,
          pwd: inputs[2].value,
          pwd2: inputs[3].value,
        };
        authService.signUp(JSON.stringify(array), function (data) {
          const responseData = JSON.parse(data);
          alert('Поздравляю, ты зареган. Логин: ' + responseData.login + '  Имя: ' + responseData.name);
        });
      }.bind(this));
    }
  }

  window.SignUpPage = SignUpPage.create();
})();
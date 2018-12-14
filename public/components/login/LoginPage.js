(function () {
  "use strict";

  const input = window.Input;
  const Block = window.Block;
  const form = window.Form;
  const section = window.Section;
  const authService = window.AuthService;

  class LoginPage extends Block {
    static create() {
      const elements = [
        input.create('login', 'text', 'Enter login', 'k'),
        input.create('password', 'password', 'Enter password', 'k'),
        input.create('button', 'submit', '', 'Войти'),
      ];
      const loginFormBlock = form.create('form', elements);
      return new LoginPage(section.create(['section', 'section_login'], 'h1', 'Login', loginFormBlock.el).el);
    }

    initEventListeners() {
      this.el.addEventListener('submit', function (e) {
        e.preventDefault();

        const inputs = document.querySelectorAll('.login .form__input');
        const array = {
          login: inputs[0].value,
          pwd: inputs[1].value
        };
        authService.login(JSON.stringify(array), function (data) {
          const responseData = JSON.parse(data);
          if (responseData.err) {
            alert('Хуйня братка');
          } else {
            alert('Залогинен! Молодцом, начинай играть!');
            document.querySelector('.link[data-link=login]').style.display = 'none';
            document.querySelector('.link[data-link=reg]').style.display = 'none';
          }
        });
      }.bind(this));
    }
  }

  window.LoginPage = LoginPage.create();
})();
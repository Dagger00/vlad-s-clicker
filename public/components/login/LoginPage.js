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

        const inputs = document.querySelectorAll('.section_login .form__input');
        const array = {
          login: inputs[0].value,
          pwd: inputs[1].value
        };
        authService.login(JSON.stringify(array), function (data) {
          const responseData = JSON.parse(data);
          if (responseData.err) {
            alert(responseData.err);
          } else {
            document.querySelector('.link[data-link=section_login]').style.display = 'none';
            document.querySelector('.link[data-link=section_reg]').style.display = 'none';
            const sections = document.querySelectorAll('section');
            Array.from(sections).forEach(function (item) {
              if (item.classList.contains('section_menu')) {
                item.style.display = 'flex';
              } else {
                item.style.display = 'none';
              }
            })
          }
        });
      }.bind(this));
    }
  }

  window.LoginPage = LoginPage.create();
})();
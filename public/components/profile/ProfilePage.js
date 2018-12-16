(function () {
  "use strict";
  const nav = window.Nav;
  const input = window.Input;
  const Block = window.Block;
  const form = window.Form;
  const section = window.Section;


  class LoginPage extends Block {
    static create() {
      const elements = [
        input.create('name', 'text', 'Введите своё имя', 'k'),
        input.create('password', 'password', 'Новый пароль', 'k'),
        input.create('password2', 'password', 'Повторите пароль', ''),
        input.create('button', 'submit', '', 'Сохранить'),
      ];
      const loginFormBlock = form.create('form', elements);
      return new LoginPage(section.create(['section', 'section_login'], 'h1', 'Login', loginFormBlock.el).el);
    }
  }

  const menuItems = [
    'login',
    'reg',
    'game',
    'score'
  ];

  const menuBlock = nav.create(menuItems);

  window.MenuPage = section.create(['section', 'section_menu'], 'h1', 'Menu', menuBlock.el);

})();
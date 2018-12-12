(function () {
    const block = window.Block;
    const section = window.Section;
    const menu = window.Menu;
    const form = window.Form;
    const image = window.Image;
    const title = window.Title;
    const input = window.Input;

    const menuItems = [
      'login',
      'reg',
      'game',
      'score'
    ];
    const menuBlock = menu.create(menuItems);

    const loginFormBlock = form.create('form', [
      input.create('login', 'text', 'Enter login', '').el,
      input.create('password', 'password', 'Enter password', '').el,
      input.create('button', 'submit', '', 'Войти').el,
    ]);
    const signUpFormBlock = form.create('form', [
      input.create('login', 'text', 'Enter login', '').el,
      input.create('password', 'password', 'Enter password', '').el,
      input.create('password', 'password', 'Re-enter password', '').el,
      input.create('button', 'submit', '', 'Зарегистрироваться').el,
    ]);

    const gameBlock = block.create('div', ['game__container']);
    const gameImg = image.create('game__persona', 'img/vlad.png', 'Vlad');
    const gameCounter = title.create('span', ['game__counter'], '0');
    gameBlock.append(gameImg.el);
    gameBlock.append(gameCounter.el);

    const scoreBlock = block.create('div', ['score__container']);

    const menuSection = section.create('menu', 'h1', 'Menu', menuBlock.el);
    const loginSection = section.create('login', 'h1', 'Login', loginFormBlock.el);
    const regSection = section.create('reg', 'h1', 'Sign-Up', signUpFormBlock.el);
    const gameSection = section.create('game', 'h1', 'Hello Game', gameBlock.el);
    const scoreSection = section.create('score', 'h1', 'Hello Score', scoreBlock.el);

    const sections = [];
    sections.push(menuSection.el);
    sections.push(loginSection.el);
    sections.push(regSection.el);
    sections.push(gameSection.el);
    sections.push(scoreSection.el);

    document.getElementById('app').appendChild(menuSection.el);
    document.getElementById('app').appendChild(loginSection.el);
    document.getElementById('app').appendChild(regSection.el);
    document.getElementById('app').appendChild(gameSection.el);
    document.getElementById('app').appendChild(scoreSection.el);

    window.Sections = sections;
  }
)();
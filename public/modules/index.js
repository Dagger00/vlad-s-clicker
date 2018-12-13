(function () {
    const reg = window.SignUpPage;
    const login = window.LoginPage;
    const menu = window.MenuPage;
    const game = window.GamePage;
    const score = window.ScorePage;


    const sections = [menu.el, login.el, reg.el, game.el, score.el];

    document.getElementById('app').appendChild(menu.el);
    document.getElementById('app').appendChild(login.el);
    document.getElementById('app').appendChild(reg.el);
    document.getElementById('app').appendChild(game.el);
    document.getElementById('app').appendChild(score.el);

    window.Sections = sections;
  }
)();
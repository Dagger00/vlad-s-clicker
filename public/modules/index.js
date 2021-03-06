(function () {
  "use strict";

  const reg = window.SignUpPage;
  const login = window.LoginPage;
  const menu = window.MenuPage;
  const game = window.GamePage;
  const score = window.ScorePage;

  const sections = [menu.el, login.el, reg.el, game.el, score.el];
  document.getElementById('app').appendChild(menu.el);

  const authService = window.AuthService;
  authService.checkAuth(function (data) {
    const responseData = JSON.parse(data);
    if (!responseData.err) {
      const links = document.querySelectorAll('.link');
      Array.from(links).forEach(function (item) {
        if (item.getAttribute('data-link') === 'section_login' || item.getAttribute('data-link') === ('section_reg')) {
          item.style.display = 'none';
        }
      })
    }
  });

  document.getElementById('app').appendChild(login.el);
  document.getElementById('app').appendChild(reg.el);
  document.getElementById('app').appendChild(game.el);
  document.getElementById('app').appendChild(score.el);

  login.initEventListeners();
  reg.initEventListeners();
  game.initEventListeners();

  window.Sections = sections;
})();
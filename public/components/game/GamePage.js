(function () {
  "use strict";

  const block = window.Block;
  const image = window.Image;
  const title = window.Title;
  const Block = window.Block;
  const section = window.Section;
  const gameService = window.GameService;
  const authService = window.AuthService;

  class GamePage extends Block {
    static create() {
      const gameBlock = block.create('div', ['game__container']);
      const gameImg = image.create('game__persona', 'img/vlad.png', 'Vlad');
      const gameCounter = title.create('span', ['game__counter'], '0');
      const gameExit = title.create('button', ['game__exit'], 'Выйти из игры');
      gameBlock.append(gameExit.el);
      gameBlock.append(gameImg.el);
      gameBlock.append(gameCounter.el);
      return new GamePage(section.create('game', 'h1', 'Hello Game', gameBlock.el).el);
    }

    initEventListeners() {
      const exit = document.querySelector('.game__exit');
      exit.addEventListener('click', function (event) {
        authService.logOut(function (data) {
          const responseData = JSON.parse(data);
          if (responseData.err) {
            alert(responseData.err);
          } else {
            document.querySelector('.game h1').textContent = 'Пока! ' + responseData.name;
            const links = document.querySelectorAll('.nav .link');
            Array.from(links).forEach(function (item) {
              item.style.display = 'block';
            })
          }
        });

      });

      const persona = document.getElementsByClassName('game__persona')[0];
      persona.addEventListener('click', function (event) {
        gameService.getKek(function (data) {
          const responseData = JSON.parse(data);
          if (responseData.err) {
            alert('Не гражданин! Залогинься');
          } else {
            document.querySelector('.game h1').textContent = 'Привет ' + responseData.name;
          }
        });
        const counter = document.getElementsByClassName('game__counter')[0];
        const textContent = counter.textContent;
        counter.textContent = parseInt(textContent, 10) + 1;
      });
    }
  }


  window.GamePage = GamePage.create();
})();
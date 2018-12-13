(function () {
  "use strict";

  const block = window.Block;
  const image = window.Image;
  const title = window.Title;
  const Block = window.Block;
  const section = window.Section;
  const gameService = window.GameService;

  class GamePage extends Block {
    static create() {
      const gameBlock = block.create('div', ['game__container']);
      const gameImg = image.create('game__persona', 'img/vlad.png', 'Vlad');
      const gameCounter = title.create('span', ['game__counter'], '0');
      gameBlock.append(gameImg.el);
      gameBlock.append(gameCounter.el);
      return new GamePage(section.create('game', 'h1', 'Hello Game', gameBlock.el).el);
    }

    initEventListeners() {
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
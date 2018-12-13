(function () {
  "use strict";

  const block = window.Block;
  const image = window.Image;
  const title = window.Title;
  const section = window.Section;

  const gameBlock = block.create('div', ['game__container']);
  const gameImg = image.create('game__persona', 'img/vlad.png', 'Vlad');
  const gameCounter = title.create('span', ['game__counter'], '0');
  gameBlock.append(gameImg.el);
  gameBlock.append(gameCounter.el);

  window.GamePage = section.create('game', 'h1', 'Hello Game', gameBlock.el);
})();
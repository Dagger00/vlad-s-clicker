(function () {
  "use strict";

  const block = window.Block;
  const section = window.Section;

  const scoreBlock = block.create('div', ['score__container']);

  window.ScorePage = section.create(['section', 'section_score'], 'h1', 'Hello Score', scoreBlock.el);
})();
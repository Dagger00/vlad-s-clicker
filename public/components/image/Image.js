(function () {
  "use strict";
  
  const Block = window.Block;
  
  class Image extends Block {
    constructor(el) {
      super(el);
    }
    
    static Create(className, src, alt) {
      const img = Block.Create('img', [className], {'src': src, 'alt': alt});
      return new Image(img.el);
    }
  }

  window.Image = Image;
})();
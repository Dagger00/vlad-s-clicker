(function () {
  "use strict";
  const nav = window.Nav;
  const section = window.Section;

  const menuItems = [
    'login',
    'reg',
    'game',
    'score'
  ];

  const menuBlock = nav.create(menuItems);

  window.MenuPage = section.create(['section', 'section_menu'], 'h1', 'Menu', menuBlock.el);

})();
(function () {
  "use strict";

  const http = window.HttpService;

  class GameService {
    static getKek(callback) {
      return http.get('game', callback);
    }
  }

  window.GameService = GameService;
})();
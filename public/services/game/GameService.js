(function () {
  "use strict";

  const http = window.HttpService;

  class GameService {
    static getKek(callback) {
      return http.get('check-auth', callback);
    }
  }

  window.GameService = GameService;
})();
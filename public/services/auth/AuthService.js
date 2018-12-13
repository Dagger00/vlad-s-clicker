(function () {
  "use strict";

  const http = window.HttpService;

  class AuthService {
    static login(data, callback) {
      return http.post('login', data, callback);
    }
    static signUp(data, callback) {
      return http.post('reg', data, callback);
    }
  }

  window.AuthService = AuthService;
})();
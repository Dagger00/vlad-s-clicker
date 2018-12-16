(function () {
  "use strict";

  const http = window.HttpService;

  class AuthService {
    static login(data, callback) {
      return http.post('login', data, callback);
    }
    static logOut(callback) {
      return http.del('login', callback);
    }
    static signUp(data, callback) {
      return http.post('reg', data, callback);
    }
    static checkAuth(callback) {
      return http.get('check-auth', callback);
    }
  }

  window.AuthService = AuthService;
})();
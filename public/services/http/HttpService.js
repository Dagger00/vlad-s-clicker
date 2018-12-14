(function () {
  "use strict";

  class HttpService {
    static get(url, callback) {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          callback(xhr.response);
        }
      };
      xhr.send();
    }
    static post(url, data, callback) {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', url, true);
      xhr.setRequestHeader('Content-type', 'application/json');
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          callback(xhr.response);
        }
      };
      xhr.send(data);
    }
    static del(url, callback) {
      const xhr = new XMLHttpRequest();
      xhr.open('DELETE', url, true);
      xhr.setRequestHeader('Content-type', 'application/json');
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          callback(xhr.response);
        }
      };
      xhr.send();
    }
  }

  window.HttpService = HttpService;
})();
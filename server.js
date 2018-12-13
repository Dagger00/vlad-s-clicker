"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const port = process.env.PORT;
const PORT = port === undefined ? 8000 : port;
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
const users = [
  {
    id: 1,
    login: 'k',
    name: 'Ваня Пупкин',
    pwd: 'k',
  }
];

app.post('/login', (req, resp) => {

  const login = req.body.login;
  const pwd = req.body.pwd;
  let error = true;

  users.forEach(function (item) {
    if (item.login === login && item.pwd === pwd) {

      const payload = {
        "iss": "kek",
        "login": login,
        "name": item.name,
      };

      const token = jwt.sign(payload, 'kek', {expiresIn: '2 days'});
      error = false;
      resp.statusCode = 200;
      resp.cookie('jwt', token, {httpOnly: true, maxAge: 900000});
      resp.json({
        token: token
      })
    }
  });
  if (error) {
    resp.statusCode = 400;
    resp.json({
      err: 'Nevernie dannie'
    })
  }
});
app.post('/reg', (req, resp) => {
  if (req.body.login !== users[0].name && req.body.pwd === req.body.pwd2) {
    const newUser = {
      login: req.body.login,
      name: req.body.name,
      pwd: req.body.pwd,
    };
    users.push(newUser);

    const payload = {
      "iss": "kek",
      "login": req.body.login,
      "name": req.body.name,
    };

    const token = jwt.sign(payload, 'kek', {expiresIn: '2 days'});
    resp.statusCode = 200;
    resp.cookie('jwt', token, {httpOnly: true, maxAge: 900000});
    resp.json({
      login: newUser.login,
      name: newUser.name,
    })
  } else {
    resp.statusCode = 400;
    resp.json({
      err: 'Пользователь существует'
    })
  }
});
app.get('/game', (req, resp) => {
  const cookie = req.cookies.jwt;

  if (cookie) {
    jwt.verify(cookie, 'kek', function (err, decoded) {
      if (err) {
        resp.statusCode = 400;
        resp.json({
          err: 'Nevernie dannie'
        })
      }
      resp.statusCode = 200;
      resp.json({name: decoded.name})
    });
  } else {
    resp.statusCode = 401;
    resp.json({
      err: 'Unauthorized'
    })
  }
});

app.listen(PORT);
console.log('Server started at port:', PORT);

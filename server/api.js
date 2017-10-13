const api = require('express')();

let cnt = 10;

api.get('/food',(req, res) => {
    res.setHeader('Content-Type', 'application/json');
    if (!cnt) {
      res.send(JSON.stringify({error:'error'}));
      return;
    }
    cnt--;
    res.send(JSON.stringify({food:'bread'}));
});

api.get('/drink',(req, res) => {
    res.setHeader('Content-Type', 'application/json');
    if (!cnt) {
      res.send(JSON.stringify({error:'error'}));
      return;
    }
    cnt--;
    res.send(JSON.stringify({drink:'cola'}));
});

api.get('/tv',(req, res) => {
    res.setHeader('Content-Type', 'application/json');
    if (!cnt) {
      res.send(JSON.stringify({error:'error'}));
      return;
    }
    cnt--;
    res.send(JSON.stringify({tv:'samsung'}));
});

module.exports = api;

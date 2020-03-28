const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');
const SerieController = require('./controllers/SerieController');
const SessionController = require('./controllers/SessionController');

routes.post('/sessions', SessionController.create);

routes.post('/users', UserController.create);

routes.post('/series', SerieController.create);

module.exports = routes;
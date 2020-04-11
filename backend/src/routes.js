const express = require('express');
const routes = express.Router();
const authMiddleware = require('./middlewares/auth');

const UserController = require('./controllers/UserController');
const SerieController = require('./controllers/SerieController');
const SessionController = require('./controllers/SessionController');

routes.post('/sessions', SessionController.create);

routes.use(authMiddleware);
routes.post('/users', UserController.create);

routes.post('/series', SerieController.create);

module.exports = routes;
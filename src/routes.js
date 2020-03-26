const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes
  .route('/sessions')
  .post(SessionController.create);

routes
  .route('/ongs')
  .get(OngController.index)
  .post(OngController.create);

routes
  .route('/profile')
  .get(ProfileController.index);

routes
  .route('/incidents')
  .get(IncidentController.index)
  .post(IncidentController.create);

routes
  .route('/incidents/:id')
  .delete(IncidentController.delete);

module.exports = routes;

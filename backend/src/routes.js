const Router = require('express');
const VehicleController = require('./app/controllers/VehicleController');

const routes = new Router();

routes.get('/vehicles', VehicleController.index)

module.exports = routes;
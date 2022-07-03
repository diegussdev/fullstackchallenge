const Router = require('express');
const VehicleController = require('./app/controllers/VehicleController');

const routes = new Router();

routes.post('/vehicles', VehicleController.store)
routes.get('/vehicles', VehicleController.index)
routes.get('/vehicles/:id', VehicleController.find)
routes.put('/vehicles/:id', VehicleController.update)
routes.delete('/vehicles/:id', VehicleController.delete)

module.exports = routes;
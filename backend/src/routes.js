const Router = require('express');

const routes = new Router();

routes.get('/', (req, res) => {
    res.send('Server Ok!')
})

module.exports = routes;
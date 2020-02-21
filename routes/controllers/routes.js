const routes = require('express').Router();
const userControlerRoutes = require('./User');
routes.use('/', userControlerRoutes)
module.exports = routes
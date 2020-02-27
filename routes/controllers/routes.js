const routes = require('express').Router();
const userControlerRoutes = require('./User');
const questionController = require("./question");
routes.use('/', userControlerRoutes);
routes.use('/question', questionController);
module.exports = routes;
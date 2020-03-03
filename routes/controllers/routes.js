const routes = require('express').Router();
const userControlerRoutes = require('./User');
const questionController = require("./question");
const templateCtrl = require("./template");
routes.use('/', userControlerRoutes);
routes.use('/question', questionController);
routes.use('/template', templateCtrl);
module.exports = routes;
const qRouteModule = require('express').Router();
const qApi = require('../../apiController/question');
qRouteModule.get('/', (req, res) => {
    res.send('Api running...');
});
qRouteModule.get('/all', (req, res) => {
    qApi.getAll().then(success => {
        res.send(success);
    }).catch(error => {
        res.status(500).send(error);
    });
});
qRouteModule.get('**', (req, res) => {
    res.send('404');
});

module.exports = qRouteModule;
const qRouteModule = require('express').Router();
const qApi = require('../../apiController/question');
qRouteModule.get('/', (req, res) => {
    res.send('Api running...');
});
qRouteModule.get('/all', (req, res) => {
    qApi.getAll().then(success => {
        res.status(200).send(
            {
                code:200,
                status:"OK",
                data:success
            });
    }).catch(error => {
        res.status(500).send(error);
    });
});
qRouteModule.post('/postqna', (req, res) => {
    if (req.body) {
        qApi.postqna(req.body.data).then(success => {
            res.send(success);
        }).catch(error => {
            res.status(500).send(error);
        });
    } else {
        res.status(500).send("Invalid");
    }
});
qRouteModule.get('**', (req, res) => {
    res.send('404');
});

module.exports = qRouteModule;
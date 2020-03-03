const tRouteModule = require('express').Router();
const tApi = require('../../apiController/template');
tRouteModule.get('/', (req, res) => {
    res.send('Api running...');
});
tRouteModule.get('/all', (req, res) => {
    tApi.getAll().then(success => {
        res.status(200).send(
            {
                code: 200,
                status: "OK",
                data: success
            });
    }).catch(error => {
        res.status(500).send(error);
    });
});
tRouteModule.post('/add-template', (req, res) => {
    if (req.body) {
        tApi.addTemplate(req.body).then(success => {
            res.send(success);
        }).catch(error => {
            res.status(500).send(error);
        });
    } else {
        res.status(500).send("Invalid");
    }
});
tRouteModule.post('/del-template', (req, res) => {
    if (req.body) {
        tApi.delTemplate(req.body).then(success => {
            res.send(success);
        }).catch(error => {
            res.status(500).send(error);
        });
    } else {
        res.status(500).send("Invalid");
    }
});

tRouteModule.get('**', (req, res) => {
    res.send('404');
});

module.exports = tRouteModule;
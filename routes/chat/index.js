const cRouteModule = require('express').Router();
const cApi = require('../../apiController/chat');
cRouteModule.get('/', (req, res) => {
    res.send('Api running...');
});
cRouteModule.post('/getAns', (req, res) => {
    cApi.getAns(req.body).then(x => {
        res.status(200).send({
            code: 200,
            status: "OK",
            data: x
        });
    }).catch(er => {
        res.status(200).send({
            code: 500,
            status: er,
            data: {}
        });
    })
})
module.exports = cRouteModule;
const templateRoutes = require('express').Router();
const path = require('path');
const pagePath = './web/pages/Question';

templateRoutes.get('/', (req, res) => {
    res.sendFile(path.resolve(`${pagePath}/index.html`));
});
templateRoutes.get('/all', (req, res) => {
    res.sendFile(path.resolve(`${pagePath}/allquestionsadded.html`));
});
module.exports = templateRoutes;
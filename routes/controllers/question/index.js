const userControlerRoutes = require('express').Router();
const path = require('path');
const pagePath = './web/pages/Question';

userControlerRoutes.get('/', (req, res) => {
    res.sendFile(path.resolve(`${pagePath}/index.html`));
});
userControlerRoutes.get('/all', (req, res) => {
    res.sendFile(path.resolve(`${pagePath}/allquestionsadded.html`));
});
module.exports = userControlerRoutes;
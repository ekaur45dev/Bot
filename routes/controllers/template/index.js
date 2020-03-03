const userControlerRoutes = require('express').Router();
const path = require('path');
const pagePath = './web/pages/template';

userControlerRoutes.get('/', (req, res) => {
    res.sendFile(path.resolve(`${pagePath}/index.html`));
});
userControlerRoutes.get('/all', (req, res) => {
    res.sendFile(path.resolve(`${pagePath}/addtemplate.html`));
});
module.exports = userControlerRoutes;
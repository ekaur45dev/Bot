const userControlerRoutes = require('express').Router();
const path = require('path');
const pagePath = './web/pages/User';
userControlerRoutes.get('/', (req, res) => {
    res.redirect("/question");
    //res.sendFile(path.resolve(`${pagePath}/index.html`));
})
module.exports = userControlerRoutes;
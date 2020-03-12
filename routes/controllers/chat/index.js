const chatRoutes = require('express').Router();
const path = require('path');
const pagePath = './web/pages/chat';

chatRoutes.get('/', (req, res) => {
    res.sendFile(path.resolve(`${pagePath}/index.html`));
});

module.exports = chatRoutes;
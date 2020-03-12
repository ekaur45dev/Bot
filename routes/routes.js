/**
 * Api Routes
 * */
const routes = require('express').Router();
const usersRoutes = require('./users');
const questionRoutes = require('./question');
const templateRoute = require('./template');
const chatModule = require('./chat');
routes.get('/',(req,res)=>{
    res.status(200).json({message:"ok"});
})
routes.use('/users', usersRoutes)
routes.use('/question', questionRoutes);
routes.use('/template', templateRoute);
routes.use('/chat', chatModule);

module.exports=routes
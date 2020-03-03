const routes = require('express').Router();
const usersRoutes = require('./users');
const questionRoutes = require('./question');
const templateRoute = require('./template');
routes.get('/',(req,res)=>{
    res.status(200).json({message:"ok"});
})
routes.use('/users', usersRoutes)
routes.use('/question', questionRoutes);
routes.use('/template', templateRoute);

module.exports=routes
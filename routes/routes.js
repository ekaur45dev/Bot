const routes = require('express').Router();
const usersRoutes = require('./users');
const questionRoutes = require('./question');
routes.get('/',(req,res)=>{
    res.status(200).json({message:"ok"});
})
routes.use('/users', usersRoutes)
routes.use('/question', questionRoutes);

module.exports=routes
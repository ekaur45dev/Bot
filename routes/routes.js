const routes = require('express').Router();
const usersRoutes=require('./users');
routes.get('/',(req,res)=>{
    res.status(200).json({message:"ok"});
})
routes.use('/users',usersRoutes)


module.exports=routes
const mysql = require("./../../db/mysqladapter");
const mongdb=require("../../db/mongodbadapter");
var questionModule = {};
questionModule.getAll = () => {
    return new Promise((resolve, reject) => {
        mongdb.find({},"QNA").then(results=>{
            resolve(results)
        }).catch(err=>{reject(err)});
        // mysql.Select("select * from product").then(result => {
        //     resolve(result);
        // }).catch(error => {
        //     reject(error);
        // });
    });
}
questionModule.postqna = (data) => {
    return new Promise((resolve, reject) => {
        mongdb.insertMany(data,"QNA").then(success=>{
            resolve("Record has been inserted");
        }).catch(err=>{
            reject(err);
        });
    });
}

module.exports = questionModule;
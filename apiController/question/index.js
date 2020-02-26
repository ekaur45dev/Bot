const mysql = require("./../../db/mysqladapter");
var questionModule = {};
questionModule.getAll = () => {
    return new Promise((resolve, reject) => {
        mysql.Select("select * from product").then(result => {
            resolve(result);
        }).catch(error => {
            reject(error);
        });
    });
}
module.exports = questionModule;
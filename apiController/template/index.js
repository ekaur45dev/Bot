const mysql = require("./../../db/mysqladapter");
const mongdb = require("../../db/mongodbadapter");
var async = require("async");
var templateModule = {};
templateModule.getAll = () => {
    return new Promise((resolve, reject) => {
        mysql.Select(`select * from template`).then(suc => {
            if (suc.length > 0) {
                resolve(suc);
            } else {
                resolve([]);
            }
        }).catch(er => {
            reject(er);
        })
    });
}
templateModule.addTemplate = (data) => {
    return new Promise((resolve, reject) => {
        var query = `insert into template(name)values('${data.name}')`;
        mysql.Query(query).then(suc => {
            resolve("success");
        }).catch(err => {
            reject(err);
        });
    });
}
templateModule.delTemplate = (data) => {
    return new Promise((resolve, reject) => {
        var query = `delete from template where id='${data.id}'`;
        mysql.Query(query).then(suc => {
            resolve("success");
        }).catch(err => {
            reject(err);
        });
    });
}

module.exports = templateModule;
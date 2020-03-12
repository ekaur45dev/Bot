const mysql = require("./../../db/mysqladapter");
var async = require("async");
var chatModule = {};
chatModule.getAns = (data) => {
    return new Promise((resolve, reject) => {
        if (!(data.q&&data.tid)) {
            reject("Please provide both question and template.");
        } else {
            mysql.Select(`select * from question q join answer a on a.QId=q.id where q.tempId=${data.tid} and q.name='${data.q}'`).then(
                suc => {
                    if (suc.length > 0) {
                        resolve(suc);
                    } else {
                        resolve([]);
                    }
                }
            ).catch(
                err => {
                    reject(err);
                }
            );
        }
    });
    
}

module.exports = chatModule;

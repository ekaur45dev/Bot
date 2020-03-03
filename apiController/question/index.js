const mysql = require("./../../db/mysqladapter");
const mongdb = require("../../db/mongodbadapter");
var async = require("async");
var questionModule = {};
questionModule.getAll = () => {
    return new Promise((resolve, reject) => {
        //mongdb.find({},"QNA").then(results=>{
        //    resolve(results)
        //}).catch(err=>{reject(err)});
        mysql.Select("call GetAllQnA()").then(result => {
            if (result[0]["length"] > 0) {
                var re = result[0];
                resolve(re);
                //var req_res = re.reduce(function (obj, item) {
                //    obj["question"] = [];
                //    obj["question"]
                //    obj[item.name] = obj[item.name] || [];
                //    obj[item.name].push(item.answer);
                //    return obj;
                //}, {});
                //resolve(req_res);
            } else {
                reject("No Data");
            }

        }).catch(error => {
            reject(error);
        });
    });
}
questionModule.postqna = (data) => {
    return new Promise((resolve, reject) => {
        var curOut = 1;
        async.forEach(data, (value, key, callback) => {
            var query = "call bot_db.insertQuestion('" + value["question"] + "');";
            mysql.InsertUpdateDelete(query).then(result => {
                var id = result[0][0]["id"];
                var curIn = 1;
                async.forEach(value["answers"], (aval, akey) => {
                    mysql.InsertUpdateDelete(" insert into bot_db.answer(QId, answer) values('" + id + "', '" + aval + "'); ").then(x => {
                        if (curOut >= data.length && curIn >= value.answers.length) {
                            resolve("Data inserted");
                        }
                        curIn++;
                    }).catch(error1 => {
                        reject(error1);
                    });
                });
                curOut++;
            }).catch(error => {
                reject(error);
            });
        }).finally(completed => {
            resolve("Data inserted.");
        });
        //data.forEach((d, i) => {
        //    var query = "call bot_db.insertQuestion('" + data[i]["question"] + "');";
        //    mysql.InsertUpdateDelete(query).then(result => {
        //        var id = result[0][0]["id"];
        //        q = "";
        //        data[i]["answers"].forEach(x => {
        //            mysql.InsertUpdateDelete(" insert into bot_db.answer(QId, answer) values('" + id + "', '" + x + "'); ").then(x => {
                        
        //            }).catch(error1 => {
        //                reject(error1);
        //            });
        //        });
        //    }).catch(error => {
        //        reject(error);
        //    });
        //});

        //mongdb.insertMany(data,"QNA").then(success=>{
        //    resolve("Record has been inserted");
        //}).catch(err=>{
        //    reject(err);
        //});
    });
}

questionModule.delQ = (data) => {
    return new Promise((resolve, reject) => {
        var query = `delete from question where name='${data.name}'`;
        mysql.Select(query).then(suc => {
            resolve("deleted");
        }).catch(re => {
            reject(re);
        });
    });
}

module.exports = questionModule;
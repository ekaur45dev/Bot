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
questionModule.postqna = (data) => {
    return new Promise((resolve, reject) => {
        var query = "call bot_db.insertQuestion('" + data["question"] + "');";
        mysql.InsertUpdateDelete(query).then(result => {
            var id = result[0][0]["id"];
            q = "";
            data["answers[]"].forEach(x => {                
                mysql.InsertUpdateDelete(" insert into bot_db.answer(QId, answer) values('" + id + "', '" + x + "'); ").then(x => {
                    console.log("Qusions has been saved.");
                }).catch(error1 => {
                    console.log(error1);
                });
            });
            resolve("Ok");
        }).catch(error => {
            reject(error);
        });
    });
}

module.exports = questionModule;
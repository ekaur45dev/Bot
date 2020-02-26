var mysql = require("mysql");

var mySqlAdapter = {};
var connect = () => {
    return mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
    });
}
mySqlAdapter.Select = (query, options = {}) => {
    var con = connect();
    
    return new Promise((resolve, reject) => {
        con.connect((err, suc) => {
            if (err) {
                reject(err);
            } else {
                con.query(query, options, (err, result) => {
                    if (err) reject(err);
                    else {
                        resolve(result);
                    }
                });
            }
        })
        
    });    
}
mySqlAdapter.InsertUpdateDelete = (query, options) => {
    var con = connect();
    return new Promise((resolve, reject) => {
        con.query(query, options, (err, result) => {
            if (err) reject(err);
            else {
                resolve(result);
            }
        });
    });  
}

module.exports = mySqlAdapter;
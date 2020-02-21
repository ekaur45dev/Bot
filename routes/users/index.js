const usersRoutes = require('express').Router();
const dotenv = require('dotenv');
const mongo = require("mongodb");
dotenv.config();
const db_server = "mongodb://localhost:27017";
const dbs = "mydb";
var users = require("./../../db/models/users/users.json");
usersRoutes.get('/', (req, res) => {
    res.status(200).json({
        message: "users ok"
    });
})
usersRoutes.get('/all', (req, res) => {
    getAllUsers(res)
})
usersRoutes.post('/single', (req, res) => {
    FindOne(res, req.body)
})
usersRoutes.post('/add', (req, res) => {
    AddUser(res, req.body)
})
usersRoutes.post('/update', (req, res) => {
    UpdateUser(res, req.body)
})

function getAllUsers(res) {
    mongo.connect(db_server, (error, db) => {
        var dbo = db.db(dbs);
        dbo.collection("users").find({}).toArray((err, result) => {
            if (err) throw err;
            res.status(200).json(result);
        });
    });
}

function AddUser(res, obj) {
    mongo.connect(db_server, (error, db) => {
        var dbo = db.db(dbs);
        dbo.collection("users").insertOne(obj, (err, result) => {
            if (err) res.status("500").json({
                "error": {
                    "message": "internal server error",
                    "exception": err
                }
            })
            res.status(200).json({
                "message": "ok"
            });
        });

    })
}
function FindOne(res, model) {
    mongo.connect(db_server, (error, db) => {
        var dbo = db.db(dbs);
        dbo.collection("users").find(model).toArray((err, result) => {
            if (err) throw err;
            res.status(200).json(result);
        });
    });
}
function UpdateUser(req,model) {
    var query = { uniqueId: model.uniqueId };
    console.log(model._id)
    mongo.connect(db_server, (error, db) => {
        var dbo = db.db(dbs);
        dbo.collection("users").find(query).toArray((er, userFound) => {
            if (er) req.status("500").json({
                "error": {
                    "message": "internal server error",
                    "exception": err
                }
            })
            if (userFound.length>0) {
                dbo.collection("users").updateMany(query, { $set: model }, (err, result) => {
                    if (err) req.status("500").json({
                        "error": {
                            "message": "internal server error",
                            "exception": err
                        }
                    })
                    req.status(200).json({
                        "message": "ok"
                    });
                });
            } else {
                req.status(200).json({
                    "message":"No record found"
                });
            }
        })
        

    })
}

module.exports = usersRoutes
const mongo = require("mongodb");

var mongoAdapter={};
mongoAdapter.find=(query,collection)=>{
    return new Promise((resolve,reject)=>{
        try {
            mongo.connect(process.env.MONGO_URL,(connErr,conn)=>{
                if(connErr) reject(connErr);
                else{
                    let db=conn.db(process.env.PROJECT_DB);
                    db.collection(collection).find(query).toArray((fetchErr,result)=>{
                        if(fetchErr) reject(fetchErr)
                        else{
                            resolve(result);
                        }
                    });
                }
            });
        } catch (error) {
            console.error(error);
            reject(error);
        }
    });
}
mongoAdapter.insertOne=(data,collection)=>{
    return new Promise((resolve,reject)=>{
        try {
            mongo.connect(process.env.MONGO_URL,(connErr,conn)=>{
                if(connErr) reject(connErr);
                else{
                    let db=conn.db(process.env.PROJECT_DB);
                    db.collection(collection).insert(data,(insertErr,sucess)=>{
                        if(insertErr) reject(insertErr)
                        else resolve("inserted");
                    });
                }
            });
        } catch (error) {
            console.error(error);
            reject(error);
        }
    });
}
mongoAdapter.insertMany=(data,collection)=>{
    return new Promise((resolve,reject)=>{
        try {
            mongo.connect(process.env.MONGO_URL,(connErr,conn)=>{
                if(connErr) reject(connErr);
                else{
                    let db=conn.db(process.env.PROJECT_DB);
                    db.collection(collection).insertMany(data,(insertErr,sucess)=>{
                        if(insertErr) reject(insertErr)
                        else resolve("inserted");
                    });
                }
            });
        } catch (error) {
            console.error(error);
            reject(error);
        }
    });
}
mongoAdapter.updateOne=(condtion,data,collection)=>{
    return new Promise((resolve,reject)=>{
        try {
            mongo.connect(process.env.MONGO_URL,(connErr,conn)=>{
                if(connErr) reject(connErr);
                else{
                    let db=conn.db(process.env.PROJECT_DB);
                    db.collection(collection).updateOne(condtion,data,(insertErr,sucess)=>{
                        if(insertErr) reject(insertErr)
                        else resolve("inserted");
                    });
                }
            });
        } catch (error) {
            console.error(error);
            reject(error);
        }
    });
}
mongoAdapter.updateMany=(condtion,data,collection)=>{
    return new Promise((resolve,reject)=>{
        try {
            mongo.connect(process.env.MONGO_URL,(connErr,conn)=>{
                if(connErr) reject(connErr);
                else{
                    let db=conn.db(process.env.PROJECT_DB);
                    db.collection(collection).updateMany(condtion,data,(insertErr,sucess)=>{
                        if(insertErr) reject(insertErr)
                        else resolve("inserted");
                    });
                }
            });
        } catch (error) {
            console.error(error);
            reject(error);
        }
    });
}
module.exports=mongoAdapter;
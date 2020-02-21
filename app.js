var express = require("express");
var routes = require("./routes/routes");
const controllerRoutes = require('./routes/controllers/routes');
var bodyParser = require('body-parser');
var path = require('path');
const dotenv = require('dotenv');
const swaggerUi=require("swagger-ui-express");
const swaggerDocument = require('./swagger.json');
dotenv.config();
var app = express();
app.use('/assets', express.static(path.join(__dirname,'web/assets')))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use("/api", routes)
app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDocument));
//app.get("/", (req, res) => { res.send("<h1>Api running...</h1>") })
app.use(controllerRoutes);
app.get("**", (req, res) => { res.sendFile(path.join(__dirname + "/web/pages/error.html")) })
try {
    app.listen(process.env.PORT);
    console.log(`running at localhost:${process.env.PORT}`)
} catch (e) {

}
import express  from "express";
import bodyParser from "body-parser";
import conFigViewEngine from "./config/viewEngine"
import initWebRouter from "./route/web";
import conectDB from "./config/connectDB";
require('dotenv').config();

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
conFigViewEngine(app);
initWebRouter(app);
conectDB();
let port= process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("running on port " + port);
})
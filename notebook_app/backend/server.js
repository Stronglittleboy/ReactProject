const mongoose =require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const Data = require("./data");

const API_PORT = 3001;

const app = express();
const router = express.Router();

const dbRoute = "mongodb://localhost:27017/notebook";

mongoose.connect(
	dbRoute,{useNewUrlParser:true});

let db = mongoose.connection;
//
db.once("open",()=>console.log("connected to the database"));

//检测数据库连接是否成功
db.on("error",()=>console.error.bind(console,"MongoDB connection error:"));
// 转换为可读的json格式
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(logger("dev"))

//获取数据的方法
router.get("/getDate",(req,res)=>{
    Data.find((err,data)=>{
        if (err) return  res.json({sucess:false,error:err});
        return res.json({sucess:true,data:data});
    })
});

app.use("/api",router)
app.listen(API_PORT,()=>console.log(`LISTENING ON PORT ${API_PORT}`))
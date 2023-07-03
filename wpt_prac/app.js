const express=require("express");
const app=express();
const boyparser=require("body-parser");
const router=express.Router()
const bodyParser = require("body-parser");
const route=require("./router")
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use("/",route);

app.listen(3002,function(){
    console.log("server running at port 3002")
})
module.exports=app;
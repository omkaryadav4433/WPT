const express=require ("express");
const app=express();
const bodyparser=require("body-parser");

app.use(bodyparser.urlencoded({extended:false}))
app.use(function(req,resp,next){
    console.log("in middleware 1")
    next();
})
app.use(function(req,resp,next){
    console.log("in middleware 2")
    next()
})

//add urlhandlerss
app.get("/home",function(req,resp){
    resp.send("<h1>in home url</h1>")
});
app.get("/aboutus",function(req,resp){
    resp.send("<h1>in aboutus url</h1>")
});
app.get("",function(req,resp){
    resp.send("<h1>in default</h1>")
})
app.listen(3001,function(){
    console.log("server is running at port 3001")
})
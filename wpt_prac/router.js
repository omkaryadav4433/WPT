const express=require("express");
const router=express.Router();
const connection=require('./dbconnect')

router.get("/employees",(req,resp)=>{
    connection.query("select * from employee",(err,data)=>{
        if(err){
            resp.status(500).send("data not found"+JSON.stringify(err))
        }else{
            resp.send(data)
        }
    })
})
router.get("/employees/employee/:empid",(req,resp)=>{
    connection.query("select * from employee where empid=?",[req.params.empid],(err,data)=>{
        if(err){
            resp.status(500).send("data not found"+JSON.stringify(err))

        }
        else{
            resp.send(data[0]);
        }
    })
})
router.post("/employee/employee",(req,resp)=>{
    var empid=req.body.empid;
    var ename=req.body.ename;
    var sal=req.body.sal
    connection.query("insert into employee values(?,?,?)",[empid,ename,sal],(err,result)=>{
        console.log(result);
        if(err){
            resp.status(500).send("data not inserted")
        }
        else{
            resp.send("{'msg':'data inserted'}")
        }
    })
})

module.exports=router;
const express=require("express");
const sequelize=require("sequelize");
const Sequellize=require("./dbConfig/db");
const Student=require("./models/student");
const StudentDetails=require("./models/studentDetails");
const bodyparser=require("body-parser");
const StudentRout=require("./router/studentRout");
const StudentdetailRout=require("./router/studentDetails");
const app=express();

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
app.use(StudentRout)
app.use(StudentdetailRout)
//association

StudentDetails.hasOne(Student);

//sync with models

Sequellize.sync();

app.listen(8004,()=>{
    console.log("server is running in 8004")
})
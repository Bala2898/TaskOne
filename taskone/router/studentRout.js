const express=require("express");
const StudentControl=require("../controler/studentcontrol");
const studentRout=express();

//addind student  Roll number, name,email

studentRout.post("/register",StudentControl.StudRegi);

module.exports=studentRout
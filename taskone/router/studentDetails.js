const express=require("express");
const StudentdetailsControl=require("../controler/studentDetailsControl");
const studentdetailRout=express();

//addind student  Roll number, name,email

studentdetailRout.post("/details",StudentdetailsControl.StudDetails);

module.exports=studentdetailRout
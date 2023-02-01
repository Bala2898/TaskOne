const sequelize=require("sequelize");
const Sequelize=require("../dbConfig/db");
const StudentDetails= Sequelize.define("studentdetail",
{
 sroll:
 {
    type:sequelize.INTEGER,
    allowNull: false,
    primaryKey:true,
    notEmpty: true
 },
 fname:
 {
    type: sequelize.STRING,
    allowNull:false,
    notEmpty: true
 },
 mname:
 {
    type: sequelize.STRING,
    allowNull:false,
    notEmpty: true
 },
 city:
 {
    type: sequelize.STRING,
    allowNull:false,
    notEmpty: true
 }
});

module.exports=StudentDetails
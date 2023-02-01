const sequelize=require("sequelize");
const Sequelize=require("../dbConfig/db");
const Student= Sequelize.define("student",
{
 sroll:
 {
    type:sequelize.INTEGER,
    allowNull: false,
    primaryKey:true,
    notEmpty: true
 },
 name:
 {
    type: sequelize.STRING,
    allowNull:false,
    notEmpty: true
 },
 email:
 {
    type:sequelize.STRING,
    allowNull:false,
    notEmpty: true
 },
})

module.exports=Student
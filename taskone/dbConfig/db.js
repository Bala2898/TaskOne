const sequelize=require("sequelize");
const Sequelize= new sequelize ("Taskone","root","root",
{
    dialect:"mysql",
    host:"localhost"
});

module.exports=Sequelize
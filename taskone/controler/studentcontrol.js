const Student=require("../models/student");


module.exports={

    StudRegi:(req,res)=>{
        Student.findOne({
            where:{sroll:req.body.sroll}
        })
        .then((result)=>{
            if(result){
                res.status(400).send("rollnumber already in use")
            }
            else
            {
                Student.create({
                    sroll:req.body.sroll,
                    name:req.body.name,
                    email:req.body.email
        
                })
                .then((result)=>{
                    res.status(200).send(result)
                })
                .catch((err)=>{
                    res.status(400).send(err)
                })
            }
        })
        .catch((err)=>{
            res.ststus(400).send(err)
        })
    }
}
const StudentDetails=require("../models/studentDetails");


module.exports={

    StudDetails:(req,res)=>{
        StudentDetails.findOne({
            where:{sroll:req.body.sroll}
        })
        .then((result)=>{
            if(result){
                res.status(400).send("rollnumber already in use")
            }
            else
            {
                StudentDetails.create({
                    sroll:req.body.sroll,
                    fname:req.body.fname,
                    mname:req.body.mname,
                    city:req.body.city
        
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
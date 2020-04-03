const Empolyee=require("../models/employee")
module.exports.list=(req,res)=>{
    Empolyee.find().populate('department')
       .then((employee)=>{
           res.json(employee)
       })
       .catch((err)=>{
           res.json(err)
       })
}
module.exports.create=(req,res)=>{
      const body=req.body
      const employee=new Empolyee(body)
      employee.save()
         .then((employee)=>{
             console.log("hi")
             res.json(employee)
         })
         .catch((err)=>{
             res.json(err)
         })
}
module.exports.show=(req,res)=>{
    const id=req.params.id
    Empolyee.findById(id).populate('department')
         .then((employee)=>{
             if(employee){
                 res.json(employee)
             }
             else{
                 res.json({})
             }
         })
         .catch((err)=>{
             res.json(err)
         })
   }
module.exports.remove=(req,res)=>{
    const id=req.params.id
    Empolyee.findByIdAndDelete(id)
          .then((employee)=>{
              res.json(employee)
          })
          .catch((err)=>{
              res.json(err)
          })
}
module.exports.update=(req,res)=>{
    const body=req.body
    const id=req.params.id
    Empolyee.findByIdAndUpdate(id,body,{new:true,runValidators:true})
          .then((employee)=>{
              res.json(employee)
          })
          .catch((err)=>{
              res.json(err)
          })
}
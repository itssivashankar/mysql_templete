var express = require('express')
    router =  express.Router(),
    bodyparser =  require('body-parser'),
    User       =  __db_model.User;

router.use(bodyparser.json());

router.get("/",function(req,res){
   console.log("user controller check");
   res.status(200).send("user controller check")
})

router.post("/",function(req,res){
   console.log("post call called");
  User.create(req.body).then(function(data){
     console.log("data",data)
     res.status(200).send("user created successfully")
  },function(err){
    console.log("err",err)
    res.status(500).send("problem in createing user");
  })
})

module.exports=router;

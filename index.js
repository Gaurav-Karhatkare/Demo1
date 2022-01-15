const express = require('express');
require('./config');
const userRecord = require('./userRecord');
const app=express();
app.use(express.json());

app.post('/register',async(req,res)=>{
    let data =new userRecord(req.body);
    let result = await data.save();
    
    res.send(result);
    console.log(result);
})

app.get('/getlist',async(req,res)=>{
    const data =await userRecord.find();
    res.send(data);
    console.log(data);
})

app.delete('/delete/:_id',async(req,res)=>{
    const data =await userRecord.deleteOne(req.params)
    res.send(data)
    console.log(data)
})

app.put('/update/:_id',async(req,res)=>{
    const data =await userRecord.updateOne(
        req.params,
        {$set:req.body}
    );
    res.send(data);
    console.log(data)
})


app.get('/search/:key',async(req,res)=>{
   const data=await userRecord.find({
       "$or":[
           {"name":{$regex:req.params.key}},
        //    {"email":{$regex:req.params.key}},
        //    {"mobile":{$regex:req.params.key}}
       ]
   })
   res.send(data);
   console.log(data) 
})

app.listen(4500);
const express = require('express');
const dbConnect = require('./mongodb');

const app = express();
app.use(express.json());

app.get('/',async(req,res)=>{
  let data =await dbConnect();
   data =await data.find().toArray();  
  res.send(data)
});

app.post('/',async(req,res)=>{
    let data =await dbConnect();
    let result = await data.insert(req.body)
    console.log(req.body)
    res.send(req.body);
})

app.put('/',async(req,res)=>{
    let data =await dbConnect();
    let result = data.updateOne(
        {name:req.body.name},{$set:req.body}
        )
     console.log(req.body)
    res.send({name:"gk"})
})


app.listen(4500);
const mongoose =require('mongoose');

mongoose.connect("mongodb://localhost:27017/Gaurav_db")

const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    mobile:Number
});

const getRecord = async()=>{
    const userModel = mongoose.model("users",userSchema);
    let data = await userModel.find();
    console.log(data);
}
getRecord();

const post=async()=>{

    const UserModel= mongoose.model("users",userSchema);
    let data = new UserModel({name:"akanksha", email:"ak12@gmail.com", mobile:"9109310988"});
    let result =await data.save();
    console.log(result)
}

// post();

const update=async()=>{
    const userModel = mongoose.model("users",userSchema);
    let data = await userModel.updateOne(
        {name:"akanksha"},{$set:{mobile:"1010101010", name:"Akanksha"}});
    // let result = await data.save();
    console.log(data)
}

// update();

const deleteRecord=async()=>{
 const userModel = mongoose.model("users",userSchema);
 let data =await userModel.deleteOne({name:"rishabh"});
 console.log(data)
}
// deleteRecord();
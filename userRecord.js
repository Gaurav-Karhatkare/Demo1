const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name:String,
    email:String,
    mobile:Number
});

module.exports = mongoose.model("users",userSchema);
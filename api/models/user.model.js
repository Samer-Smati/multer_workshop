const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    role:{type:Schema.Types.ObjectId,ref:'Role'},
    avatar: {type: String,required:true }
})
module.exports = mongoose.model('User', userSchema)
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName : {type:String, required: true},
    lastName : {type:String, required: false},
    age : {type:Number, required: true},
    email : {type:String, required: true, unique: true},
    profileImages :[{type:String, required: true}],
    createdAt : {type: Date, required: true, default : Date.now()},
    book_id: [{type:mongoose.Schema.Types.ObjectId, ref:"book"}],
    comment_id: [{type:mongoose.Schema.Types.ObjectId, ref:"comment"}],
});

const User = mongoose.model("user", userSchema);
module.exports = User;
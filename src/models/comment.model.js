const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    body :  {type:String, required: true},
    createdAt : {type: Date, required: true, default : Date.now()}
});

const Comment = mongoose.model("comment", commentSchema);
module.exports = Comment;
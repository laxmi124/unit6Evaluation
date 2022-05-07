const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    likes : {type:Number, default:0},
    coverImage : {type:String, required: true},
    content : {type:String, required: true},
    createdAt : {type: Date, required: true, default : Date.now()},
    user_id: [{type:mongoose.Schema.Types.ObjectId, ref:"user"}],
    publication_id: {type:mongoose.Schema.Types.ObjectId, ref:"publication"},
    comment_id: [{type:mongoose.Schema.Types.ObjectId, ref:"comment"}],
});

const Book = mongoose.model("book", bookSchema);
module.exports = Book;
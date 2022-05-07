const mongoose = require('mongoose');

const pulicationSchema = new mongoose.Schema({
    name : {type:String, required:true},
    createdAt : {type: Date, required: true, default : Date.now()}
});

const Publication = mongoose.model("publication", pulicationSchema);
module.exports = Publication;
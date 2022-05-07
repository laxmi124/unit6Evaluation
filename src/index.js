const express = require('express');
const app = express();
const connect = require('./configs/db');
app.use(express.json());


const userController = require('./controllers/user.controller');
const bookController = require('./controllers/book.controller');
const commentController = require('./controllers/comment.controller');
const publicationController = require('./controllers/publication.controller');
const {  login } = require("./controllers/auth.controller");

app.post("/login", login);
app.use('/user', userController);
app.use('/book', bookController);
app.use('/comments', commentController);
app.use('/publication', publicationController);

app.listen(8000, async()=>{
    try{
        await connect();
        console.log('app is running on port 8000')
    }
    catch(err){
        console.log(err.message)
    }
})
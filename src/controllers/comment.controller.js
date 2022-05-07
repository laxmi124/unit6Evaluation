const express = require('express');
const Comment = require('../models/comment.model');
const router = express.Router();


router.get('/', async(req,res)=>{
    try {
        const comments = await Comment.find();
        res.status(200).json(comments);
    } catch (err) {
        res.status(400).send(err.message)
    }
});


router.post('/', async(req,res)=>{
  try{
      const books = await Comment.create(req.body)
      return res.status(200).json(books)
  }
  catch(err){
      return res.status(400).send(err.message);
  }
});









module.exports = router
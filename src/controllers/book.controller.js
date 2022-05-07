const express = require('express');
const Book = require('../models/book.model');
const router = express.Router();


router.get('/', async(req,res)=>{
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (err) {
        res.status(400).send(err.message)
    }
});


router.post('/', async(req,res)=>{
  try{
      const books = await Book.create(req.body)
      return res.status(200).json(books)
  }
  catch(err){
      return res.status(400).send(err.message);
  }
});









module.exports = router
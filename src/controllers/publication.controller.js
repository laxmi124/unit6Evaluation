const express = require('express');
const Publication = require('../models/publication.model');
const router = express.Router();


router.get('/', async(req,res)=>{
    try {
        const comments = await Publication.find();
        res.status(200).json(comments);
    } catch (err) {
        res.status(400).send(err.message)
    }
});


router.post('/', async(req,res)=>{
  try{
      const books = await Publication.create(req.body)
      return res.status(200).json(books)
  }
  catch(err){
      return res.status(400).send(err.message);
  }
});









module.exports = router
const express = require('express');
const User = require('../models/user.model');
const router = express.Router();
const bodyParse = require('body-parser');
const { body, validationResult } = require('express-validator');
const Comment = require('../models/comment.model');


router.get('/', async(req,res)=>{
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(400).send(err.message)
    }
});



router.get('/:id/post', async(req,res)=>{
    try {
        const { page = 1, pageSize = 10 } = req.query;
        let offset = (page - 1) * pageSize;
        const post = await Comment.find().skip(offset).limit(pageSize);
        res.status(200).json(post);
    } catch (err) {
        res.status(400).send(err.message)
    }
});


router.get('/:id/login', async(req,res)=>{
    try {
        const login = await User.findById(req.params.id);
        res.status(200).json(login);
    } catch (err) {
        res.status(400).send(err.message)
    }
});




router.post('/user',

    body('firstName').isLength({ min: 3 , max: 30 }),
    body('lastName').isLength({ min: 3 , max: 30 }),
    body('age').isFloat({ min: 3 , max: 30 }),
    body('email').isEmail(),
    body('profileImages').isLength({ min: 1, max: 30  }),

    (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      User.create({
        username: req.body.username,
        password: req.body.password,
      }).then(user => res.json(user));
    },
  );









module.exports = router
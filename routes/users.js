const express = require('express');
const jwt = require('jsonwebtoken');

const dotenv = require('dotenv');

dotenv.config();

const router = express.Router();

const User = require("../models/user.model");

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

router.get('/', async (req, res, next) => {
    try {
        const users = await User.find().sort({createdAt: -1});
        res.status(200).json(users);
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }
});

router.post('/signup', async (req, res, next) => {
    const {username, email, password} = req.body;

    try {
      const user = await User.signup(username, email, password)
  
    // create a token
      const token = createToken(user._id)
  
      res.status(200).json({username, email, token})
    } catch (error) {
      res.status(400).json({error: error.message})
    }
});

router.post('/login', async (req, res, next) => {
    const {username, password} = req.body

  try {
    const user = await User.login(username, password)

    // create a token
    const token = createToken(user._id)

    res.status(200).json({username, password, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
})

module.exports = router
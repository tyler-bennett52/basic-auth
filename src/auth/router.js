'use strict';

const express = require('express');
const basicAuth = require('./middleware/basic')
const { userModel } = require('./models');
const bcrypt = require('bcrypt');
const router = express.Router();


router.post('/signup', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 5);
    console.log(username, encryptedPassword);
    let newUser = await userModel.create({
      username, 
      password: encryptedPassword,
    });
    res.status(200).send(newUser);
  } catch (e){
    next(e);
  }
});

// starter code will different
router.post('/signin', basicAuth, (req, res, next) => {
  res.status(200).send(req.user);
});

module.exports = router
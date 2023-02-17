'use strict';

// 3rd party requirements
require('dotenv').config();
const express = require('express');
const base64 = require('base-64');
const bcrypt = require('bcrypt');
const { Sequelize, DataTypes } = require('sequelize');
const basicAuth = require('./auth/middleware/basic')
const { userModel } = require('./auth/models')

const PORT = process.env.PORT || 3002;
const app = express();

app.use(express.json());

// allows us to accept webform data.  aka process FORM input and add to request body
app.use(express.urlencoded({extended: true}));



app.post('/signup', async (req, res, next) => {
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
app.post('/signin', basicAuth, (req, res, next) => {
  res.status(200).send(req.user);
});


module.exports = { app, PORT }
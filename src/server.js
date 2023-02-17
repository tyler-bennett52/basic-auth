'use strict';

// 3rd party requirements
require('dotenv').config();
const express = require('express');
const base64 = require('base-64');
const bcrypt = require('bcrypt');
const { Sequelize, DataTypes } = require('sequelize');
const basicAuth = require('./auth/middleware/basic')

const PORT = process.env.PORT || 3002;
const app = express();

app.use(express.json());

// database URL set up (test or dev)
const DATABASE_URL = process.env.NODE_ENV === 'test' 
  ? 'sqlite::memory' 
  : process.env.DATABASE_URL;

const sequelizeDatabase = new Sequelize(DATABASE_URL);

// allows us to accept webform data.  aka process FORM input and add to request body
app.use(express.urlencoded({extended: true}));

// Create a User Model
const userModel = sequelizeDatabase.define('users', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// sequelize allows ua to interact with the usermodel before adding data to the database using the beforeCreate hook.
userModel.beforeCreate((user) => {
  console.log('our user', user);
});



app.post('/signup', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 5);

    let newUser = await userModel.create({
      username, 
      password: encryptedPassword,
    });
    res.status(200).send(newUser);
  } catch (e){
    next('signup error occured');
  }
});

// starter code will different
app.post('/signin', basicAuth, (req, res, next) => {
  res.status(200).send(req.user);
});


module.exports = { app, PORT, sequelizeDatabase }
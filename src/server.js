'use strict';

// 3rd party requirements
require('dotenv').config();
const express = require('express');
const base64 = require('base-64');
const bcrypt = require('bcrypt');
const { Sequelize, DataTypes } = require('sequelize');
const basicAuth = require('./auth/middleware/basic')
const { userModel } = require('./auth/models')
const router = require('./auth/router');

const PORT = process.env.PORT || 3002;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(router);


module.exports = { app, PORT }
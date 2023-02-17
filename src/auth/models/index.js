'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const userSchema = require('./users-models');
const DB_URL = process.env.NODE_ENV === 'test' ? 'sqlite::memory' : process.env.DATABASE_URL;
// const DB_URL = process.env.DB_URL;

const db = new Sequelize(DB_URL);
const userModel = userSchema(db, DataTypes);

module.exports = { db, userModel };
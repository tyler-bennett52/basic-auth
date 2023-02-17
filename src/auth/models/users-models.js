'use strict'

const userSchema = (sequelizeDatabase, DataTypes) => {
  return sequelizeDatabase.define('users', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})};


module.exports = userSchema;
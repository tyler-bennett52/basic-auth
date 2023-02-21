'use strict'


const humanBeingSchema = (sequelizeDatabase, DataTypes) => {
  return sequelizeDatabase.define('HUMAN', {
    heightInches: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    massKG: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    eyeColor: {
      type: DataTypes.ENUM,
      values: ['blue', 'brown', 'green', 'hazel'],
      allowNull: true,
    }
  })
};

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
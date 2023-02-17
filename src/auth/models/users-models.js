'use strict'


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

module.exports = userModel;
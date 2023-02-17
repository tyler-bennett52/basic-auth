'use strict'

require('dotenv').config();
const { app, PORT } = require("./src/server");
const { db } = require('./src/auth/models/')


db.sync()
.then(() => {
  console.log('successful connection');
  app.listen(PORT, () => console.log('listening on port: ', PORT));
})
.catch(e => console.error(e));
'use strict'

require('dotenv').config();
const { app, PORT, sequelizeDatabase } = require("./src/server");


sequelizeDatabase.sync()
.then(() => {
  console.log('successful connection');
  app.listen(PORT, () => console.log('listening on port: ', PORT));
})
.catch(e => console.error(e));
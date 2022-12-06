'use strict';

let { start, sequelize } = require('./src/server');

sequelize.sync()
  .then(() => {
    console.log('successful connection');
  })
  .catch(e => console.error(e));
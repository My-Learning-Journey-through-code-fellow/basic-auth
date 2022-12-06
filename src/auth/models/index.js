'use strict';

const { Sequelize, DataTypes } = require('sequealize');
const Users = require('./user-models');

const DATABASE_URL = 'sqlite:memory';
const sequelizeInstance = new Sequelize(DATABASE_URL);

module.exports = {
  dataBase: sequelizeInstance,
  Users: Users(sequelizeInstance, DataTypes),
};
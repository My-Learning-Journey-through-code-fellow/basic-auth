'use strict';

const { Sequelize, DataTypes } = require('sequealize');
const UserModel = require('./user-models');
const DATABASE_URL = 'sqlite:memory';
const sequelizeInstance = new Sequelize(DATABASE_URL);

module.exports = {
  dataBase: sequelizeInstance,
  Users: UserModel(sequelizeInstance, DataTypes),
};
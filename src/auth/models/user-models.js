'use strict';

const userSchema = (seq, DataTypes) => {
  let users = seq.define('Users', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return users;
};

module.exports = userSchema;

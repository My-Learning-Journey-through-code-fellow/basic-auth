'use strict';

const bcrypt = require('bcrypt');
const middleware = require('../src/basic');
const express = require('express');
const router = express.Router();
const { Users } = require('./models/index');

router.post('/signup', async (req, res) => {

  try {
    console.log(Users);
    req.body.password = await bcrypt.hash(req.body.password, 5);
    const record = await Users.create(req.body);
    res.status(200).json(record);
  } catch (e) { res.status(403).send('Error Creating User'); }
});

router.post('/signin', middleware, async (req, res) => {
  res.status(200).send(req.user);
});

module.exports = router;

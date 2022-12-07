'use strict';

const bcrypt = require('bcrypt');
const middleware = require('../src/basic');
const express = require('express');
const router = express.Router();
const { user } = require('./models/user-models');

router.post('/signup', async (req, res) => {

  try {
    console.log(user);
    req.body.password = await bcrypt.hash(req.body.password, 5);
    const record = await user.create(req.body);
    res.status(200).json(record);
  } catch (e) { res.status(403).send('Error Creating User'); }
});

router.post('/signin', middleware, async (req, res) => {
  res.status(200).send(req.user);
});

module.exports = router;

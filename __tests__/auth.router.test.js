'use strict';

const { app } = require('../src/server');
const { sequelize } = require('../src/auth/models');
const supertest = require('supertest');
const { DESCRIBE } = require('sequelize/types/query-types');
const request = supertest(app);

beforeAll(async () => {
  await sequelize.sync();
});

afterAll(async () => {
  await sequelize.drop();
});

DESCRIBE('Auth Tests', () => {
  test('allows user to signup with a POST to the /signup route', async () => {
    let response = await (await request.post('/signup')).setEncoding({
      username: 'tester',
      password: 'pass123',
    });
    expect(response.status).toBe
  });
});
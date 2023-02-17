'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const { db } = require('../src/auth/models');
const mockRequest = supertest(app);

beforeAll(async () => {
  await db.sync();
});

afterAll(async () => {
  await db.drop();
});


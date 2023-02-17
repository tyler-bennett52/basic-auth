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

describe('Server', () => {

  it('signs up new users', async () => {
    let newUserObject = {username: 'smrtGUY', password: 'qwerty'};
    let response = await mockRequest.post('/signup').send(newUserObject);
    expect(response.body.id).toBe(1);
  });

  it('signs in old users', async () => {
    let userObject = {username: 'smrtGUY1', password: 'qwerty'};
    let response = await mockRequest.post('/signup').send(userObject);
    let responseTwo = await mockRequest.post('/signin').send(userObject).auth(userObject.username, userObject.password);
    expect(responseTwo.body.id).toBe(2);
  })

});
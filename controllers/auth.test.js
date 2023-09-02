const axios = require('axios');

const loginCtrl = require('./auth');

describe('Test Login Controller', () => {
  it('should respond with status code 200', async () => {
    const loginData = {
      email: 's.skriabina19@gmail.com',
      password: '123456',
    };

    const response = await axios.post('http://localhost:3000/api/auth/login', loginData);

    expect(response.status).toBe(200);
  });

  it('should respond with a valid token', async () => {
    const loginData = {
      email: 's.skriabina19@gmail.com',
      password: '123456',
    };

    const response = await axios.post('http://localhost:3000/api/auth/login', loginData);

    expect(typeof response.data.token).toBe('string');
  });
  it('should respond with object with 2 string fields: email and subscription', async () => {
    const loginData = {
      email: 's.skriabina19@gmail.com',
      password: '123456',
    };

    const response = await axios.post('http://localhost:3000/api/auth/login', loginData);

    expect(response.data.user).toEqual(expect.any(Object));
    expect(typeof response.data.user.email).toBe('string');
    expect(typeof response.data.user.subscription).toBe('string');
  });
});

const request = require('supertest');
const app = require('./index');

describe('Calculator API', () => {
  it('adds two numbers', async () => {
    const res = await request(app).get('/add?a=2&b=3');
    expect(res.body.result).toBe(5);
  });

  it('subtracts two numbers', async () => {
    const res = await request(app).get('/subtract?a=7&b=2');
    expect(res.body.result).toBe(5);
  });

  it('multiplies two numbers', async () => {
    const res = await request(app).get('/multiply?a=3&b=4');
    expect(res.body.result).toBe(12);
  });

  it('divides two numbers', async () => {
    const res = await request(app).get('/divide?a=8&b=2');
    expect(res.body.result).toBe(4);
  });
});

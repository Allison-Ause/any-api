const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('/crystals route', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('returns all crystal data', async () => {
    const res = await request(app).get('/');
    expect(res.body.length).toEqual(5);
    expect(res.body[0]).toMatchObject({
      id: expect.any(String),
      rare: expect.any(Boolean),
    });
  });
  it('returns one crystal detail', async () => {
    const res = await request(app).get('/1');
    expect(res.body).toEqual({
      id: '1',
      name: 'Tigers Eye',
      meaning: 'Confidence',
      zodiac_sign: 'Aries',
      rare: false,
    });
  });
  afterAll(() => {
    pool.end();
  });
});

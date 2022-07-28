const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

//create test for getting ALL crystal data
describe('/crystals route', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('returns all crystal data', async () => {
    const res = await request(app).get('/crystals');
    expect(res.body.length).toEqual(5);
    expect(res.body[0]).toMatchObject({
      id: expect.any(String),
      rare: expect.any(Boolean),
    });
  });
  afterAll(() => {
    pool.end();
  });
});

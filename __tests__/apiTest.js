const request = require('supertest');
const app = require('../server/index.js');

describe('POST /reviews', () => {
  const data = {
    randomListing: 5,
  };
  it('responds with data from the server', (done) => {
    request(app)
      .post('/reviews')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});

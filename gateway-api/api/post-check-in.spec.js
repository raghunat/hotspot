const app = require('../app.js');
const should = require('should');
const supertest = require('supertest');

describe('/check-in/spot_id', () => {
  it('should return a spot object', done => {
    supertest(app)
      .post('/check-in/spot_id')
      .send({
        id: 15,
        email: 'some@one.com'
      })
      .end((err, res) => {
        res.body.should.be.an.Object;
        done();
      });
  });
});

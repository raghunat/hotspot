const app = require('../app.js');
const should = require('should');
const supertest = require('supertest');

describe('/spots/:id', () => {
  it('should return a spot from db', (done) => {
    supertest(app)
      .get('/spots/1')
      .end((err, res) => {
        if(err) throw err;
        res.body.should.be.an.Object;
        done();
      });
  });
});

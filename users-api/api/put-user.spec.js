
const app = require('../app.js');
const should = require('should');
const mocha = require('mocha');
const supertest = require('supertest');

describe('/users/:id', () => {
  it('should update a users information', (done) => {
    supertest(app)
    .put('/users/:id')
    .end(err, res) => {
      res.json.should.equal({
        "id": `${req.params.id}`
      });
      done();
    }
  })
});

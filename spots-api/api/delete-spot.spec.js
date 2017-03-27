// delete-spot.spec.js
// supertest
const app = require('../app.js');
const should = require('should');
const supertest = require('supertest');


describe('DELETE /spots/:id', (db) function(err, result) {

  it('should delete a spot', done => {
    supertest(app)
    .delete('/spots/123')
    .end((err, res) => {
      res.text.should.equal('spot deleted');
      done();
    });
  });
});

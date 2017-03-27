// put-spot.spec.js

const app = require('../app.js');
const should = require('should');
const supertest = require('supertest');

describe('/spots/:id', () => {
  it('should update an individual spot', done => {
    supertest(app)
      .put('/spots/:id')
      .send ({
        _id: 10,
        location: "42.4509922,-79.3383331",
        name: "Fenton Hall",
        checkIns: "5"
      })
      .end((err, res) => {
        res.body.should.be.an.Object;
       done();
     });
  });
});

const app = require('../app.js');
const should = require('should');
const supertest = require('supertest');

describe('/my-profile/:id', () => {
  it('should return error there is no 34566', (done) => {
      supertest(app)
        .get('/my-profile/34566')
        .end((err, res) {
          if(err) throw err;

          res.dbResult.should.equal('User not Found');
          done();
        });
  });
})

/**
 * Created by Deakyu on 4/11/2017.
 */
const app = require('../app.js');
const should = require('should');
const supertest = require('supertest');

describe('/login', () => {
   it('should fail to login::No Data in Database', (done) => {
      supertest(app)
          .post('/login')
          .send({
             email: 'random@email.com',
             password: 'randompassword'
          })
          .end((err, res) => {
            res.status.should.equal(403);
            done();
          });
   });
});
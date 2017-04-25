//get-users.spec.js
//This will be doing the supertest
const app = require('../app.js');
const supertest = require('supertest');
const should = require('should');


describe('/users', () => {
    it('should return a list of spot objects on get/', (done) => {
        supertest(app)
        .get('/users')
        .expect(200)
        .end((err, res) => {
            res.body.should.be.an.Array;
        done();
        });
    });
});
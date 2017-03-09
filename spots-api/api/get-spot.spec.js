const app = require('../app.js');
const should = require('should');
const supertest = require('supertest');

describe('/spots/:id', (req, res) => {
  it('should return a json object', done => {
    supertest(app)
      .get('/spots/:id')
      .end(err, res) => {
        res.json.should.equal({
          "id": `${req.params.id}`,
          "location": [xx.xx, xx.xx],
          "name": "xxxx",
          "chekcIns": "xxxx"
        });
        done();
      }
  })
});

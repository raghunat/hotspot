// \api\alive.js
// Exports an express req/res callback function
module.exports = function() {
  // Returns an express req/res callback function
  return function(req, res) {
    res.send('Johnny Five is Alive!');
  }
}

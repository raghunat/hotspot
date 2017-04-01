module.exports = function() {
  // Returns an express req/res callback function
  return function(req, res) {
    res.json({
      "email":'string@.com',
    });
  }
}

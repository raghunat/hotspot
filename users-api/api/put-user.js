
module.exports = function() {
  return function(req, res) {
    res.json({
      "id": `${req.params.id}`
    });
  }
}

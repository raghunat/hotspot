module.exports = function() {
  return function(req, res) {
    // put json here
    //
    res.json({
          "id": `${req.params.id}`,
          "location": [12.34, 56.78],
          "name": "alsufyani",
          "chekcIns": "true"
      });
  }
}

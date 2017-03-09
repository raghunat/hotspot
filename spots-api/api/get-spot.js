module.exports = function() {
  return function(req, res) {
    // put json here
    //
    res.json({
          "id": `${req.params.id}`,
          "location": [xx.xx, xx.xx],
          "name": "xxxx",
          "chekcIns": "xxxx"
      });
  }
}

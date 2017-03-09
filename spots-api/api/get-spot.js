module.exports = function() {
  return function(req, res) {
    // put json here
    //
    res.json({
          "id": `${req.params.id}`,
          "location": {
            "latitude": "xx.xx",
            "longitude": "xx.xx"
          },
          "name": "xxxx",
          "chekcIns": "xxxx"
      });
  }
}

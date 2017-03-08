//getPlaceID.md

app.get('/spots', (req,res) => {
  res.json({
    id: 'xxxxxx-xxxxxx',
    latitiude: 'xx.xx',
    longitude: 'xx.xx',
    country: 'xxxx',
    state: 'xxx',
    currentUsers: 'xx',
    placeName: 'xxxx'
  })
});

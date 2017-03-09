//api/alive.js
//Exports the express req/res callback function
module.exports = function(){

//Return an express req/res callback function
  return function(req,res){
    res.send('Johnny Five is Alive')
  }
}

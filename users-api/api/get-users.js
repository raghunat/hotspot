//get-users.js

module.exports = function() {
    
    return function(req, res) {
        res.json([{
            //Sample data as there are no database yet 
            username: 'fred',
            password: 'fredonia1826',
            email: 'freddie@fredonia.edu'
        }]);
    }
}
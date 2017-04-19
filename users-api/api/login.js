/**
 * Created by Deakyu on 4/10/2017.
 */
module.exports = function(db) {
    return function(req, res) {
        let user = db.collections('users');
        user.find({email:req.query.email}, function(err, result) {
           if(err) {
               return res.json({
                   code: 'Forbidden',
                   message: 'No user with that email'
               });
           } else {
               if(result.password == req.password) {
                   return res.json({
                       _id: result._id
                   });
               } else {
                   return res.json({
                       code: 'Forbidden',
                       message: 'Wrong Password'
                   });
               }
           }
        });
    };
};
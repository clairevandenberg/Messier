// Restricting a user from visiting page if not logged in
module.exports = function(req, res, next) {

    if (req.user) {
      return next();
    }
  
    return res.redirect("/");
  };

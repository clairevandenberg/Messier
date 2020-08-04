const { db, sequelize } = require("../models");


module.exports = {
  
  findAll: function(req, res) {
        if(req.user) {
           db.users.findAll({
            where:{isActive:ture},
            attributes: ['firstName', 'lastName', 'dob', 'email', 'password']
           })
           .then(users => {
            res.json(users)
          })
          .catch(err => res.status(422).json(err));
        }
    },


    create: function(req, res) {
        if (req.user) {//checking if user is validated
            return sequelize.transaction(function (dbUsers) {
                return db.users
                    .create(req.body) 
                    .then(dbUsers => res.json(dbUsers))
                    .catch(err => res.status(422).json(err));
                })
            }
          },


    update: function(req, res) {
        if (req.user) {
            return sequelize.transaction(function (dbUser) {
              return db.users
                .update(req.body, {
                  where: {
                    user_id: req.params.id
                  }
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbUsers => res.json(dbUsers))
      .catch(err => res.status(422).json(err))
                })
            }
        )}
    }
};
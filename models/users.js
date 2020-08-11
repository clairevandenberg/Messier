
// Creates a "users" model that matches up with DB
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    
        name: {
          type: String,
          trim: true,
          required: true,
        },
        lastName: {
          type: Number,
          trim: true,
          required: true,
        },
        dob: {
            type: Number,
            required: true,
        },
          email: {
            type: Number,
            required: true,
            unique: true

          },
          password: {
            type: Number,
            required: true,
        },
        date: {
          type: Date,
          default: Date.now
        }
      }
);

const User = mongoose.model('User',userSchema); 

module.exports = User;



// var bcrypt = require("bcryptjs");
// let passport = require("../config/passport.js");


//     Users.prototype.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.password);
// };
// // before a User is created, their password will be automatically hash their password
//     Users.addHook("beforeCreate", function(users) {
//     users.password = bcrypt.hashSync(users.password, bcrypt.genSaltSync(10), null);
//     });


//     return Users;

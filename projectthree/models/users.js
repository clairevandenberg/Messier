var bcrypt = require("bcryptjs");
let passport = require("../config/passport.js");


module.exports = function(sequelize, DataTypes) {
    const Users = sequelize.define("users", {
        firstName: {
            type: DataTypes.STRING,
        allowNull: false
        },

        lastName: {
            type: DataTypes.STRING,
        allowNull: false
        },
        dob: {
            type: DataTypes.STRING,
        allowNull: false
        },
        email: {
            type: DataTypes.STRING,
        allowNull: false
        },

        password: {
            type: DataTypes.STRING,
        allowNull: false
        }
    })

    Users.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};
// before a User is created, their password will be automatically hash their password
    Users.addHook("beforeCreate", function(users) {
    users.password = bcrypt.hashSync(users.password, bcrypt.genSaltSync(10), null);
    });
        // Users.associate = models => {
        // Users.hasMany(models.orders, {
        //    onDelete: "cascade"
        // })
    // }

    return Users;
}
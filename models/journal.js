// Creates a "Journal" model that matches up with DB
module.exports = function(sequelize, DataTypes) {
    const journal = sequelize.define("journal", {
        title: { type: String, required: true },
        content: { type: String, required: true }
    });

    return journal;
}
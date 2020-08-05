// Creates a "Journal" model that matches up with DB
module.exports = function(sequelize, DataTypes) {
    const Journal = sequelize.define("Journal", {
        title: { type: String, required: true },
        content: { type: String, required: true }
    });

    return Journal;
}
// Creates a "Journal" model that matches up with DB
module.exports = function(sequelize, DataTypes) {
    var SavedJournal = sequelize.define("Journal", {
        title: DataTypes.STRING,
        savedJournal: DataTypes.BOOLEAN
    });

    return SavedJournal;
}


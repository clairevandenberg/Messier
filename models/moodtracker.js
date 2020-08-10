module.exports = function(sequelize, DataTypes) {
    const moodTracker = sequelize.define("moodTracker", {
        why: DataTypes.BOOLEAN,
        moodRate: DataTypes.BOOLEAN,
        date: DataTypes.BOOLEAN
});

return moodTracker;
};

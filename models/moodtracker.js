module.exports = function(sequelize, DataTypes) {
    const MoodTracker = sequelize.define("MoodTracker", {
        why: DataTypes.BOOLEAN,
        moodRate: DataTypes.BOOLEAN,
        date: DataTypes.BOOLEAN
});

return MoodTracker;
};

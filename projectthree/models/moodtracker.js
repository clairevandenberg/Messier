module.exports = function(sequelize, DataTypes) {
    const MoodTracker = sequelize.define("MoodTracker", {
        didToday: DataTypes.STRING,
        why: DataTypes.BOOLEAN,
        moodRate: DataTypes.BOOLEAN
});

return MoodTracker;
};

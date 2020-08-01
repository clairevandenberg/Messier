module.exports = function(sequelize, DataTypes) {
    const MoodTracker = sequelize.define("moodTracker", {
        didToday: DataTypes.STRING,
        why: DataTypes.BOOLEAN,
        moodRate: DataTypes.BOOLEAN
});

return MoodTracker;
};

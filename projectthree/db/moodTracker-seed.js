'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('users', [{
        moodRate: '10',
        didToday: 'Today i went to the beach and had a great day',
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        moodRate: '6',
        didToday: 'Today I spent the day studying',
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        moodRate: '2',
        didToday: 'Today it was raining so I wacthed movies and hung out with my family',
        createdAt: new Date(),
        updatedAt: new Date()
    }]);
  },
};


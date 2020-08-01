'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('users', [{
        moodRate: '10',
        why: 'I feel happy because I hung out at the beach with my freinds',
        didToday: 'Today i went to the beach and had a great day',
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        moodRate: '6',
        why: 'I did not finish my assignment so im now stressed',
        didToday: 'Today I spent the day studying',
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        moodRate: '2',
        why: 'My dog at my favourite shoe now',
        didToday: 'Today it was raining so I wacthed movies and hung out with my family',
        createdAt: new Date(),
        updatedAt: new Date()
    }]);
  },
};


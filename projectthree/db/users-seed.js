'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('users', [{
        name: 'Hamish',
        lastName: 'Smith',
        email: 'hamish@smith.com',
        dob: '05/09/1999',
        password: 'L)u`uc35?+',
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        name: 'Claire',
        lastName: 'Vandenberg',
        email: 'claire@vandenberg.com',
        dob: '29/09/1999',
        password: '{gy8WwHm2U',
        createdAt: new Date(),
        updatedAt: new Date()
    }]);
    
  },
};
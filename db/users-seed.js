'use strict';
const db = require("../models");

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('users', [{
        name: 'Hamish',
        lastName: 'Smith',
        email: 'hamish@smith.com',
        dob: '05/09/1999',
        password: '12345',
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        name: 'Claire',
        lastName: 'Vandenberg',
        email: 'claire@vandenberg.com',
        dob: '29/09/1999',
        password: '12345',
        createdAt: new Date(),
        updatedAt: new Date()
    }]);
    
  },
};
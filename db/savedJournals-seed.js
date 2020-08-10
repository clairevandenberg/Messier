'use strict';
const db = require("../models");

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('users', [{
        title: 'Beach Day',
        content: 'Today i went to the beach and had a great day',
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        title: 'Flowers',
        content: 'I am feeling very happy today because it was sunny and I bought myself flowers',
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        title: 'Hot Choc and Rain',
            content: 'Today rained and it was depressing but I made hot chocolate and watched movies which made me happy and relaxed',
            createdAt: new Date(),
            updatedAt: new Date()
    }]);
  },


};

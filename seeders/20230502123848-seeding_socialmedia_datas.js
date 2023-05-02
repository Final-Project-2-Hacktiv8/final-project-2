'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('SocialMedia', [
      {
        name: 'Instagram',
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId : 1
      },
      {
        name: 'Facebook',
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId : 1
      },
      {
        name: 'Twitter',
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId : 1
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('SocialMedia', null, {})
  }
};

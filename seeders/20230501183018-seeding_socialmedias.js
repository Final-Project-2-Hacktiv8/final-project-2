'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Socialmedia', [
      {
        name: 'Instagram',
        social_media_url: 'https://www.instagram.com/instagram/',
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId : 1
      },
      {
        name: 'Facebook',
        social_media_url: 'https://www.facebook.com/facebook/',
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId : 1
      },
      {
        name: 'Twitter',
        social_media_url: 'https://twitter.com/Twitter',
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId : 1
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

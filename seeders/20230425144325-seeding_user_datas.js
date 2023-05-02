'use strict';
const {hashPassword} = require('../helpers/bcrypt')
const data = {
  full_name: 'admin',
  email : 'admin',
  username: 'admin',
  password: hashPassword('admin'),
  profile_img_url: 'https://i.pinimg.com/originals/0c/0d/0d/0c0d0d0c0d0d0c0d0d0d0d0d0d0d0d0d.jpg',
  age: 20,
  phone_number: 1234567890,
  createdAt: new Date(),
  updatedAt: new Date(),
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [data], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {})
  }
};

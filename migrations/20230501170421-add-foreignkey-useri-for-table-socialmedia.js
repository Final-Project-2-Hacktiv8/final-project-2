'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('SocialMedia', 'userId', {
      type: Sequelize.INTEGER,
    })

    await queryInterface.addConstraint('SocialMedia', {
      fields : ['userId'],
      type : 'foreign key',
      name : 'user_id_fk',
      references : {
        table : 'Users',
        field : 'id'
      },
      onDelete : 'cascade',
      onUpdate : 'cascade'
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
      await queryInterface.removeConstraint('SocialMedia', 'user_id_fk')
      await queryInterface.removeColumn('SocialMedia', 'userId')
  }
};

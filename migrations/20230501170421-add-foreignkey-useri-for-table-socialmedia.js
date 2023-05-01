'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Socialmedia', 'UserId', {
      type: Sequelize.INTEGER,
    })

    await queryInterface.addConstraint('Socialmedia', {
      fields : ['UserId'],
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
      await queryInterface.removeConstraint('Socialmedia', 'user_id_fk')
      await queryInterface.removeColumn('Socialmedia', 'UserId')
  }
};

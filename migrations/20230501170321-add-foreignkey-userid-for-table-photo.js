'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('Photos', 'userId', {
      type: Sequelize.INTEGER,
    })

    await queryInterface.addConstraint('Photos', {
      fields: ['userId'],
      type: 'foreign key',
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
    await queryInterface.removeConstraint('Photos', 'user_id_fk')
    await queryInterface.removeColumn('Photos', 'userId')
  }
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Comments', 'UserId', {
      type: Sequelize.INTEGER,
    })
    await queryInterface.addColumn('Comments', 'PhotoId', {
      type: Sequelize.INTEGER,
    })

    await queryInterface.addConstraint('Comments', {
      fields: ['UserId'],
      type: 'foreign key',
      name : 'user_id_fk',
      references : {
        table : 'Users',
        field : 'id'
      },
      onDelete : 'cascade',
      onUpdate : 'cascade'
    })

    await queryInterface.addConstraint('Comments', {
      fields: ['PhotoId'],
      type: 'foreign key',
      name : 'photo_id_fk',
      references : {
        table : 'Photos',
        field : 'id'
      },
      onDelete : 'cascade',
      onUpdate : 'cascade'

    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Comments', 'user_id_fk')
    await queryInterface.removeColumn('Comments', 'photo_id_fk')
    await queryInterface.removeColumn('Comments', 'Userid')
    await queryInterface.removeColumn('Comments', 'PhotoId')
  }
};

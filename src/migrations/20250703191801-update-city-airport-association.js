'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.addConstraint('Airports',{
    type:'FOREIGN KEY',
    name : 'city-foriegn-key',
    fields : ['cityID'],

    references : {
      table: 'cities',
      fields: ['id']
     
    } ,
    onUpdate : 'cascade',
    onDelete : 'cascade'
  }

  )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Airports','city-foriegn-key');
  
  }
};

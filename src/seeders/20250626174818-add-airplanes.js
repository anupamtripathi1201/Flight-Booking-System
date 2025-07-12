'use strict';
const {Op} = require('sequelize');

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
    await queryInterface.bulkInsert('Airplanes',[{
      modelNumber : 'airbus390',
      capacity : 100,
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      modelNumber : 'airbus400',
      capacity : 400
      ,
      createdAt : new Date(),
      updatedAt : new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Airplanes',{[Op.or]:[{modelNumber:'airbus390'},{modeNumber: 'airbus400'}]})
  }
};

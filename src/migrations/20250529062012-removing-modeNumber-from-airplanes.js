'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Remove the column
    return queryInterface.removeColumn('Airplanes', 'modeNumber');
  },

  async down(queryInterface, Sequelize) {
    // Add the column back (rollback)
    return queryInterface.addColumn('Airplanes', 'modeNumber', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  }
};


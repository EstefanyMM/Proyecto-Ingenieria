'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Usuarios', [
      {
        nombre: 'John',
        apellido: 'Doe',
        correo: 'example@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Juan',
        apellido: 'Dosos',
        correo: 'example@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }    

    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Usuarios', null, {});
  }
};

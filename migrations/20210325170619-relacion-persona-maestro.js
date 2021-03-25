'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([

        queryInterface.addColumn('Maestros', 'personaId', {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: 'Personas',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        }, { transaction: t }),

      ]);
    });
  
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Maestros', 'personaId', { transaction: t }),
      ])
    })
   
  }
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([

        queryInterface.addColumn('MaestroIdiomas', 'maestroId', {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: 'Maestros',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        }, { transaction: t }),

        queryInterface.addColumn('MaestroIdiomas', 'idiomaId', {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: 'Idiomas',
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
        queryInterface.removeColumn('MaestroIdiomas', 'maestroId', { transaction: t }),
        queryInterface.removeColumn('MaestroIdiomas', 'idiomaId', { transaction: t }),
      ])
    })

    
    
  }
};

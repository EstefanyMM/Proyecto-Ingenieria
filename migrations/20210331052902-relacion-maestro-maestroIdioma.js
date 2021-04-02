'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([

        queryInterface.addColumn('MaestroIdiomas', 'MaestroId', {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: 'Maestros',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        }, { transaction: t }),

        queryInterface.addColumn('MaestroIdiomas', 'IdiomaId', {
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
        queryInterface.removeColumn('MaestroIdiomas', 'MaestroId', { transaction: t }),
        queryInterface.removeColumn('MaestroIdiomas', 'IdiomaId', { transaction: t }),
      ])
    })
  }
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([

        queryInterface.addColumn('ArchivoIdiomas', 'ArchivoId', {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: 'Archivos',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        }, { transaction: t }),

        queryInterface.addColumn('ArchivoIdiomas', 'IdiomaId', {
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
        queryInterface.removeColumn('ArchivoIdiomas', 'ArchivoId', { transaction: t }),
        queryInterface.removeColumn('ArchivoIdiomas', 'IdiomaId', { transaction: t }),
      ])
    })
  }
};

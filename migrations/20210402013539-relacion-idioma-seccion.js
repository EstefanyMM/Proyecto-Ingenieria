'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([

        queryInterface.addColumn('SeccionIdiomas', 'IdiomaId', {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: 'Idiomas',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        }, { transaction: t }),

        queryInterface.addColumn('SeccionIdiomas', 'SeccionId', {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: 'Seccions',
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
        queryInterface.removeColumn('SeccionIdiomas', 'IdiomaId', { transaction: t }),
        queryInterface.removeColumn('SeccionIdiomas', 'SeccionId', { transaction: t }),
      ])
    })
  }
};

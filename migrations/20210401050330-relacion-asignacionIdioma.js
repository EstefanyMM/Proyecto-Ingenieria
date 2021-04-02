'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([

        queryInterface.addColumn('AsignacionIdiomas', 'AsignacionId', {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: 'Asignacions',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        }, { transaction: t }),

        queryInterface.addColumn('AsignacionIdiomas', 'IdiomaId', {
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
        queryInterface.removeColumn('AsignacionIdiomas', 'AsignacionId', { transaction: t }),
        queryInterface.removeColumn('AsignacionIdiomas', 'IdiomaId', { transaction: t }),
      ])
    })
  }
};

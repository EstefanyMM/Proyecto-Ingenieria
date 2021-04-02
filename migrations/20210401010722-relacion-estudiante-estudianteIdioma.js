'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([

        queryInterface.addColumn('EstudianteIdiomas', 'EstudianteId', {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: 'Estudiantes',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        }, { transaction: t }),

        queryInterface.addColumn('EstudianteIdiomas', 'IdiomaId', {
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
        queryInterface.removeColumn('EstudianteIdiomas', 'EstudianteId', { transaction: t }),
        queryInterface.removeColumn('EstudianteIdiomas', 'IdiomaId', { transaction: t }),
      ])
    })
  }
};

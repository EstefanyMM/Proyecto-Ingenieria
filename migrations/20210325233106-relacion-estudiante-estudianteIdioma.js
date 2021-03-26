'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([

        queryInterface.addColumn('EstudianteIdiomas', 'estudianteId', {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: 'Estudiantes',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        }, { transaction: t }),

        queryInterface.addColumn('EstudianteIdiomas', 'idiomaId', {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: 'Idiomas',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        }, { transaction: t }),

        queryInterface.addColumn('EstudianteIdiomas', 'calificacionId', {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: 'Calificacions',
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
        queryInterface.removeColumn('EstudianteIdiomas', 'estudianteId', { transaction: t }),
        queryInterface.removeColumn('EstudianteIdiomas', 'idiomaId', { transaction: t }),
        queryInterface.removeColumn('EstudianteIdiomas', 'calificacionId', { transaction: t }),
      ])
    })     
    
  }
};

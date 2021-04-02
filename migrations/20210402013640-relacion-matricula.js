'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([

        queryInterface.addColumn('Matriculas', 'EstudianteId', {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: 'Estudiantes',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        }, { transaction: t }),

        queryInterface.addColumn('Matriculas', 'SeccionIdiomaId', {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: 'SeccionIdiomas',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        }, { transaction: t }),

        queryInterface.addColumn('Matriculas', 'FacturaId', {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: 'Facturas',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        }, { transaction: t }),

        queryInterface.addColumn('Matriculas', 'MaestroId', {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: 'Maestros',
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
        queryInterface.removeColumn('Matriculas', 'EstudianteId', { transaction: t }),
        queryInterface.removeColumn('Matriculas', 'SeccionIdiomaId', { transaction: t }),
        queryInterface.removeColumn('Matriculas', 'FacturaId', { transaction: t }),
        queryInterface.removeColumn('Matriculas', 'MaestroId', { transaction: t }),
      ])
    })      
  }
};

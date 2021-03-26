'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([

        queryInterface.addColumn('Matriculas', 'estudianteId', {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: 'Estudiantes',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        }, { transaction: t }),

        queryInterface.addColumn('Matriculas', 'seccionId', {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: 'Seccions',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        }, { transaction: t }),

        queryInterface.addColumn('Matriculas', 'facturaId', {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: 'Facturas',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        }, { transaction: t }),

        queryInterface.addColumn('Matriculas', 'maestroId', {
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
        queryInterface.removeColumn('Matriculas', 'estudianteId', { transaction: t }),
        queryInterface.removeColumn('Matriculas', 'seccionId', { transaction: t }),
        queryInterface.removeColumn('Matriculas', 'facturaId', { transaction: t }),
        queryInterface.removeColumn('Matriculas', 'maestroId', { transaction: t }),
      ])
    })      

  }
};

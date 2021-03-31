'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seccion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Seccion.belongsTo(models.Idioma)
      Seccion.hasMany(models.Matricula)
    }
  };
  Seccion.init({
    horaInicio: DataTypes.INTEGER,
    horaFin: DataTypes.INTEGER,
    cuposMaximos: DataTypes.INTEGER,
    dias: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Seccion',
  });
  return Seccion;
};
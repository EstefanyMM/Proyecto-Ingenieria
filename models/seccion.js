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
      // define association here
      Seccion.hasMany(models.SeccionIdioma)
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
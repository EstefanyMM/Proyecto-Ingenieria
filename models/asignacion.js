'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Asignacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Asignacion.hasMany(models.AsignacionIdioma)
    }
  };
  Asignacion.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    fecha: DataTypes.DATE,
    valor: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Asignacion',
  });
  return Asignacion;
};
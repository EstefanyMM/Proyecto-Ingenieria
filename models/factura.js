'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Factura extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Factura.hasMany(models.Matricula)
    }
  };
  Factura.init({
    fechaIngreso: DataTypes.DATE,
    montoFinal: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Factura',
  });
  return Factura;
};
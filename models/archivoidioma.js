'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ArchivoIdioma extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ArchivoIdioma.belongsTo(models.Idioma)
      ArchivoIdioma.belongsTo(models.Archivo)
    }
  };
  ArchivoIdioma.init({
    fecha: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'ArchivoIdioma',
  });
  return ArchivoIdioma;
};
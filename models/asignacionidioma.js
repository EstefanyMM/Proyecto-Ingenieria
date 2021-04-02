'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AsignacionIdioma extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      AsignacionIdioma.belongsTo(models.Idioma)
      AsignacionIdioma.belongsTo(models.Asignacion)
    }
  };
  AsignacionIdioma.init({
    hora: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'AsignacionIdioma',
  });
  return AsignacionIdioma;
};
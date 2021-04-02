'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MaestroIdioma extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MaestroIdioma.belongsTo(models.Idioma)
      MaestroIdioma.belongsTo(models.Maestro)
    }
  };
  MaestroIdioma.init({
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MaestroIdioma',
  });
  return MaestroIdioma;
};
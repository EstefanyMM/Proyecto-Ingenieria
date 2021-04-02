'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SeccionIdioma extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SeccionIdioma.belongsTo(models.Idioma)
      SeccionIdioma.belongsTo(models.Seccion)
      SeccionIdioma.hasMany(models.Matricula)
    }
  };
  SeccionIdioma.init({
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SeccionIdioma',
  });
  return SeccionIdioma;
};
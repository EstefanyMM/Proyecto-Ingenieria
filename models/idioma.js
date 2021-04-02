'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Idioma extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Idioma.hasMany(models.MaestroIdioma)
      Idioma.hasMany(models.SeccionIdioma)
      Idioma.hasMany(models.EstudianteIdioma)
      Idioma.hasMany(models.AsignacionIdioma)
      Idioma.hasMany(models.ArchivoIdioma)
    }
  };
  Idioma.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    precio: DataTypes.FLOAT,
    totalEstudiante: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Idioma',
  });
  return Idioma;
};
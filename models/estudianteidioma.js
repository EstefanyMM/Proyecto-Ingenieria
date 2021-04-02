'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EstudianteIdioma extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      EstudianteIdioma.belongsTo(models.Idioma)
      EstudianteIdioma.belongsTo(models.Estudiante)
      EstudianteIdioma.hasMany(models.Calificacion)
    }
  };
  EstudianteIdioma.init({
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'EstudianteIdioma',
  });
  return EstudianteIdioma;
};
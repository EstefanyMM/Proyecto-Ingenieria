'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Persona extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Persona.hasMany(models.Estudiante)
      Persona.hasMany(models.Correo)
      Persona.hasMany(models.Maestro)
      Persona.hasMany(models.Administrador)
    }
  };
  Persona.init({
    nombreCompleto: DataTypes.STRING,
    numeroIdentidad: DataTypes.STRING,
    direccion: DataTypes.STRING,
    edad: DataTypes.INTEGER,
    numeroTelefono: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Persona',
  });
  return Persona;
};
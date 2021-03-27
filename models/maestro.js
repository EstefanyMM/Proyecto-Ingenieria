'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Maestro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Maestro.belongsTo(models.Persona)
    }
  };
  Maestro.init({
    nombreUsuario: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    password: DataTypes.STRING,
    codigoSeguridad: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Maestro',
  });
  return Maestro;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Correo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Correo.belongsTo(models.Persona)
    }
  };
  Correo.init({
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Correo',
  });
  return Correo;
};
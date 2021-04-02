'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Evento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Evento.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    fechaEvento: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Evento',
  });
  return Evento;
};
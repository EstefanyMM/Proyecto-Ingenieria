'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MaestroIdiomas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  MaestroIdiomas.init({
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MaestroIdiomas',
  });
  return MaestroIdiomas;
};
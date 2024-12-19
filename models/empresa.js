'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class empresa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  empresa.init({
    nombre: DataTypes.STRING,
    ZIF: DataTypes.STRING,
    direccion: DataTypes.STRING,
    descuento: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'empresa',
  });
  return empresa;
};
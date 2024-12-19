'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class productos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  productos.init({
    descripcion: DataTypes.STRING,
    precio_euros: DataTypes.INTEGER,
    precio_dolares: DataTypes.INTEGER,
    formato: DataTypes.STRING,
    cosecha: DataTypes.STRING,
    cantidad: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'productos',
  });
  return productos;
};

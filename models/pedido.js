'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pedido.init({
    id_cliente: DataTypes.INTEGER,
    id_empresa: DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER,
    tipo: DataTypes.STRING,
    precio: DataTypes.INTEGER,
    totalIVA: DataTypes.INTEGER,
    total: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'pedido',
  });
  return pedido;
};
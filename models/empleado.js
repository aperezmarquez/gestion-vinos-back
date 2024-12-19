'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class empleado extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  empleado.init({
    seguridad_social: DataTypes.STRING,
    IBAN: DataTypes.STRING,
    NIF: DataTypes.STRING,
    nombre: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    nacimiento: DataTypes.STRING,
    domicilio: DataTypes.STRING,
    telefono: DataTypes.STRING,
    contacto_emergencia: DataTypes.STRING,
    categoria: DataTypes.STRING,
    ingreso: DataTypes.STRING,
    titulacion: DataTypes.STRING,
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'empleado',
  });
  return empleado;
};
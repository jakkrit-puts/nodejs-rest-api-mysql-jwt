'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Product.init({
    product_code: DataTypes.STRING,
    product_name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    category_code: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
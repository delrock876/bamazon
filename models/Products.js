module.exports= (sequelize, Model, DataTypes) =>{

  class Products extends Model{ }

  Products.init({
    item_id: DataTypes.INTEGER,
    product_name: DataTypes.STRING,
    department_name: DataTypes.STRING,
    price: DataTypes.STRING,
    stock_quantity: DataTypes.INTEGER

  }, {sequelize, modelName: 'products'})

  return Products
}

const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config')


const Products = require('./Products')(sequelize, Model, DataTypes)
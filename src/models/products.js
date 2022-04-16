const Sequelize = require('sequelize')
const db = require('./database.js')
const users = require('./users.js')
const products = db.define('products', {
  id: {
    primaryKey: true,
    type: Sequelize.INTEGER,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING(255),
    allowNull: false,
  }, 
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING(600),
    allowNull: true
  }
})
module.exports = products

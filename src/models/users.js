const Sequelize = require('sequelize')
console.log(process.env)
const db = require('./database.js')
const jws = require('jws')
const users = db.define('users', {
  id: {
    primaryKey: true,
    type: Sequelize.INTEGER,
    autoIncrement: true
  },
  username: {
    type: Sequelize.STRING(16),
    allowNull: false,
    unique: true,

  },
  
  password: {
    type : Sequelize.STRING(256),
    allowNull: false
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

/* users.create({username : 'admin', password: jws.sign({
  header: { alg: 'HS256' },
  payload: 'IamAdmin',
  secret: 'my name is Karim'
}), isAdmin: true})*/
module.exports = users

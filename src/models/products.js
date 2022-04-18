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
    type: Sequelize.STRING(50),
    allowNull: false
  },
  description: {
    type: Sequelize.STRING(600),
    allowNull: true
  }
})
products.create({name : 'Petite boite chocolat', price : '100$',   description: 'Petite Boite de chocolat'})
 products.create({name : 'Moyenne boite chocolat', price :  '200$',   description: 'Moyenne Boite de chocolat'})
 products.create({name : 'Grande boite chocolat', price :  '300$',   description: 'Grande Boite de chocolat'})
 products.create({name : 'Petit coffret', price :  '400$',   description: 'Petit coffret de chocolat'})
 products.create({name : 'Moyen coffret', price :  '500$',   description: 'Moyen coffret de chocolat'})
 products.create({name : 'Grand coffret', price :  '600$',   description: 'Grand coffret de chocolat'})
 products.create({name : 'Petite boite amandes', price :  '150$',   description: "Petite Boite d'amandes"})
 products.create({name : 'Moyenne boite amandes', price :  '250$',   description: "Moyenne Boite d'amandes"})
 products.create({name : 'Grande boite amandes ', price :  '350$',   description: "Grande Boite d'amandes"})
 products.create({name : 'Petite boite noix', price :  '150$',   description: "Petite Boite de noix"})
 products.create({name : 'Moyenne boite noix', price :  '250$',   description: "Moyenne Boite de noix"})
 products.create({name : 'Grande boite noix ', price :  '350$',   description: "Grande Boite de noix"})
 products.create({name : 'Petite boite  acajout', price :  '200$',   description: "Petite Boite d'acajout"})
 products.create({name : 'Moyenne boite acajout', price :  '300$',   description: "Moyenne Boite d'acajout"})
 products.create({name : 'Grande boite  acajout', price :  '400$',   description: "Grande Boite d'acajout"})
 products.create({name : 'Petite boite  nougats', price :  '200$',   description: "Petite Boite de nougats"})
 products.create({name : 'Moyenne boite nougats', price :  '300$',   description: "Moyenne Boite de nougats"})
 products.create({name : 'Grande boite  nougats', price :  '400$',   description: "Grande Boite de nougats"})
 products.create({name : 'Petite boite chocolat vanille', price :  '100$',   description: 'Petite Boite de chocolat vanille'})
 products.create({name : 'Moyenne boite chocolat vanille ', price :  '200$',   description: 'Moyenne Boite de chocolat vanille'})
 products.create({name : 'Grande boite chocolat vanille ', price :  '300$',   description: 'Grande Boite de chocolat vanille'})
 products.create({name : 'Petite boite caramèle', price :  '100$',   description: 'Petite Boite de caramèle'})
 products.create({name : 'Moyenne boite caramèle ', price :  '200$',   description: 'Moyenne Boite de caramèle'})
 products.create({name : 'Grande boite caramèle ', price :  '300$',   description: 'Grande Boite de caramèle'})
 products.create({name : 'Petite boite friandise', price :  '200$',   description: 'Petite Boite de friandise'})
 products.create({name : 'Moyenne boite friandise ', price :  '300$',   description: 'Moyenne Boite de friandise'})
 products.create({name : 'Grande boite friandise ', price :  '400$',   description: 'Grande Boite de friandise'})
 products.create({name : 'Petite boite fruits secs', price :  '200$',   description: 'Petite Boite de fruits secs'})
 products.create({name : 'Moyenne boite fruits secs', price :  '300$',   description: 'Moyenne Boite de fruits secs'})
 products.create({name : 'Grande boite fruits secs', price :  '400$',   description: 'Grande Boite de fruits secs'})
 products.create({name : 'Petite boite familiale', price :  '300$',   description: 'Petit assorticement familiale'})
 products.create({name : 'Moyenne boite familiale', price :  '500$',   description: 'Moyen assorticement familiale'})
 products.create({name : 'Grande boite familiale', price :  '700$',   description: 'Grand assorticement familiale'})
 products.create({name : 'Petite boite speciale sans gluten', price :  '250$',   description: 'Petite Boite speciale sans gluten'})
 products.create({name : 'Moyenne boite speciale sans gluten', price :  '350$',   description: 'Moyenne Boite speciale sans gluten'})
 products.create({name : 'Grande boite speciale sans gluten', price :  '450$',   description: 'Grande Boite speciale sans gluten'})
 products.create({name : 'Petite boite speciale sans lactose', price :  '250$',   description: 'Petite Boite speciale sans lactose'})
 products.create({name : 'Moyenne boite speciale sans lactose', price :  '350$',   description: 'Moyenne Boite speciale sans lactose'})
 products.create({name : 'Grande boite speciale sans lactose', price :  '450$',   description: 'Grande Boite speciale sans lactose'})
 products.create({name : 'Petite boite speciale sans sucre', price :  '250$',   description: 'Petite Boite speciale sans sucre'})
 products.create({name : 'Moyenne boite speciale sans sucre', price :  '350$',   description: 'Moyenne Boite speciale sans sucre'})
 products.create({name : 'Grande boite speciale sans sucre', price :  '450$',   description: 'Grande Boite speciale sans sucre'})
 products.create({name : 'Petite boite chocolats fromboise', price :  '200$',   description: 'Petite Boite de chocolats fromboise'})
 products.create({name : 'Moyenne boite chocolats fromboise', price :  '300$',   description: 'Moyenne Boite de chocolats fromboise'})
 products.create({name : 'Grande boite chocolats fromboise', price :  '400$',   description: 'Grande Boite de chocolats fromboise'})
 products.create({name : 'Petite boite chocolats Myrtilles', price :  '200$',   description: 'Petite Boite de chocolats Myrtilles'})
 products.create({name : 'Moyenne boite chocolats Myrtilles', price :  '300$',   description: 'Moyenne Boite de chocolats Myrtilles'})
 products.create({name : 'Grande boite chocolats Myrtilles', price :  '400$',   description: 'Grande Boite de chocolats Myrtilles'})
 products.create({name : 'Petite boite bleuts', price :  '100$',   description: 'Petite Boite de bleuts'})
 products.create({name : 'Moyenne boite bleuts', price :  '200$',   description: 'Moyenne Boite de bleuts'})
 products.create({name : 'Grande boite bleuts', price :  '300$',   description: 'Grande Boite de bleuts'})
 products.create({name : 'Petite boite spéciale Zevent', price  : '300$',   description: 'Petite Boite spéciale Zevent'})
 products.create({name : 'Moyenne boite spéciale Zevent', price  : '400$',   description: 'Moyenne Boite spéciale Zevent'})
 products.create({name : 'Grande boite spéciale Zevent', price  : '500$',   description: 'Grande Boite spéciale Zevent'})
 products.create({name : 'Petite boite mix chocolats', price  : '100$',   description: 'Petite Boite de mix chocolats'})
 products.create({name : 'Moyenne boite mix chocolats', price  : '200$',   description: 'Moyenne Boite de mix chocolats'})
 products.create({name : 'Grande boite mix chocolats', price :  '300$',   description: 'Grande Boite de mix chocolats'})
 products.create({name : 'Petite boite mix fruits secs', price :  '200$',   description: 'Petite Boite de mix fruits secs'})
 products.create({name : 'Moyenne boite mix fruits secs', price :  '300$',   description: 'Moyenne Boite de mix fruits secs'})
 products.create({name : 'Grande boite mix fruits secs', price :  '400$',   description: 'Grande Boite de mix fruits secs'})


module.exports = products

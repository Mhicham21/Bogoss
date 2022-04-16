require('../models/users.js')
require('../models/products.js')
//Ajouter ici les nouveaux require des nouveaux modèles
require('../models/database.js').sync({ force: true })

const router = require('express').Router()
const path = require('path')
router.use(require('./user'))
router.use(require('./product'))
//frontend rendering
router.get('/', function (req, res){
    res.sendFile(path.normalize(__dirname+'/../frontend/Projet.html'))
})
router.get('/Connection.js', function (req, res){
    res.sendFile(path.normalize(__dirname+'/../frontend/Connection.js'))
})

module.exports = router

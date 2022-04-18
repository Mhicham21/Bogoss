const router = require('express').Router()
const path = require('path')
router.use(require('./user'))
router.use(require('./product'))
//frontend rendering
router.get('/', function (req, res){
    res.sendFile(path.normalize(__dirname+'/../frontend/Projet.html'))
})
module.exports = router

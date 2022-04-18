const router = require('express').Router()
router.use(require('./user'))
router.use(require('./product'))
//frontend rendering
router.get('/', function (req, res){
    res.sendFile(__dirname+'/../frontend/projet.html')
})
module.exports = router

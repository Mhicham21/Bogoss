const router = require('express').Router()
router.use(require('./user'))
router.use(require('./product'))
router.get('/', function (req, res){
    res.sendFile(__dirname+'/../frontend/index.html')
})
module.exports = router

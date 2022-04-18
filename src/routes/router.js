const router = require('express').Router()
router.use(require('./user'))
router.use(require('./product'))
router.get('/', function (req, res){
    res.sendFile('index.html')
})
module.exports = router

const express = require('express')
const router = express.Router()
const user = require('../controllers/user.js')

router.get('/api/users/admin', user.getUsers)
router.get('/api/users/:id', user.getUser)
router.post('/api/users/logIn', user.authentificationUser)
router.post('/api/users/signIn', user.newUser)

router.delete('/api/users/:id', user.deleteUser)
router.put('/api/users/:id', user.updateUser)

module.exports = router

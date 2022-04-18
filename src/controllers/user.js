const status = require('http-status')
const userModel = require('../models/users.js')
const has = require('has-keys')
const jws = require('jws')
const CodeError = require('../util/CodeError.js')
const SECRET_KEY = 'my name is Karim'

async function checkLoggedPerson(req, res){
  if (!has(req.params, 'id')) throw new CodeError('You must specify the id of the user', status.BAD_REQUEST)
  if (!has(req.headers, 'hashedpassword')) throw new CodeError('You must specify a password', status.BAD_REQUEST)
  const { id } = req.params
  const { hashedpassword } = req.headers
  const data = await userModel.findOne({ where: { id : id, password : hashedpassword } })
  if (!data) throw new CodeError('authentification issue', status.BAD_REQUEST)
  return {id: id, isAdmin: data.isAdmin}
}
module.exports = {
  checkLoggedPerson,
  async authentificationUser (req, res) {
    res.setHeader('Content-Type', 'application/json')
    if (!has(req.body, 'username')) throw new CodeError('You must specify a username', status.BAD_REQUEST)
    if (!has(req.body, 'password')) throw new CodeError('You must specify a password', status.BAD_REQUEST)
    const { username, password } = req.body
    const hashedPassword = jws.sign({
      header: { alg: 'HS256' },
      payload: `${password}`,
      secret: SECRET_KEY
    })
    const data = await userModel.findOne({ where: { username : username, password : hashedPassword } })
    if (!data) throw new CodeError('logging failed user not found', status.BAD_REQUEST)
    res.json({ status: true, message: 'Returning user', data: {id : data.id, username: data.username, token: data.password}})
  },
  async getUser (req , res){
    res.setHeader('Content-Type', 'application/json')
    const {id} = await checkLoggedPerson(req, res)
    const data = await userModel.findOne({ where: { id : id } })
    data.password = jws.decode(data.password).payload
    res.json({ status: true, message: 'returning user', data : data })
  }, 
  async getUsers (req, res) {
    if (!has(req.headers, 'hashedpassword')) throw new CodeError('You must specify a password', status.BAD_REQUEST)
    res.setHeader('Content-Type', 'application/json')
    const {hashedpassword} = req.headers
    const data = await userModel.findOne({ where: {password : hashedpassword, isAdmin : true} })
    if(!data) throw new CodeError('Only admin has the right to access this data', status.BAD_REQUEST)
    const info = await userModel.findAll()
    res.json({ status: true, message: 'Returning users', data : info })
  },
  async newUser (req, res) {
    const corps = req.body
    res.setHeader('Content-Type', 'application/json')
    if (!has(corps, 'username')) throw new CodeError('You must specify the username', status.BAD_REQUEST)
    if (!has(corps, 'password')) throw new CodeError('You must specify the password', status.BAD_REQUEST)
    const { username, password } = corps
    const hashedPassword = jws.sign({
      header: { alg: 'HS256' },
      payload: `${password}`,
      secret: SECRET_KEY
    })
    await userModel.create({ username: username, password: hashedPassword })
    if(has(corps, 'email')) await userModel.update({email : corps['email']}, {where : {username : username}})
    if(has(corps, 'telephone')) await userModel.update({telephone : corps['telephone']}, {where : {username : username}})
    res.json({ status: true, message: 'User Added' })
  },
  async updateUser (req, res) {
    res.setHeader('Content-Type', 'application/json')
    const {id} = await checkLoggedPerson(req, res)
    const corps = req.body
    if((!has(corps, "updatedUsername")) && (!has(corps, "updatedPassword"))) throw new CodeError('You must specify at least one thing to update', status.BAD_REQUEST)
    if (has(corps, 'updatedUsername')){
      const {updatedUsername} = corps
      await userModel.update({ username : updatedUsername }, { where: { id : id } })
    }
    if (has(corps, 'updatedPassword')){
      const {updatedPassword} = corps
      const updatedHashedPassword = jws.sign({
        header: { alg: 'HS256' },
        payload: `${updatedPassword}`,
        secret: SECRET_KEY
      })
      await userModel.update({ password : updatedHashedPassword }, { where: { id : id } })
    }
    res.json({ status: true, message: 'User updated' })
  },
  async deleteUser (req, res) {
    res.setHeader('Content-Type', 'application/json')
    const {id} = await checkLoggedPerson(req, res)
    await userModel.destroy({ where: { id : id } })
    res.json({ status: true, message: 'User deleted' })
  }
}
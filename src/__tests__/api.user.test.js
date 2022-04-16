const app = require('../app')
const request = require('supertest')
const userModel = require('../models/users.js')
const jws = require('jws')

async function createUser(nom, motDePasse){
  const response = await request(app)
    .post('/api/users/signIn').send({username : nom, password: motDePasse})
  expect(response.statusCode).toBe(200)
  expect(response.body.message).toBe('User Added')
}
describe('GET /api/users', () => {
  test('Test if get users works with only admin on the table', async () => {
    const response = await request(app)
      .get('/api/users/admin').set({hashedPassword: jws.sign({
        header: { alg: 'HS256' },
        payload: 'IamAdmin',
        secret: 'my name is Karim'
      })})
    expect(response.statusCode).toBe(200)
    expect(response.body.message).toBe('Returning users')
    expect(response.body.data.length).toBe(1)
  })
})
describe('POST /api/users/signIn', () => {
  test('Test if creating users work and if getting users works with a non empty database', async () => {
    await createUser("karim", "nooo")
    await createUser("ayman", "yeees")
    await createUser("mohammed", "waaw")
    await createUser("siham", "broo")
    await createUser("hicham", 'lool')
    const response = await request(app)
      .get('/api/users/admin').set({hashedPassword: jws.sign({
        header: { alg: 'HS256' },
        payload: 'IamAdmin',
        secret: 'my name is Karim'
      })})
    expect(response.statusCode).toBe(200)
    expect(response.body.message).toBe('Returning users')
    expect(response.body.data.length > 0).toBe(true)
  })
  test('create two users with the same name', async () => {
    const response = await request(app)
    .post('/api/users/signIn').send(JSON.stringify({username : 'karim', hashedPassword: 'dummyData' }))
    expect(response.statusCode).toBe(400)
  })
})

describe('POST /api/users/logIn', () => {
  test('authentification', async () => {
    const response = await request(app)
    .post('/api/users/logIn').send({username : 'karim', password: 'nooo'})
  expect(response.statusCode).toBe(200)
  expect(response.body.data.username).toBe('karim')

  })
})

describe('DELETE /api/users/id', () => {
  test('authentification', async () => {
    const response = await request(app)
    .delete('/api/users/2').set({hashedPassword: 'eyJhbGciOiJIUzI1NiJ9.bm9vbw.zOBDibtga0wJDeiJhXseeBpw7hUcfBQuOHq3xNRHsQg'})
  expect(response.statusCode).toBe(200)
  expect(response.body.message).toBe('User deleted')

  })
})



  
  


const app = require('../app')
const request = require('supertest')
const tagsModel = require('../models/products.js')
const userModel = require('../models/users.js')
const jws = require('jws')

describe('POST /api/users/id/tags', () => {
    test('Test adding products', async () => {
    const response = await request(app)
        .post('/api/users/admin/products').set({hashedPassword: "eyJhbGciOiJIUzI1NiJ9.SWFtQWRtaW4.YIVg8PfdSY6lWKqA9G7MA647Uhupr-dP7a02OKhFxrM"}).send({name : "premier produit", price: 155, description: "too expensive"})
    expect(response.statusCode).toBe(200)
    expect(response.body.message).toBe('product Added')   
    })
  })

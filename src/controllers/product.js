const status = require('http-status')
const productModel = require('../models/products.js')
const userModel = require('../models/users.js')
const has = require('has-keys')
const CodeError = require('../util/CodeError.js')
const {checkLoggedPerson} = require('./user')
module.exports = {
    async getProducts(req, res){
        const loggedUser = checkLoggedPerson(req, res)
        const info = await productModel.findAll()
        res.setHeader('Content-Type', 'application/json')
        res.json({ status: true, message: 'Returning products', data : info })
    },

    async updateProduct(req, res){
        if (!has(req.headers, 'hashedpassword')) throw new CodeError('authentification issue', status.BAD_REQUEST)
        const {hashedpassword} = req.headers 
        const admin = await userModel.findOne({where: {password: hashedpassword, isAdmin: true}})
        if (!admin) throw new CodeError('You dont have the right to do that action', status.BAD_REQUEST)
        if (!has(req.params, 'pid')) throw new CodeError('You must specify the product id', status.BAD_REQUEST)
        const { pid } = req.params
        if (!has(req.body, "name") && !has(req.body, "price") && !has(req.body, "description")) 
            throw new CodeError('You must specify something to change', status.BAD_REQUEST)
        if (has(req.body, "name")){
            const {name} = req.body
            await productModel.update({ name : name }, { where: {id : pid }})    
        }
        if (has(req.body, "price")){
            const {price} = req.body
            await productModel.update({ price: price }, { where: {id : pid }})    
        }
        if (has(req.body, "description")){
            const {description} = req.body
            await productModel.update({ description : description }, { where: {id : pid }})    
        }
        res.setHeader('Content-Type', 'application/json')
        res.json({ status: true, message: 'Product updated' })

    },

    async deleteProduct(req, res){
        if (!has(req.headers, 'hashedpassword')) throw new CodeError('authentification issue', status.BAD_REQUEST)
        const {hashedpassword} = req.headers 
        const admin = await userModel.findOne({where: {password: hashedpassword, isAdmin: true}})
        if (!admin) throw new CodeError('You dont have the right to do that action', status.BAD_REQUEST)
        if (!has(req.params, 'pid')) throw new CodeError('You must specify the product id', status.BAD_REQUEST)
        const { pid } = req.params
        await productModel.destroy({ where: { id : pid} })
        res.setHeader('Content-Type', 'application/json')
        res.json({ status: true, message: 'product deleted' })
    },

    async newProduct(req, res){
        if (!has(req.headers, 'hashedpassword')) throw new CodeError('authentification issue', status.BAD_REQUEST)
        const {hashedpassword} = req.headers 
        const admin = await userModel.findOne({where: {password: hashedpassword, isAdmin: true}})
        console.log(admin)
        if (!admin) throw new CodeError('You dont have the right to do that action', status.BAD_REQUEST)
        if (!has(req.body, 'name') && !has(req.body, "price") && !has(req.body, "description")) 
            throw new CodeError('You must specify the name of the product, the price and the description', status.BAD_REQUEST)
        const { name, price, description } = req.body
        await productModel.create({ name: name, price: price, description: description })
        res.setHeader('Content-Type', 'application/json')
        res.json({ status: true, message: 'product Added' })
    }

}
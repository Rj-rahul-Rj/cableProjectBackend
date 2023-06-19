const router   =  require('express').Router()
const { customer } = require('../controller/customer/customer')

module.exports = (app) =>{
    router.post('/createCustomer',customer.createCustomer)
    app.use('/',router)
}   
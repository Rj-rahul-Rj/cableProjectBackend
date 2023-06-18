const router   =  require('express').Router()

module.exports = (app) =>{
    router.get('/createCustomer',auth.createCustomer)
    app.use('/',router)
}   
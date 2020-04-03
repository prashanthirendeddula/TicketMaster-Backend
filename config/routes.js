const express=require('express')
const router=express.Router()
const customercontroller=require('../app/controller/customerscontroller')
const departmentscontroller=require("../app/controller/departmentscontroller")
const employeescontroller=require('../app/controller/employeescontroller')
const ticketscontroller=require('../app/controller/ticketscontroller')
router.get('/customers',customercontroller.list)
router.post('/customers',customercontroller.create)
router.get('/customers/:id',customercontroller.show)
router.delete('/customers/:id',customercontroller.remove)
router.put('/customers/:id',customercontroller.update)


router.get('/departments',departmentscontroller.list)
router.post('/departments',departmentscontroller.create)
router.get('/departments/:id',departmentscontroller.show)
router.delete('/departments/:id',departmentscontroller.remove)
router.put('/departments/:id',departmentscontroller.update)


router.get('/employees',employeescontroller.list)
router.post('/employees',employeescontroller.create)
router.get('/employees/:id',employeescontroller.show)
router.delete('/employees/:id',employeescontroller.remove)
router.put('/employees/:id',employeescontroller.update)


router.get('/tickets',ticketscontroller.list)
router.post('/tickets',ticketscontroller.create)
router.get('/tickets/:id',ticketscontroller.show)
router.delete('/tickets/:id',ticketscontroller.remove)
router.put('/tickets/:id',ticketscontroller.update)


module.exports=router
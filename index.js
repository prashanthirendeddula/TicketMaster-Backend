const express=require('express')
const app=express()
const mongoose=require('mongoose')
const dbsetup=require('./config/database')
const router=require('./config/routes')
const port=3045
app.use(express.json())
app.use('/',router)
//database connection
dbsetup()
app.listen(port,()=>{
    console.log('listening on port',port)
})

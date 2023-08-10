const express = require('express')
const mongoose = require('mongoose')
const app = express()
mongoose.connect("mongodb://127.0.0.1:27017/Crud_ops")
.then(()=>{console.log("mongodb connected")})
.catch((error)=>{console.log("error")

})
//ROUTES

app.get("/",(req,res)=>{
    res.send('Salaam')
})

app.listen(4001,()=>{console.log('Server  started at port 4001')})
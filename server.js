const express = require('express')
const app = express()


//ROUTES

app.get("/",(req,res)=>{
    res.send('Salaam')
})

app.listen(4001,()=>{console.log('Server  started at port 4001')})
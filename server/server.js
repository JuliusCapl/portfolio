 const express = require('express')
const cors = require('cors')
const mailer = require('./mailer')
require('dotenv').config({path:'./.env'})
const port = process.env.PORT || 4000


const app = express()
app.use(cors())
app.use(express.json())
// app.use('/bootstrap',()=>{console.log(__dirname)})

app.post('/contact',(req,res)=>{
    const {email, message} = req.body
    mailer.sendEmail(email,message)
})

app.listen(port,()=>console.log(`Server running on http://localhost:${port}`))
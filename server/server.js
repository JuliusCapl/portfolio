const port = 4000
const express = require('express')
const app = express()

app.post('/contact',(req,res)=>{

})

app.listen(port,()=>{
    console.log(`Server running on port: ${port}`)
})
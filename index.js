const express = require("express")
const path = require('path')
const app =  express()
const PORT = 5000
app.use(express.static(path.join(__dirname,"public")))

app.get('/', (req,res) =>{
    res.send(path.join(__dirname,"public",'index.html'))
})

app.listen(PORT,() => {
    console.log("Server is running PORT")
})
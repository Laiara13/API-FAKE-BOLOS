const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())



const port = process.env.PORT || 8080


const { bolos } = require('./models/articles')

app.use(express.json())
app.use(express.urlencoded({
    extende: true
}))


app.use('/img', express.static(__dirname + '/public/img'));


//LISTAR TODAS OS BOLOS
app.get('/bolos', (req,res)=>{
    res.json(bolos)
})

//LISTAR UM BOLO
app.get('/bolo/:index', (req,res) =>{
    const { index } = req.params;
    return res.json(bolo[index])
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
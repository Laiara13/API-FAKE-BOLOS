const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())


const port = process.env.PORT || 8080

const { publicacoes } = require('./models/articles')

app.use(express.json())
app.use(express.urlencoded({
    extende: true
}))


app.use('/img', express.static(__dirname + '/public/images'));


//LISTAR TODAS OS BOLOS
app.get('/bolos', (req,res)=>{
    res.json(publicacoes)
})
1
//LISTAR UM BOLO
app.get('/bolo/:index', (req,res) =>{
    const { index } = req.params;
    return res.json(publicacoes[index])
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
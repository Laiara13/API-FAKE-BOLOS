const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())


const port = process.env.PORT || 8080

const { publicacoes } = require('./models/articles')
const { catweb } = require('./models/games')

app.use(express.json())
app.use(express.urlencoded({
    extende: true
}))


app.use('/img', express.static(__dirname + '/public/images'));

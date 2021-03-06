const express = require('express')
const app = express()
const config = require('config')


app.use(express.json())
app.use(express.urlencoded({extended: true}))

const roteador = require('./rotas/fornecedores')
app.use('/api/fornecedores', roteador)


app.listen(config.get('api.porta'), () => console.log('A API esta funcionando'))
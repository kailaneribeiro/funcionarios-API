const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
const {funcionarios} = require('./data')

app.get('/', (req, res) => {
    res.send('Servidor express está funcionando!')
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})

//rotas para funcionarios

const adicionarFuncionario = require('./funcionario/adicionar')
app.post('/funcionarios', adicionarFuncionario)


const listarFuncionarios = require('./funcionario/listar')
app.get('/funcionarios', listarFuncionarios)

const atualizarFuncionario = require ('./funcionario/atualizar')
app.put('/funcionarios/:id',atualizarFuncionario)

const deletarFuncionario = require ('./funcionario/deletar')
app.delete ('/funcionarios/:id', deletarFuncionario)

const buscarSalarios = require('./funcionario/buscarSalario')
app.get('/funcionarios/salario', buscarSalarios)



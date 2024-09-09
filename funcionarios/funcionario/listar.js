const {funcionarios} = require('../data')

const listarFuncionarios = (req, res) => {
    console.log(req.body)
    res.status(200).send(funcionarios)
}

module.exports = listarFuncionarios

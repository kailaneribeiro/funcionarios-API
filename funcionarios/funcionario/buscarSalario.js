const {funcionarios} = require('../data')

const buscarSalarios = (req, res) => {
    const { salario } = req.query
    const funcionario = funcionarios.find((func) => func.salario == salario)
    
    if (funcionarios.length > 0){
        res.status(200).send(funcionario)
    } else {
        res.status(404).send('Salario não encontrado.')
    }
}

module.exports = buscarSalarios
const {funcionarios} = require ('../data')

function adicionarFuncionario (req,res){
    console.log(req.body)
    const novoFuncionario = {
        id: funcionarios.length +1,
        nome: req.body.nome,
        cargo: req.body.cargo,
        departamento: req.body.departamento,
        salario: req.body.salario
    }
    funcionarios.push(novoFuncionario)
    res.status(201).send({mensagem:'Funcionario adicionado com sucesso!'})
}





module.exports = adicionarFuncionario

const {funcionarios} = require ('../data')
const atualizarFuncionario = (req, res) =>{
    const {id} = req.params
    const novoNome = req.body.nome
    const novoCargo = req.body.cargo
    const novoDepartamento = req.body.departamento
    const novoSalario = req.body.salario
    
    const funcionario = funcionarios.find((funcionario) => funcionario.id == id)

    if (!funcionario){
        return res.status(404).send({mensagem: 'Funcionario não encontrado!'})
    }
    funcionario.nome = novoNome
    funcionario.cargo = novoCargo
    funcionario.departamento = novoDepartamento
    funcionario.salario = novoSalario
    
    res.status(200).send({mensagem: 'Funcionario atualizado com sucesso!',
        funcionario: funcionario
    })
}   

module.exports = atualizarFuncionario
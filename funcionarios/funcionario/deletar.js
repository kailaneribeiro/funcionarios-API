const {funcionarios} = require ('../data')

const deletarFuncionario = (req, res) =>{
    const {id} = req.params
    const index = funcionarios.findIndex((func)=> func.id == id)

    if (index === -1){
    return res.status(404).send('Funcionario não encontrado!')
}
    const funcionarioDeletado = funcionarios.splice(index,1) [0]

    res.status(200).send({
        mensagem: 'Funciobario deletado com sucesso!',
        funcionario: funcionarioDeletado
    })
}

module.exports = deletarFuncionario
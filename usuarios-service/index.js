const express = require('express')

const app = express()
app.use(express.json())

const userList = [{
    id: 1,
    name: 'Matheus',
    active: true
},
{
    id: 2,
    name: 'Anderson',
    active: true
},
{
    id: 3,
    name: 'Leonardo',
    active: true
}]

app.get('/', (req, res) => {
    res.status(200).json(userList)
})

app.post('/', (req, res) => {
    console.log(userList.find(u => u.id == req.body.id))
    if(userList.find(u => u.id == req.body.id)) res.status(500).send('id inválido')
    userList.push(req.body)
    res.status(200).send()
})

app.get('/:userId', (req, res) => {
    const user = userList.find(u => u.id == req.params.userId)
    user ? res.json(user) : res.status(500).send('Usuário não encontrado')
})


app.listen(3002, function () {
    console.log(`Processo rodando na porta 3002`);
})
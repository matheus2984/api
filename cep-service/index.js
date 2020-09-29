const express = require('express')
const axios = require('axios').default
const app = express()

app.get('/:cep', async (req, res) => {
    try{
        const response = await axios.get(`https://viacep.com.br/ws/${req.params.cep}/json/`)
        res.json(response.data)
    }
    catch(error){
        res.status(500).json(error)
    }
})

app.listen(3004, ()=> console.log('cep service rodando na porta 3004'))
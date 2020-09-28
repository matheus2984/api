const express = require('express')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.json(['2W@', 'AMBEV', 'SolutionTech', 'Novinvest', 'Planner', 'Craft'])
})

app.listen(3003, () => {
    console.log('Rodando na porta 3003')
})
const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()
app.use(express.json())

app.post('/register', (req, res) => {

})

app.post('/login', (req, res) => {
    console.log(req.body)
    if (req.body.user === 'matheus' && req.body.pwd === '123') {
        const id = 1
        const name = 'Matheus'
        const token = jwt.sign({ id: id, name: name }, 'W$dcEURtXK1Jx>?{W"UIjZLhe}"!.uIl(ji0$sdpkz$AF}tMm)(H@FHDt>g09N|', {
            expiresIn: 300 // expira em 5 minutos
        })
        return res.json({ auth: true, token: token })
    }

    res.status(500).json({ message: 'Login inválido!' });
})  

app.post('/logout', function (req, res) {
    res.json({ auth: false, token: null })
})

app.listen(3001, () => {
    console.log('Rodando na porta 3001')
})
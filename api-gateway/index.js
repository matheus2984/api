const express = require('express')
const jwt = require('jsonwebtoken')
const { createProxyMiddleware } = require('http-proxy-middleware')
const helmet = require('helmet')
const logger = require('morgan')
const app = express()
app.use(logger('dev'))
app.use(helmet())

app.use('/auth', createProxyMiddleware({ 
    target: 'http://localhost:3001', 
    changeOrigin: true, 
    pathRewrite: { '^/auth': '' } 
}))

app.use('/usuarios', verifyJWT, createProxyMiddleware({ 
    target: 'http://localhost:3002', 
    changeOrigin: true, 
    pathRewrite: { '^/usuarios': '' } 
}))

app.use('/empresas', verifyJWT, createProxyMiddleware({
     target: 'http://localhost:3003', 
     changeOrigin: true, 
     pathRewrite: { '^/empresas': '' } 
}))

app.use(express.json())

function verifyJWT(req, res, next) {
    const token = req.headers['x-access-token']
    if (!token) return res.status(401).json({ auth: false, message: 'Token não fornecido.' })
    
    jwt.verify(token, 'W$dcEURtXK1Jx>?{W"UIjZLhe}"!.uIl(ji0$sdpkz$AF}tMm)(H@FHDt>g09N|', function (err, decoded) {
        if (err) return res.status(500).json({ auth: false, message: 'Falha ao autenticar o token.' })

        req.headers._userid = decoded.id
        req.headers._username = decoded.name
        next()  
    });
}

app.listen(3000, () => {
    console.log('api-gateway rodando na porta 3000')
});

call pm2 start ./api-gateway/index.js --name api-gateway --watch
call pm2 start ./auth-service/index.js --name auth-service --watch
call pm2 start ./usuarios-service/index.js --name usuarios-service --watch
call pm2 start ./empresas-service/index.js --name empresas-service --watch
call pm2 start ./cep-service/index.js --name cep-service --watch
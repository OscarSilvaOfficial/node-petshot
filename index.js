const customExpress = require('./config/customExpress')
const mysqlLocal = require('./config/dbConnection')
const app = customExpress()

mysqlLocal.connect(erro => {
        if (erro) {
            setInterval(
                ()=>{
                    console.log('Erro ao conectar ao banco de Dados', erro)
                }, 10000)
        }else {
            setInterval(
                ()=>{
                    console.log('Servidor ainda está vivo')
                }, 600000)
        }
})

app.listen(3000, ()=>{
    console.log('http://127.0.0.1:3000')
})


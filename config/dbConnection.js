const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: '127.0.0.1',
    port: 3308,
    user: 'teste',
    password: 'teste',
    database: 'agenda-petshot'
})

module.exports = conexao
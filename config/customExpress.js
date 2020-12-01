const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
const app = express()

module.exports = function() {
    app.use(bodyParser.urlencoded({ extended:true }))
    app.use(bodyParser.json())

    // Pega todas as rotas da pasta controllers e add na APP
    consign()
        .include('controllers')
        .into(app)

    return app
}


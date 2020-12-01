module.exports = app => {
    app.get('/atendimentos', (req, res) => {
        res.send('Oscar da Silva Sauro')
    })

    app.post('/atendimentos', (req, res) => {
        console.log(req.body)
        res.send('Rota de Post')
    })
}
const express = require('express')
const bodyParser = require('body-parser')
const { Pessoa } = require('./sequelize')

const app = express()
app.use(bodyParser.json())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// API ENDPOINTS
// criação de pessoa
app.post('/api/pessoas', (req, res) => {
    Pessoa.create(req.body)
        .then(pessoa => res.json(pessoa))
})	
// retorna todas as pessoas
app.get('/api/pessoas', (req, res) => {
    Pessoa.findAll().then(pessoas => res.json(pessoas))
})

 app.delete( "/api/pessoas/:id", (req, res) =>
    Pessoa.destroy({
      where: {
        id: req.params.id
      }
    }).then( pessoa => res.json(pessoa) )
  )

  app.get( "/api/pessoas/:cpf", (req, res) =>
    Pessoa.findAll({
      where: {
        cpf: req.params.cpf
      }
    }).then( pessoas => res.json(pessoas) )
  )

const port = 3000
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})

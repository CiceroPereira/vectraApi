const Sequelize = require('sequelize')
const PessoaModel = require('./models/pessoa')

const sequelize = new Sequelize('vectra', 'root', null, {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

const Pessoa = PessoaModel(sequelize, Sequelize)

sequelize.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`)
  })

module.exports = {
  Pessoa
}
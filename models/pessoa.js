module.exports = (sequelize, type) => {
    return sequelize.define('pessoa', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        cpf: { 
        	type:type.STRING,
        	unique: true
        },
        nome: type.STRING,
        peso: type.FLOAT,
        altura: type.FLOAT,
        imc: type.FLOAT

    })
}
var db = require('../db/db')

const { Sequelize, DataTypes} = require('sequelize')

const Pontos = db.define('Pontos', {
    id_municipio: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'Municipios',
            key: 'id'
        }
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cep: {
        type: DataTypes.STRING,
        allowNull: false
    },
    latitude: {
        type: DataTypes.STRING,
        allowNull: false
    },
    longitude: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

// db.sync({force:true})

module.exports = Pontos
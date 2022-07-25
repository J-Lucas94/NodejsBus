var db = require('../db/db')

const { Sequelize, DataTypes} = require('sequelize')
const Municipios = require('./municipios')

const Pontos = db.define('Pontos', {
    id_municipio: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'Municipios',
            key: 'id'
        },
        validate: {
            notEmpty: {
                msg: "Esse campo Não pode ser vazio !"
            }            
        }
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo Não pode ser vazio !"
            }            
        }
    },
    cep: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo Não pode ser vazio !"
            }           
        }
    },
    latitude: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo Não pode ser vazio !"
            }           
        }
    },
    longitude: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo Não pode ser vazio !"
            }           
        }
    }
})

Pontos.belongsTo(Municipios, {foreignKey: 'id_municipio', allowNull: false})

// db.sync({force:true})

module.exports = Pontos
var db = require('../db/db')

const { Sequelize, DataTypes} = require('sequelize')

const Municipios = db.define('Municipios', {
    id_estado: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'Estados',
            key: 'id'
        },
        validate: {
            notEmpty: {
                msg: "Esse campo Não pode ser vazio !"
            }            
        }
    },
    municipio: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo Não pode ser vazio !"
            }            
        }
    }
})

// db.sync({force:true})

module.exports = Municipios
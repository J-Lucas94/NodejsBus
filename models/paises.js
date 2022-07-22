var db = require('../db/db')

const { Sequelize, DataTypes} = require('sequelize')

const Paises = db.define('Paises', {
    pais: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo Não pode ser vazio !"
            }           
        }
    },
    sigla: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo Não pode ser vazio !"
            }            
        }
    }
})

//db.sync({force:true})

module.exports = Paises
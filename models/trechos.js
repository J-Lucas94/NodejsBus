var db = require('../db/db')

const { Sequelize, DataTypes} = require('sequelize')

const Trechos = db.define('Trechos', {
    trecho: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo Não pode ser vazio !"
            }            
        },
    },
    km: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo Não pode ser vazio !"
            }           
        },
    }
})

//db.sync({alter:true})

module.exports = Trechos
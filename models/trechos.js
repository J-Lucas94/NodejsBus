var db = require('../db/db')

const { Sequelize, DataTypes} = require('sequelize')

const Trechos = db.define('Trechos', {
    trecho: {
        type: DataTypes.STRING,
        allowNull: false
    },
    km: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

//db.sync({alter:true})

module.exports = Trechos
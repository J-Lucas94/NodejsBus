var db = require('../db/db')

const { Sequelize, DataTypes} = require('sequelize')

const Paises = db.define('Paises', {
    pais: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sigla: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

//db.sync({force:true})

module.exports = Paises
var db = require('../db/db')

const { Sequelize, DataTypes} = require('sequelize')

const Estados = db.define('Estados', {
    estado: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sigla_estado: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id_pais: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'Paises',
            key: 'id'
        }
    }
})

//db.sync({force:true})

module.exports = Estados
var db = require('../db/db')

const { Sequelize, DataTypes} = require('sequelize')

const Municipios = db.define('Municipios', {
    id_estado: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'Estados',
            key: 'id'
        }
    },
    municipio: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

// db.sync({force:true})

module.exports = Municipios
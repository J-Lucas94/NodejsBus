var db = require('../db/db')

const { Sequelize, DataTypes} = require('sequelize')
const paises = require('./paises')
const Paises = require('./paises')

const Estados = db.define('Estados', {
    estado: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo Não pode ser vazio !"
            }            
        }
    },
    sigla_estado: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo Não pode ser vazio !"
            }            
        }
    },
    id_pais: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'Paises',
            key: 'id'
        },
        validate: {
            notEmpty: {
                msg: "Esse campo Não pode ser vazio !"
            }            
        }
    }
})

Estados.belongsTo(Paises, {foreignKey: 'id_pais', allowNull: false})

//db.sync({force:true})

module.exports = Estados
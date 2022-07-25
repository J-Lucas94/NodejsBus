var db = require('../db/db')

const { Sequelize, DataTypes} = require('sequelize')
const Municipios = require('./municipios')
const Motorista = require('./morotistas')

const Agenda = db.define('Agenda', {
    id_municipio_origem: {
        type: DataTypes.STRING,
        allowNull: false,
        references:{
            model: 'Municipios',
            key: 'id'
        },
        validate: {
            notEmpty: {
                msg: "Esse campo Não pode ser vazio !"
            }            
        }
    },
    id_municipio_destino: {
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
    id_placa: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'Veiculos',
            key: 'placa'
        },
        validate: {
            notEmpty: {
                msg: "Esse campo Não pode ser vazio !"
            }            
        }
    },
    id_motorista: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'Motoristas',
            key: 'id'
        },
        validate: {
            notEmpty: {
                msg: "Esse campo Não pode ser vazio !"
            }            
        }
    }
})

Agenda.belongsTo(Municipios, {foreignKey: 'id_municipio_origem', allowNull: false})
// Agenda.belongsTo(Municipios, {foreignKey: 'id_municipio_destino', allowNull: false})


//db.sync({force:true})

module.exports = Agenda
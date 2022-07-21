var db = require('../db/db')

const { Sequelize, DataTypes} = require('sequelize')

const Agenda = db.define('Agenda', {
    id_municipio_origem: {
        type: DataTypes.STRING,
        allowNull: false,
        references:{
            model: 'Municipios',
            key: 'id'
        }
    },
    id_municipio_destino: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'Municipios',
            key: 'id'
        }
    },
    id_veiculo: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'Veiculos',
            key: 'id'
        }
    },
    id_motorista: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'Motoristas',
            key: 'id'
        }
    }
})

//db.sync({force:true})

module.exports = Agenda
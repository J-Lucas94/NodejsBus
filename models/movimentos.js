var db = require('../db/db')

const { Sequelize, DataTypes} = require('sequelize')

const Movimentos = db.define('Movimentos', {
    id_usuario: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'Usuarios',
            key: 'id'
        }
    },
    id_placa: {
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
    },
    id_cobrador: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'Cobradores',
            key: 'id'
        }
    },
    data_hora_embarque: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data_hora_dembarque: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id_ponto_de_embarque: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'Pontos',
            key: 'id'
        }
    },
    id_ponto_de_dembarque: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'Pontos',
            key: 'id'
        }
    },
    id_trecho: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'Trechos',
            key: 'id'
        }
    }
})

//db.sync({force:true})

module.exports = Movimentos
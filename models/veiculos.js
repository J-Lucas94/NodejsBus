var db = require('../db/db')

const { Sequelize, DataTypes} = require('sequelize')

const Veiculos = db.define('Veiculos', {
    placa: {
        primaryKey: true,
        type: DataTypes.STRING,
        allowNull: false
    },
    placa_mercosul: {
        type: DataTypes.STRING,
        allowNull: false
    },
    marca: {
        type: DataTypes.STRING,
        allowNull: false
    },
    modelo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ano: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    eixos: {
        type: DataTypes.STRING,
        allowNull: false
    },
    capacidade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    peso: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sanfonado: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ultima_revisao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    proxima_revisao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data_baixa: {
        type: DataTypes.STRING,
        allowNull: false
    }

})

// db.sync({force:true})

module.exports = Veiculos
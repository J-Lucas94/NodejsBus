var db = require('../db/db')

const { Sequelize, DataTypes, Association} = require('sequelize')
const Usuarios = require('./usuarios')
const Cobrador = require('./cobradores')
const Municipios = require('./municipios')
const Estado = require('./estados')

const Movimentos = db.define('Movimentos', {
    id_usuario: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo não pode ser vazio !"
            }            
        },
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
    },
    id_cobrador: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'Cobradores',
            key: 'id'
        },
        validate: {
            notEmpty: {
                msg: "Esse campo Não pode ser vazio !"
            }            
        }
    },
    data_hora_embarque: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isDate: {
                msg: "Preencha o campo Corretamente !"
             }           
        }
    },
    data_hora_desembarque: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isDate: {
                msg: "Preencha o campo Corretamente !"
             }           
        }
    },
    id_ponto_de_embarque: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'Pontos',
            key: 'id'
        },
        validate: {
            notEmpty: {
                msg: "Esse campo Não pode ser vazio !"
            }            
        }
    },
    id_ponto_de_desembarque: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'Pontos',
            key: 'id'
        },
        validate: {
            notEmpty: {
                msg: "Esse campo Não pode ser vazio !"
            }            
        }
    },
    id_trecho: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'Trechos',
            key: 'id'
        },
        validate: {
            notEmpty: {
                msg: "Esse campo Não pode ser vazio !"
            }            
        }
    }
})




Movimentos.belongsTo(Usuarios, {foreignKey: 'id_usuario', allowNull: false})

//db.sync({alter:true})

module.exports = Movimentos
var db = require('../db/db')

const { Sequelize, DataTypes} = require('sequelize')

const Usuarios = db.define('Usuarios', {
    cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo Não pode ser vazio !"
            }            
        },
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo Não pode ser vazio !"
            }            
        },
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo Não pode ser vazio !"
            }            
        },
    },
    id_municipio: {
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
        },
    },
    cep: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo Não pode ser vazio !"
            }            
        },
    },
    contato: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo Não pode ser vazio !"
            }            
        },
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: {
                msg: "Preencha um email um E-mail valido !"
             }           
        }
    },
    data_nascimento: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isDate: {
                msg: "Preencha o campo Corretamente !"
             }           
        }
    },
    estado_civil: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo Não pode ser vazio !"
            }          
        },
    },
    bairro: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: {
                msg: "Esse campo Não pode ser vazio !"
            }  
        }
    },
    

})

// db.sync({force:true})

module.exports = Usuarios
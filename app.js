//Express

const express = require('express');
const app = express();
app.use(express.json())

//Tabelas

const Usuarios = require('./models/usuarios')
const Motoristas = require('./models/morotistas')
const Veiculos = require('./models/veiculos')
const Cobradores = require('./models/cobradores')
const Movimentos = require('./models/movimentos')
const Pontos = require('./models/pontos')
const Municipios = require('./models/municipios')
const Estados = require('./models/estados')
const Paises = require('./models/paises')
const Agenda = require('./models/agenda')
const Trechos = require('./models/trechos')

//Body Parser

const bodyParser = require ('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Rotas


//Criar Usuario

app.post('/usuarios', async (req, res)=>{
    const {cpf, nome, endereco, id_municipio, cep, contato, email, data_nascimento, estado_civil, bairro} = req.body
    Usuarios.create({
        cpf, nome, endereco, id_municipio, cep, contato, email, data_nascimento, estado_civil, bairro
    }).then(()=>{
        res.status(200),
        res.send("Usuario Cadastrado com Sucesso !")
    }).catch((erro)=>{
        res.status(400),
        res.send("Não foi Possivel Cadastrar o Usuario!" + erro)
    })  
})

// Pais

app.post('/paises', async (req, res)=>{
    const {pais, sigla} = req.body
    Paises.create({
        pais, sigla
    }).then(()=>{
        return res.status(200),
        res.send("Paises Criado com Sucesso!")
    }).catch((erro)=>{
        return res.status(400),
        res.send("Não foi Possivel Criar um Pais  " + erro)
    })
})

// Estado

app.post('/estados', async (req, res)=>{
    const {estado, sigla_estado, id_pais} = req.body
    Estados.create({
        estado, sigla_estado, id_pais
    }).then(()=>{
        return res.status(200),
        res.send("Estados cadastrado com Sucesso!")
    }).catch((erro)=>{
        return res.status(400),
        res.send("Não foi Possivel cadastrar um Pais  " + erro)
    })
})

// Municipio

app.post('/municipios', (req, res)=>{
    const { id_estado, municipio} = req.body
    Municipios.create({
        id_estado, municipio
    }).then(()=>{
        return res.status(200),
        res.send("Municipio cadastrado com Sucesso!")
    }).catch((erro)=>{
        return res.status(400),
        res.send("Não foi Possivel cadastrar um Municipio  " + erro)
    })
})

//Motorista

app.post('/motoristas', async (req, res)=>{
    const {cpf, nome, endereco, id_municipio, cep, contato, email, data_nascimento, estado_civil, bairro} = req.body
    Motoristas.create({
        cpf, nome, endereco, id_municipio, cep, contato, email, data_nascimento, estado_civil, bairro
    }).then(()=>{
        return res.status(200),
        res.send("Usuário cadastrado com Sucesso!")
    }).catch((erro)=>{
        return res.status(400),
        res.send("Não foi Possivel cadastrar um Usuário  " + erro)
    })
})

//Cobradores

app.post('/cobradores', (req, res)=>{
    const {cpf, nome, endereco, id_municipio, cep, contato, email, data_nascimento, estado_civil, bairro} = req.body
    Cobradores.create({
        cpf, nome, endereco, id_municipio, cep, contato, email, data_nascimento, estado_civil, bairro
    }).then(()=>{
        return res.status(200),
        res.send("Usuário cadastrado com Sucesso!")
    }).catch((erro)=>{
        return res.status(400),
        res.send("Não foi Possivel cadastrar um Usuário!" + erro)
    })
})

//Veiculos

app.post('/veiculos', (req, res)=>{
    const{placa, placa_mercosul, marca, modelo, ano, cor, eixos, capacidade, peso, sanfonado, ultima_revisao, proxima_revisao, status,  data_baixa} = req.body
    Veiculos.create({
        placa, placa_mercosul, marca, modelo, ano, cor, eixos, capacidade, peso, sanfonado, ultima_revisao, proxima_revisao, status,  data_baixa
    }).then(()=>{
        return res.status(200),
        res.send("Veiculo cadastrado com Sucesso!")
    }).catch((erro)=>{
        return res.status(400),
        res.send("Não foi Possivel cadastrar um Veiculo!  " + erro)
    })
})

//Pontos


app.post('/pontos', (req, res)=>{
    const{id_municipio, endereco, cep, latitude, longitude} = req.body
    Pontos.create({
        id_municipio, endereco, cep, latitude, longitude
    }).then(()=>{
        return res.status(200),
        res.send("Ponto cadastrado com Sucesso!")
    }).catch((erro)=>{
        return res.status(400),
        res.send("Não foi Possivel cadastrar um Ponto!  " + erro)
    })
})










app.listen(3000, console.log("Servidor Iniciado com Sucesso na Porta 3000"))

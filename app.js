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

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Rotas


//Criar Usuario

app.post('/usuarios', async (req, res) => {
    try {
        var cadastro = await Usuarios.create(req.body)
        if (cadastro) {
            res.send("Usuário Cadastrado com Sucesso !")
        } else {
            return res.status(400),
                res.send("Não foi Possivel cadastrar Usuário !")
        }
    } catch (error) {
        res.send(error)
    }

})

//Update

app.put('/usuarios/:id', async (req, res) => {
    try {
        const usuarios = await Usuarios.update(req.body, {
            where: { id: req.params.id }
        })
        if (usuarios) {
            res.send("Usuário atualizado com Sucesso !")
        } else {
            return res.status(400),
                res.send("Não foi possivel atualizar Usuario !")
        }
    } catch (error) {
        res.send(error)
    }

})

app.get('/usuarios/:id?', async (req, res) => {
    try {
        const usuario = await Usuarios.findOne({ where: { id: req.params.id } })
        if (usuario) {
            return res.json(usuario)
        } else {
            res.status(400),
                res.send("Usuario não encontrado")
        }
    } catch (error) {
        res.send(error)
    }

})


app.delete('/usuarios/:id', async (req, res) => {
    try {
        const usuario = await Usuarios.destroy({ where: { 'id': req.params.id } })
        if (usuario) {
            res.send("Usuario Apagado com Sucesso !")
        } else {
            return res.status(400),
                res.send("Usuario não encontrado !")
        }
    } catch (error) {
        res.send(error)
    }

})

// Pais

app.post('/paises', async (req, res) => {
    try {
        const paises = await Paises.create(req.body)
        if (paises) {
            res.send("Pais cadastrado com sucesso !")
        } else {
            return res.status(400),
                res.send("Não foi possivel cadastrar o pais")
        }
    } catch (error) {
        res.send(error)
    }
})

app.put('/paises/:id', async (req, res) => {
    try {
        const pais = await Paises.update(req.body, { where: { 'id': req.params.id } })
        if (pais) {
            res.send("Pais atualizado com Sucesso !")
        } else {
            res.status(400),
                res.send("Não foi Possivel encontrar um pais")
        }
    } catch (error) {
        res.send(error)
    }
})

app.get('/paises/:id', async (req, res) => {
    try {
        const pais = await Paises.findOne({ where: { id: req.params.id } })
        if (pais) {
            return res.json(pais)
        } else {
            return res.status(400),
                res.send("Não foi possivel encontrar o pais!")
        }
    } catch (error) {
        res.send(error)
    }
})

app.delete('/paises/:id', async (req, res) => {
    try {
        const pais = await Paises.destroy({ where: { 'id': req.params.id } })
        if (pais) {
            res.send("Pais apagado com sucesso!")
        } else {
            res.status(400),
                res.send("Não foi possivel encontrar o Pais!")
        }
    } catch (error) {
        res.send(error)
    }
})




// Estado

app.post('/estados', async (req, res) => {
    try {
        const estados = await Estados.create(req.body)
        if (estados) {
            res.send("Estado cadastrado com sucesso !")
        } else {
            res.status(400),
                res.send("Não foi Possivel cadastrar o Estado!")
        }
    } catch (error) {
        res.send(error)
    }
})

app.put('/estados/:id', async (req, res) => {
    try {
        const estados = await Estados.update(req.body, { where: { 'id': req.params.id } })
        if (estados) {
            res.send("Estado atualizado com sucesso !")
        } else {
            res.status(400),
                res.send("Não foi Possivel encontrar o estado!")
        }
    } catch (error) {
        res.send(error)
    }
})

app.get('/estados/:id', async (req, res) => {
    try {
        const estados = await Estados.findOne({ where: { id: req.params.id } })
        if (estados) {
            return res.json(estados)
        } else {
            res.send("Não foi possivel encontrar o estado !")
        }
    } catch (error) {
        res.send(error)
    }
})

app.delete('/estados/:id', async (req, res) => {
    try {
        const estados = await Estados.destroy({ where: { id: req.params.id } })
        if (estados) {
            res.send("Estados Apagado com Sucesso !")
        } else {
            res.status(400),
                res.send("Estado não encontrado !")
        }
    } catch (error) {
        res.send(error)
    }
})


// Municipio

app.post('/municipios', async (req, res) => {
    try {
        const municipios = await Municipios.create(req.body)
        if (municipios) {
            res.send("Municipio adicionado com sucesso !")
        } else {
            res.status(400),
                res.send("Não foi possivel adicionar !")
        }
    } catch (error) {
        res.send(error)
    }

})

app.put('/municipios/:id', async (req, res) => {
    try {
        const municipios = await Municipios.update(req.body, { where: { 'id': req.params.id } })
        if (municipios) {
            res.send("Municipio Atualizado com sucesso !")
        } else {
            res.send("Não foi possivel atualizar o municipio")
        }
    } catch (error) {
        res.send(error)
    }
})

app.get('/municipios/:id', async (req, res) => {
    try {
        const municipios = await Municipios.findOne({ where: { id: req.params.id } })
        if (municipios) {
            return res.json(municipios)
        } else {
            res.status(400),
                res.send("Não foi possivel encontrar o municipio")
        }
    } catch (error) {
        res.send(error)
    }
})

app.delete('/municipios/:id', async (req, res) => {
    try {
        const municipios = await Municipios.destroy({ where: { id: req.params.id } })
        if (municipios) {
            res.send("Municipio apagado com sucesso !")
        } else {
            res.send("Municipio não encontrado!")
        }
    } catch (error) {
        res.send(error)
    }
})

//Motorista

app.post('/motoristas', async (req, res) => {
    try {
        const motoristas = await Motoristas.create(req.body)
        if (motoristas) {
            res.send("Motorista adicionado com sucesso !")
        } else {
            res.status(400),
                res.send("Não foi possivel cadastrar o motorista !")
        }
    } catch (error) {
        res.send(error)
    }
})

app.put('/motoristas/:id', async (req, res) => {
    try {
        const motoristas = await Motoristas.update(req.body, { where: { id: req.params.id } })
        if (motoristas) {
            res.send("Cadastro atualizado com sucesso !")
        } else {
            res.status(400),
                res.send("Não foi possivel encontrar o cadastro!")
        }
    } catch (error) {
        res.send(error)
    }
})

app.get('/motoristas/:id', async (req, res) => {
    try {
        const motorista = await Motoristas.findOne({ where: { id: req.params.id } })
        if (motorista) {
            return res.json(motorista)
        } else {
            res.status(400),
                res.send("Não foi possivel encontrar o usuario !")
        }
    } catch (error) {
        res.send(error)
    }
})

app.delete('/motoristas/:id', async (req, res) => {
    try {
        const motorista = await Motoristas.destroy({ where: { id: req.params.id } })
        if (motorista) {
            res.send("Usuario deletado com sucesso!")
        } else {
            res.status(400),
                res.send("Não foi possivel encontrar o usuário !")
        }
    } catch (error) {
        res.send(error)
    }
})



//Cobradores

app.post('/cobradores', async (req, res) => {
    try {
        var cobradores = await Cobradores.create(req.body)
        if (cobradores) {
            return res.status(200),
                res.send("Usuário Cadastrado com Sucesso !")
        } else {
            return res.status(400),
                res.send("Não foi Possivel cadastrar Usuário !")
        }
    } catch (error) {
        res.send(error)
    }
})

app.put('/cobradores/:id', async (req, res) => {
    try {
        var cobradores = await Cobradores.update(req.body, { where: { id: req.params.id } })
        if (cobradores) {
            res.send("Usuário Atualizado com sucesso !")
        } else {
            res.status(400),
                res.send("Não foi possivel encontrar o usuário!")
        }
    } catch (error) {
        res.send(error)
    }
})

app.get('/cobradores/:id', async (req, res) => {
    try {
        var cobradores = await Cobradores.findOne({ where: { id: req.params.id } })
        if (cobradores) {
            res.json(cobradores)
        } else {
            res.status(400),
                res.send("Usuario não encontrado !")
        }
    } catch (error) {
        res.send(error)
    }
})

app.delete('/cobradores/:id', async (req, res) => {
    try {
        var cobrador = await Cobradores.destroy({
            where: { id: req.params.id }
        })
        if (cobrador) {
            res.send("Usuário Apagado Com Sucesso com Sucesso !")
        } else {
            return res.status(400),
                res.send("Não foi Possivel Apagar um Usuário !")
        }
    } catch (error) {
        res.send(error)
    }

})

//Veiculos

app.post('/veiculos', async (req, res) => {
    try {
        const veiculos = await Veiculos.create(req.body)
        if (veiculos) {
            return res.status(200),
                res.send("Veiculo Cadastrado com Sucesso !")
        } else {
            return res.status(400),
                res.send("Não foi Possivel cadastrar o Veiculo !")
        }

    } catch (error) {
        res.send(error)
    }

})

app.put('/veiculos/:id', async (req, res) => {
    try {
        const veiculos = await Veiculos.update(req.body, { where: { id: req.params.id } })
        if (veiculos) {
            res.send("Veiculo atualizado com sucesso!")
        } else {
            res.status(400),
                res.send("Não foi possivel atualizar o usuário")
        }
    } catch (error) {
        res.send(error)
    }
})

app.get('/veiculos/:id', async (req, res) => {
    try {
        const veiculos = await Veiculos.findByPk()
        if (veiculos) {
            return res.json(veiculos)
        } else {
            res.status(400),
                res.send("Não foi possivel encontrar o veiculo!")
        }
    } catch (error) {

    }
})

app.delete('/veiculos/:id', async (req, res) => {
    try {
        const veiculos = await Veiculos.destroy({ where: { id: req.params.id } })
        if (veiculos) {
            res.send("Veiculo apagado com sucesso!")
        } else {
            res.status(400),
                res.send("Não foi possivel encontrar o veiiculo!")
        }
    } catch (error) {
        res.send(error)
    }
})



//Pontos


app.post('/pontos', async (req, res) => {
    try {
        const pontos = await Pontos.create(req.body)
        if (pontos) {
            res.send("Ponto adicionado com sucesso!")
        } else {
            res.status(400),
                res.send("Não foi possivel adicionar o ponto !")
        }
    } catch (error) {
        res.send(error)
    }

})

app.put('/pontos/:id', async (req, res) => {
    try {
        const pontos = await Pontos.update(req.body, { where: { id: req.params.id } })
        if (pontos) {
            res.send("Ponto Atualizado com sucesso !")
        } else {
            res.status(400),
                res.send("Não foi possivel encontrar o ponto!")
        }
    } catch (error) {
        res.send(error)
    }
})

app.get('/pontos/:id', async (req, res) => {
    try {
        const pontos = await Pontos.findOne({ where: { id: req.params.id } })
        if (pontos) {
            return res.json(pontos)
        } else {
            res.send("Não foi possivel encontro o ponto!")
        }
    } catch (error) {
        res.send(error)
    }
})

app.delete('/pontos/:id', async (req, res) => {
    try {
        const pontos = await Pontos.destroy({ where: { id: req.params.id } })
        if (pontos) {
            res.send("Ponto apagado com sucesso!")
        } else {
            res.status(400),
                res.send("Não foi possivel encontrar o ponto!")
        }
    } catch (error) {
        res.send(error)
    }
})

//Trechos

app.post('/trechos', async (req, res) => {
    try {
        const trechos = await Trechos.create(req.body)
        if (trechos) {
            res.send("Trecho adicionado com sucesso!")
        } else {
            res.status(400),
                res.send("Não foi adicionar o trecho!")
        }
    } catch (error) {
        res.send(error)
    }
})

app.put('/trechos/:id', async (req, res) => {
    try {
        const trechos = await Trechos.update(req.body, { where: { id: req.params.id } })
        if (trechos) {
            res.send("Trecho atualizado com sucesso!")
        } else {
            res.status(400),
                res.send("Não foi possivel atualizar o trecho!")
        }
    } catch (error) {
        res.send(error)
    }
})

app.get('/trechos/:id', async (req, res) => {
    try {
        const trechos = await Trechos.findOne({ where: { id: req.params.id } })
        if (trechos) {
            return res.json(trechos)
        } else {
            res.send("Não foi possivel encontrar o trecho!")
        }
    } catch (error) {
        res.send(error)
    }
})

app.delete('/trechos/:id', async (req, res) => {
    try {
        const trechos = await Trechos.destroy({ where: { id: req.params.id } })
        if (trechos) {
            res.send("Trecho apagado com sucesso !")
        } else {
            res.status(400),
                res.send("Não foi possivel encontrar o trecho !")
        }
    } catch (error) {
        res.send(error)
    }
})

//Movimentos

app.post('/movimentos', async (req, res) => {
    try {
        const movimentos = await Movimentos.create(req.body)
        if (movimentos) {
            res.send("Movimento adicionado com sucesso!")
        } else {
            res.status(400),
                res.send("Não foi possivel criar um Movimento!")
        }
    } catch (error) {
        res.send(error)
    }
})

app.put('/movimentos/:id', async (req, res) => {
    try {
        const movimentos = await Movimentos.update(req.body, { where: { id: req.params.id } })
        if (movimentos) {
            res.send("Passagem atualizada com sucesso!")
        } else {
            res.status(400),
                res.send("Não foi possivel encontrar a passagem!")
        }
    } catch (error) {
        res.send(error)
    }
})

app.get('/movimentos/:id', async (req, res) => {
    try {
        const movimentos = await Movimentos.findOne({ where: { id: req.params.id } })
        if (movimentos) {
            res.json(movimentos)
        } else {
            res.status(400),
                res.send("Não foi possivel encontrar a passagem!")
        }
    } catch (error) {
        res.send(error)
    }
})

app.delete('/movimentos/:id', async (req, res) => {
    try {
        const movimentos = await Movimentos.destroy({ where: { id: req.params.id } })
        if (movimentos) {
            res.send("Passagem apagada com sucesso!")
        } else {
            res.status(400)
            res.send("Passagem não encontrada!")
        }
    } catch (error) {
        res.send(error)
    }
})

//Agenda

app.post('/agendas', async (req, res) => {
    try {
        const agendas = await Agenda.create(req.body)
        if (agendas) {
            res.send("Agenda adicionada com sucesso!")
        } else {
            res.status(400),
                res.send("Não foi possivel cadastrar")
        }
    } catch (error) {
        res.send(error)
    }
})

app.put('/agendas', async (req, res)=>{
    try {
        const agendas = await Agenda.update(req.body, {where: {id: req.params.id}})
        if(agendas){
            res.send("Agenda atualizada com sucesso!")
        }else{
            res.status(400),
            res.send("Não foi possivel cadastrar a agenda")
        }
    } catch (error) {
        res.send(error)
    }
})

app.get('/agendas', async (req, res)=>{
    try {
        const agendas = await Agenda.findOne({where: {id: req.params.id}})
        if(agendas){
            res.json(agendas)
        }else{
            res.status(400),
            res.send("Não foi possivel encontrar a agenda!")
        }
    } catch (error) {
        res.send(error)
    }
})

app.delete('agendas', async(req, res)=>{
    try {
        const agendas = await Agenda.destroy({where: {id: req.params.id}})
        if(agendas){
            res.send("Agenda apagada com sucesso!")
        }else{
            res.status(400),
            res.send("Não foi possivel apagar a agenda!")
        }
    } catch (error) {
        res.send(error)
    }
})









app.listen(3000, console.log("Servidor Iniciado com Sucesso na Porta 3000"))

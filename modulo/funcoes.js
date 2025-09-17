/**********************************************************************************************
 * Objetivo: Arquivo responsável pelas funções para criar a API de estados de cidades
 * Data: 15/09/25
 * Autor: Mateus Lins de Jesus
 * Versão: 1.0
 ************************************************************************************************/
//import do arquivo estados e cidade
const dados = require('./estados_cidades')
const MESSAGE_ERROR = {status: false, statuscode: 500, development: 'Mateus Lins de Jesus'}
//retorna a lista de estados 
const getAllEstados = function(){
    //Padrão do JSON que será o retorno da função
    let message = {status: true, statuscode: 200, development: 'Mateus Lins de Jesus', uf: []}
    
    dados.listaDeEstados.estados.forEach(function(item){
        message.uf.push(item.sigla)
    })
    //Adiciona um novo elemento no JSON 
    message.quantidade = message.uf.length
    
    //Apaga um elemento existente no JSON
    //delete message.status
    if(message.uf.length > 0)
        return message //Resultado verdadeiro da API 200
    else return MESSAGE_ERROR //Resultado falso da API 500
}

//Retorna dados do estado filtrando pela sigla  
const getEstadoBySigla = function(){
    let message = {status: true, statuscode: 200, development: 'Mateus Lins de Jesus', uf: sigla, descricao: nome, capital: capital, regiao: regiao}

    dados.listaDeEstados.estados.forEach(function(item){
        message.uf.push(item.sigla.descricao.capital.regiao)
    })

}

//Retorna a capital do estado filtrando pela sigla
const getCapitalBySigla = function(sigla){

}

//Retorna a lista de estados filtrando pela região
const getEstadosByRegiao = function(regiao){

}

//Retorna a lista de estados que formam a capital de um país filgtando plo país
const getEstadoIsCapitalByPais = function(pais){

}

//retorna as cidadades existentes em um estado. filtrando pela sigla
const getCidadesBySigla = function(sigla){

}


module.exports = {
    getAllEstados,
    getEstadoBySigla
}
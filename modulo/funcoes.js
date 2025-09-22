/**********************************************************************************************
 * Objetivo: Arquivo responsável pelas funções para criar a API de estados de cidades
 * Data: 15/09/25
 * Autor: Mateus Lins de Jesus
 * Versão: 1.0
 ************************************************************************************************/
//import do arquivo estados e cidade
const dados = require('./estados_cidades.js')
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
const getEstadoBySigla = function(siglaUsuario){
    
    let sigla = String(siglaUsuario).toUpperCase()
    
    let message = {status: true, statuscode: 200, development: 'Mateus Lins de Jesus', uf: sigla}

    dados.listaDeEstados.estados.forEach(function(item){
        if(item.sigla == sigla){
            message.descricao = item.nome
            message.capital = item.capital
            message.regiao = item.regiao
        }
    })

    //console.log(message)

    if(message.uf.length > 0)
        return message
    else return MESSAGE_ERROR

    

}

//Retorna a capital do estado filtrando pela sigla
const getCapitalBySigla = function(siglaUsuario){
    let sigla = String(siglaUsuario).toUpperCase()
    
    let message = {status: true, statuscode: 200, development: 'Mateus Lins de Jesus', uf: sigla}

    dados.listaDeEstados.estados.forEach(function(item){
        if(item.sigla == sigla){
            message.descricao = item.nome
            message.capital = item.capital
        }
    })

    //console.log(message)

    if(message.uf.length > 0)
        return message
    else return MESSAGE_ERROR
}

//Retorna a lista de estados filtrando pela região
const getEstadosByRegiao = function(nomeRegiao){

    let regiao = String(nomeRegiao).toUpperCase()
    
    let message = {status: true, statuscode: 200, development: 'Mateus Lins de Jesus', regiao: regiao, estados: []}

    dados.listaDeEstados.estados.forEach(function(item){
        if(item.regiao.toUpperCase() == regiao.toUpperCase()){
            uf = item.nome
            descricao = item.nome
            message.estados.push({'uf':uf, 'descricao':descricao})
        }
    })
    return message
   // console.log(message)

}

//Retorna a lista de estados que formam a capital de um país filtrando pelo país
const getEstadoIsCapitalByPais = function(nomePais){
    let pais = String(nomePais).toUpperCase()
    
    let message = {status: true, statuscode: 200, development: 'Mateus Lins de Jesus', capitais:[]}

    if(pais == pais){
        dados.listaDeEstados.estados.forEach(function(item){
            if (item.capital_pais && item.capital_pais.ano_inicio){
                let capitalInfo = {
                    capital_atual: item.capital_pais.ano_fim === false,
                    uf: item.sigla,
                    descricao: item.nome,
                    capital: item.capital, 
                    regiao: item.regiao,
                    capital_pais_ano_inicio: item.capital_pais.ano_inicio,  
                    capital_pais_ano_termino: item.capital_pais.ano_fim
                }

                message.capitais.push(capitalInfo)

                console.log(message)
            }
        })
    }



//     dados.listaDeEstados.estados.forEach(function(item){
//         if(item.capital_pais.ano_inicio ){
//             message.capitais.push({'uf':uf, 'descricao':descricao})
//         }
//     })
//     return message
//    // console.log(message)

}

//retorna as cidadades existentes em um estado. filtrando pela sigla
const getCidadesBySigla = function(sigla){

}

//getEstadoBySigla('pr')
//getCapitalBySigla('BA')
//getEstadosByRegiao('nordeste')
getEstadoIsCapitalByPais('brasil')

module.exports = {
    getAllEstados,
    getEstadoBySigla,
    getCapitalBySigla
}
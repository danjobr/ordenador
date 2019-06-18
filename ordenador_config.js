"use strict";

const ordenador = require('./ordenador_node.js');


// setup - alterar a variavel config para cada um dos casos do teste

let caso1 = [['titulo', 'asc']];
let caso2 = [['autor', 'asc'], ['titulo', 'des']];
let caso3 = [['edicao', 'des'], ['autor', 'des'], ['titulo', 'asc']];
let caso4 = null;
let caso5 = "";

let config = caso2;


// estabelece os dados para teste

let dados = [{
    id: 1,  
    titulo: 'Java How To Program',
    autor: 'Deitel & Deitel',
    edicao: '2007'
}, {
    id: 2,
    titulo: 'Patterns of Enterprise Application Architecture',
    autor: 'Martin Fowler',
    edicao: '2002'
}, {
    id: 3,
    titulo: 'Head First Design Patterns',
    autor: 'Elisabeth Freeman',
    edicao: '2004'
}, {
    id: 4,
    titulo: 'Internet & World Wide Web: How to Program',
    autor: 'Deitel & Deitel',
    edicao: '2007'
}];


// chamada da função

let resultado = ordenador(dados, config);
console.log(resultado);
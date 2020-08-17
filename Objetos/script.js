//Objetos
//Conjunto de variaveis e funções, que são chamadas de propriedade e métodos
//PROPRIEDADES E MÉTODOS CONSISTEM E CHAVE E VALOR
var pessoa = {
  nome: 'Marcello',
  idade: 27,
  profissao: 'programador',
  possuiFaculdade: true,
};

//Métodos: É uma propriedade que possui uma função no lugar do seu valor

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
};

console.log(Math.PI);
console.log(Math.random()); //Número aleatorio

//Adicionar Propriedades e Métodos
var menu = {
  width: 800,
  metadeHeight() {
    return this.height / 2;
  },
};
//caso já existe height e position ele irá substituir no objeto
menu.height = 50;
menu.position = 'fixed';

//Palavra chave this: irá fazer referencia ao próprio objeto

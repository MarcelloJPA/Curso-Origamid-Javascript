//Crie um objeto com seus dados pessoais
//Deve possuir pelo menos duas propriedades nome e sobrenome
//Crie um método que mostre o nome e o sobrenome
var dados = {
  nome: 'Marcello',
  sobrenome: 'Lima da Costa',
  idade: 27,
  endereço: 'Rio de Janeiro',
  profissao: 'Analista de Sistemas',
  nomeCompleto() {
    return this.nome + ' ' + this.sobrenome;
  },
};

//Modifique o valor da propriedade preço de 1000 para 3000

var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
};

carro.preco = 3000;

//Crie um objeto de um cachorro que represente um labrador
// preto, com 10 anos, que late ao ver um homem

var cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,
  latir(pessoa) {
    if (pessoa === 'homem') {
      return 'Latir';
    } else {
      return ' nada';
    }
  },
};

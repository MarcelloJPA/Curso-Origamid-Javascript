//Variáveis declaradas dentro de funções não são acessadas fora
//Exemplo
function mostrarCarro() {
  var carro = 'Fusca';
  console.log(carro);
}
mostrarCarro();
//console.log(carro); //carro is not defined

//Variáveis declaradas fora de funções podem ser acessadas dentro
//Exemplo
var nome = 'Maria';
function mostrarNome() {
  var frase = `Meu nome é ${nome}`;
  console.log(frase);
}
mostrarNome();

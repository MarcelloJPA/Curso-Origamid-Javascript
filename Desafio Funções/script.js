//Crie uma função para verificar se o valor é truthy
function isTruthy(valor) {
  return !!valor;
}

//Crie uma função matemática que retorne o perímetro de um quadrado
function petrimetroQuadrado(perimetro) {
  return perimetro * 4;
}

//Crie uma função que retorne o seu nome completo
function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

//Crie uma função quer verifique se o número é par
function ePar(num) {
  if (num % 2 === 0) {
    return 'É par';
  } else {
    return 'Não é Par';
  }
}

//Crie uma função que retorne o tipo de dado
function tipoDado(dado) {
  return typeof dado;
}

/*O addEventListener é uma função nativa do javascript
o primeiro parâmetro é o evento que ocorre e o segundo é CallBack
utilize essa função para mostrar no console o seu nome Completo
quando o evento scroll ocorrer*/

addEventListener('scroll', function () {
  console.log('Marcello lima da costa');
});

//Crie uma função que calcule quantos países faltam visitar
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda falta ${totalPaises - paisesVisitados} países para Visitar`;
}

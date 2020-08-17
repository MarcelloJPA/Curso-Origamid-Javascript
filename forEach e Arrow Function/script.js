const imgs = document.querySelectorAll('img');

// O 1º parâmetro é o callback(função que será ativada a cada item)
//Pode receber 3 parâmetros(ValorAtual, numero e array completa)
imgs.forEach(function (valorAtual, numero, array) {
  console.log('1º parâmetro =>', valorAtual);
  console.log('2º parâmetro =>', numero);
  console.log('3º parâmetro =>', array);
});
const titulos = document.getElementsByClassName('titulo');
//Pegou uma NodeList
const titulosArray = Array.from(titulos);
//transformando em array

titulosArray.forEach(function (item) {
  //Agora é possivel usar o método forEach
  console.log('forEach função normal =>', item);
});

/*Arrow Function* - Função mais curta*/
titulosArray.forEach((item) => {
  console.log('forEach Arrow Function =>', item);
});

//Array serve para guardar diferentes valores em uma única variável

var videoGame = ['Playstation', 'Xbox', 'Switch'];

//videoGame.pop(); //remove o último item do array e mostra na tela

videoGame.push('Nintendo 64'); //adiciona um item no final do array

console.log(videoGame.length); // mostra quantos itens tem no array

console.log('=====Loops===== FOR');
for (var numero = 20; numero < 30; numero++) {
  console.log(numero);
}
console.log('=====Loops===== WHILE');
var i = 0;
while (i <= 100) {
  console.log(i);
  i++;
}

console.log('=====Mostrando itens do array com FOR=====');
var videoGame = ['Playstation', 'Xbox', 'Switch'];

for (var i = 0; i < videoGame.length; i++) {
  console.log(videoGame[i]);
}

console.log('=====Mostrando itens do array com FOREACH=====');
frutas = ['banana', 'maçã', 'pêra', 'uva', 'abacaxi'];
//Pode ser passado 3 parâmetros:
//o 1ºmostra cada item
//o 2ºmostra a posição do item
//o 3ºmostra o array todo
frutas.forEach(function (item, index, teste) {
  console.log(item, index, teste);
});

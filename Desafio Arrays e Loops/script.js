//Crie um array com os anos que o Brasil ganhou a Copa

var brasilCampeao = [1959, 1962, 1970, 1994, 2002];

//console.log('O brasil ganhou a copa de ');
brasilCampeao.forEach((item) => {
  console.log(`O brasil ganhou a copa de ${item}`);
});

var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melancia'];

for (var i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
  if (frutas[i] === 'Pera') {
    break;
  }
}

pegueiMelancia = frutas[frutas.length - 1];
console.log(pegueiMelancia);

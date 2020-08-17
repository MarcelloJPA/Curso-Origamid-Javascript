var numero = 20;

numero /= 10;
console.log(numero);

//Operador Ternário
var idade = 19;
var podeBeber;
var naoPossuiDiabetes = true;

podeBeber = idade >= 18 && naoPossuiDiabetes ? true : false;
console.log(podeBeber);

//Não é necessário {} quando retornamos apenas uma linha de codigo

var possuiFaculdade = true;
if (possuiFaculdade) console.log('Possui Faculdade');
else console.log('Não Possui faculdade');

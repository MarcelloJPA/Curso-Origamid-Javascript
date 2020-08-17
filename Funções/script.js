//peso e altura são argumentos
function imc(peso, altura) {
  var imc = peso / altura ** 2;
  return imc;
}

console.log(imc(80, 1.81));

function corFavorita(cor) {
  if (cor === 'azul') {
    return 'Eu gosto do céu';
  } else if (cor === 'verde') {
    return ' Eu gosto de mato';
  } else {
    return 'Eu nao gosto de cores';
  }
}

addEventListener('click', function () {
  console.log('oi');
});

function terceiraIdade(idade) {
  if (typeof idade !== 'number') {
    return 'Por favor, preencha com um número';
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}
console.log(terceiraIdade(80));
console.log(terceiraIdade('80'));

function faltaVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Falta visitar ${totalPaises - paisesVisitados} países`;
}
console.log(faltaVisitar(20));

var profissao = 'programador';
function dados() {
  var nome = 'Marcello';
  idade = 27;
  function outrosDados() {
    var endereco = 'Rio de janeiro';
    var idade = 27;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados());

//Some 500 ao valor de scroll abaixo,
//atribuindo o novo valor a scroll

var scroll = 1000;
scroll += 500;
console.log(scroll);

//Atribua true para a variável darCredito,
//caso o cliente possua carro e casa.
//e false caso o contrário

var darCredito;

var cliente = {
  carro: true,
  casa: true,
};

cliente.carro && cliente.casa == true ? (darCredito = true) : false;

console.log(darCredito);

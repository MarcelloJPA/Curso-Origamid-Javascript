//Mostre no console cada paragrafo do site
const paragrafo = document.querySelectorAll('p');

paragrafo.forEach(function (item, index) {
  console.log(item, index);
});

//Mostre somente o texto do parágrafo no console
paragrafo.forEach((item) => {
  console.log(item.innerText);
});

//Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

/*  ====ENCONTRE O PROBLEMA====
imgs.forEach(item,index) => {
  console.log(item,index)
};*/

//Solução -> QUANDO HÁ 2 Argumentos é necessário parênteses
imgs.forEach((item, index) => {
  console.log(item, index);
});

/* ======ENCONTRE O PROBLEMA======
let i = 0;
imgs.forEach(=>{
  console.log(i++)
});
*/

//Solução => Quando não há nenhum argumento é obrigatório os parênteses
let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++); //Sintaxe certa para apenas uma linha

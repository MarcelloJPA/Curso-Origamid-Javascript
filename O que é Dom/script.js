console.log(window);
//window é o objeto global do browser
//possui diferentes métodos e propriedades
console.log(window.innerHeight);

/* window e document são os objetos principais do DOM, boa parte
da manipulação é feita através dos seus métodos e propriedades*/

window.alert('Isso é um alerta');
alert('Isso é um alerta'); //Funciona

const titulo = document.querySelector('h1'); //Seleciona o primeiro h1

titulo.innerText; //retorna o texto
titulo.classList; //retorna as classes
titulo.id; // retorna o id
titulo.offsetHeight; // retorna a altura do elemento

titulo.addEventListener('click', callback);
function callback() {
  console.log('CLicou em', titulo.innerText);
}

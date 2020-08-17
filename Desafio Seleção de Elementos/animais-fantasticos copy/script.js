// Retorne no console todas a imagens do site
const imagens = document.querySelectorAll('img');
console.log(imagens);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imgAnimais = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imgAnimais);

// Selecione os links internos (onde o href comece com #)
const linksInternos = document.querySelectorAll('a[href^="#"]');
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-fantasticos
const primeiraTag = document.querySelector('.animais-fantasticos h2');
console.log(primeiraTag);

// Selecione o ultimo p do site
const ultimoP = document.querySelectorAll('p');
console.log(ultimoP[ultimoP.length - 1]); //diminui -1 por causa que o array começa com 0

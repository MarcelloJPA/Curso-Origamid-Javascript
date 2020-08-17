const animais = document.querySelector('.animais');
console.log(animais.attribute);

const img = document.querySelector('img');

// Retorna o attributo alt da primeira img
const primeiroAlt = img.getAttribute('alt');
console.log(primeiroAlt);

// Cria attributo 'alt' na tag img e define como 'É uma raposa'
img.setAttribute('alt', 'É uma raposa');

//Verifica se possui o attributo definido retorna True ou false

const possuiAlt = img.hasAttribute('alt');
console.log(possuiAlt);

const carro = {
  portas: 4,
  andar: function (km) {
    console.log(`Andou ${km}`);
  },
};

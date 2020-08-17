const ativos = document.querySelectorAll('.menu a')

ativos.forEach((item) => {
  item.classList.add('ativo')
})

ativos.forEach((item) => {
  item.classList.remove('ativo')
})

ativos[0].classList.add('ativo')

//Verifique se as imagens possui o attribute alt

const imagens = document.querySelectorAll('img')

imagens.forEach((img) => {
  const possuiAtributo = img.hasAttribute('alt')
  console.log(img, possuiAtributo)

})

//Modifique o href do link externo no menu
const link = document.querySelector('a[href^="https"]')

link.setAttribute('href', 'www.google.com.br')
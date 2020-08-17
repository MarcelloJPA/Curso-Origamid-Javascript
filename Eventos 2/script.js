const imgs = document.querySelectorAll('img')

imgs.forEach((img) => {
  img.addEventListener('click', imgSrc)

})

function imgSrc(event) {
  const src = event.currentTarget.getAttribute('src')
  console.log(src)
}
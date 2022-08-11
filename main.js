let num = document.querySelector('#number')
let text = document.querySelector('#text')
let tombol = num.nextElementSibling.nextElementSibling
tombol.addEventListener('click', function(){
  let number = num.value
  let pesan = text.value
   window.open(`https://wa.me/${number}/?text=${pesan}`)
      location.reload()
      
})

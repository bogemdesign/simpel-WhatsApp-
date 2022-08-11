let num = document.querySelector('#number')
let text = document.querySelector('#text').textContent
let tombol = num.nextElementSibling.nextElementSibling
tombol.addEventListener('click', function(){
  let number = num.value
   window.open(`https://wa.me/${number}/?text=${text}`)
      location.reload()
      
})

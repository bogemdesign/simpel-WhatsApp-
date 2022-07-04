let num = document.querySelector('#number')
let tombol = num.nextElementSibling
tombol.addEventListener('click', function(){
  let number = num.value
   window.open(`https://wa.me/${number}/?text=hi`)
      location.reload()
      
})

var h = document.querySelector('h1')

var inc = document.querySelector('#Inc')

var dec = document.querySelector('#Dec')

let a = 0

inc.addEventListener('click', function(){
    h.innerHTML = a
    a++
})
dec.addEventListener('click', function(){
    h.innerHTML = a
    a--
})
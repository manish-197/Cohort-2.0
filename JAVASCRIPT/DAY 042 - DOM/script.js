var h = document.querySelector('h1')
var hey = document.querySelector('h2')

console.log(h)

// changed html content through javascript

h.innerHTML = 'changed'

h.style.color = 'red'
h.style.cursor = 'pointer'

let a = 0

h.addEventListener('click', function(){
    hey.innerHTML = a
    a++
} )
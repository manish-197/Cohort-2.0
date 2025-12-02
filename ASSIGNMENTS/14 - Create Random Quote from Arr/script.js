var main = document.querySelector('main')
var btn = document.querySelector('button')

var arr = ['I am Manish', 'Sheryians is Best', 'Laptos was updated', 'we are All clear', 'Trip was Great']

btn.addEventListener('click', ()=>{
    var a = Math.floor(Math.random()*arr.length)

    var x = Math.random()*80
    var y = Math.random()*80
    var r = Math.random()*360
    var scl = Math.random()*3

    var c1 = Math.floor(Math.random()*255)
    var c2 = Math.floor(Math.random()*255)
    var c3 = Math.floor(Math.random()*255)

    var h1 = document.createElement('h1')
    
    h1.innerHTML = arr[a]
    h1.style.color = `rgb(${c1},${c2},${c3})`
    h1.style.position = 'absolute'
    h1.style.left = x+'%'
    h1.style.top = y+'%'
    h1.style.rotate = r+'deg'
    h1.style.scale = scl

    main.appendChild(h1)

})
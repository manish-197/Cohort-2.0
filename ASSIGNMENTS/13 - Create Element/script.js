var main = document.querySelector('main')
var btn = document.querySelector('button')
var body = document.querySelector('body')

btn.addEventListener('click', ()=>{
    var div = document.createElement('div')

    var x = Math.random()*100
    var y = Math.random()*100
    var r = Math.random()*360

    var c1 = Math.floor(Math.random()*255)
    var c2 = Math.floor(Math.random()*255)
    var c3 = Math.floor(Math.random()*255)

    div.style.height = '50px'
    div.style.width = '50px'
    div.style.position = 'absolute'
    div.style.top = x+'%'
    div.style.left = y+'%'
    div.style.rotate = r+'deg'
    div.style.backgroundColor = `rgb(${c1},${c2},${c3})`


    main.appendChild(div)
})
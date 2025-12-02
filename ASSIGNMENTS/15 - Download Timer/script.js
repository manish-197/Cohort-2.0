var btn = document.querySelector('button')
var inner = document.querySelector('.inner')
var h2 = document.querySelector('h2')
var grow = 0
btn.addEventListener('click', ()=>{
    btn.style.pointerEvents = 'none'

    var num = 50 + Math.floor(Math.random()*50)
    console.log(num);
    
    var int = setInterval(() => {
        grow++
        console.log(grow);
        h2.innerHTML = grow+'%'
        inner.style.width = grow+'%'
    }, num);
    
    setTimeout(() => {
        btn.style.opacity = 0.5
        btn.innerHTML = 'Downloaded'
        clearInterval(int)

    }, num*100);

    console.log(num*100);
    
    
})
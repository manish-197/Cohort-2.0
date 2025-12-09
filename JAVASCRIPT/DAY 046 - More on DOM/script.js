var img = document.querySelector('img')
var love = document.querySelector('#love')

img.addEventListener('dblclick', function(){
    love.style.opacity = 1
    love.style.transform = 'translate(-50%, -50%) scale(1) rotate(-15deg)'
    setTimeout(function(){
        love.style.transform = 'translate(-50%, -350%) scale(1) rotate(15deg)'

    },800)
    setTimeout(function(){
        love.style.opacity = 0

    },1000)

    setTimeout(function(){
        love.style.transform = 'translate(-50%, -50%) scale(0) rotate(0deg)'
        love.style.opacity = 0
    },1200)
    
})

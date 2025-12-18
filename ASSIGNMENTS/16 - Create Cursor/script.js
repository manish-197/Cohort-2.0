var cursor = document.getElementById('cursor');
var body = document.body
var heading = document.querySelector('h1');

body.addEventListener('mousemove', function(elem){
    cursor.style.left = elem.pageX + 'px';
    cursor.style.top = elem.pageY + 'px';
    
})

heading.addEventListener('mouseenter', function(){
    cursor.style.transform = 'scale(3)'
    heading.style.transform = 'scale(0.8)'
    cursor.style.animation = 'all 0.2s ease-in-out'
    // heading.style.animation = 'all 0.2s ease-in-out'
})
heading.addEventListener('mouseleave', function(){
    cursor.style.animation = 'all 0.2s ease-in-out'
    heading.style.animation = 'all 0.2s ease-in-out'
    cursor.style.transform = 'scale(1)'
    heading.style.transform = 'scale(1)'
})
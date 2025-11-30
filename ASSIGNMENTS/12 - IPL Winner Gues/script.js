var btn = document.querySelector('button')
var box = document.querySelector('.box')
var h1 = document.querySelector('h1')

let arr = [
    {
        team: 'KKR',
        primary: 'purple',
    },
    {
        team: 'MI',
        primary: 'blue'
    },
    {
        team: 'CSK',
        primary: 'yellow'
    },
    {
        team: 'RR',
        primary: 'pink'
    },
    {
        team: 'PBKS',
        primary: 'red'
    },
    {
        team: 'SRH',
        primary: 'orange'
    }

]


btn.addEventListener('click', function(){
    var winner = arr[Math.floor(Math.random()*arr.length)]
    h1.innerHTML = winner.team
    box.style.backgroundColor = winner.primary
    
})
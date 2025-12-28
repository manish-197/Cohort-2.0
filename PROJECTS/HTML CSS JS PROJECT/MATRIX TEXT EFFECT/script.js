var h1 = document.querySelector('h1');
var h2 = document.querySelector('h2');

const text = h1.innerText
const text2 = h2.innerText
var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let iteration = 0

h1.addEventListener('mouseenter', ()=>{
    setInterval(() => {
        const str = text.split("").map((char, index) => {
            if(index < iteration){
                return char;
            }
            return letters.split("")[Math.floor(Math.random() * letters.length)]
        }).join("");
        h1.innerHTML = str
        iteration += 0.2
    }, 30);
})
h2.addEventListener('mouseenter', ()=>{
    setInterval(() => {
        const str = text2.split("").map((char, index) => {
            if(index < iteration){
                return char;
            }
            return letters.split("")[Math.floor(Math.random() * letters.length)]
        }).join("");
        h2.innerHTML = str
        iteration += 0.2
    }, 30);
})

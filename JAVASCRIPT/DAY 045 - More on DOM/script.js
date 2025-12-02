
var a = 0

var int = setInterval(()=>{
    a++;
    console.log(a);
    
}, 1000)

setTimeout(() => {
    clearInterval(int)
}, 5000);
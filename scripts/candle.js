const candleContainer = document.getElementById('candle_container');

let width = window.innerWidth;
let height = window.innerHeight;

let candlePara1  = document.getElementById('candle1')
let candlePara2  = document.getElementById('candle2')
let candlePara3  = document.getElementById('candle3')
let candlePara4  = document.getElementById('candle4')
let candlePara5  = document.getElementById('candle5')
let candlePara6  = document.getElementById('candle6')
let candlePara7  = document.getElementById('candle7')


const emoji = '🕯️'

const candles = Array(8);

class Candle {
    constructor(content){
        this.content = content;
        this.x = randomXPosition();
        this.y = randomYPosition();
    }
}

//for loop with the number of my candles

for (i=0; i<candles.length;  i++){
     candles[i] = new Candle(emoji)
}

setContent(candlePara1,0)
setContent(candlePara2,1)
setContent(candlePara3,2)
setContent(candlePara4,3)
setContent(candlePara5,4)
setContent(candlePara6,5)
setContent(candlePara7,6)


function setContent(p, index){
    p.textContent = candles[index].content;
    p.style.left = candles[index].x;
    p.style.top = candles[index].y;
}

function randomXPosition() {
    return Math.floor(Math.random() * (width-100)+50) + 'px';
}
function randomYPosition() {
    return Math.floor(Math.random() * (height-200)+100) + 'px';
}

window.addEventListener('load',()=> animateCandle(), setInterval(animateCandle,2960))

function animateCandle (){
    candlePara1.classList.toggle('hoverUp')
    candlePara2.classList.toggle('hoverDown')
    candlePara3.classList.toggle('hoverUp')
    candlePara4.classList.toggle('hoverDown')
    candlePara5.classList.toggle('hoverUp')
    candlePara6.classList.toggle('hoverDown')
    candlePara7.classList.toggle('hoverUp')
}

function resizeListener() {
    width = window.innerWidth;
    height =  window.innerHeight;
}
window.addEventListener("resize", resizeListener);
  
// so i have a working script that injects a candle and animates it
// i would like to generate a number of candle, store them into an array, for each candle in that array assign an x and y and use my animate Candle function accordingly 
//The best way to do this would be to creat a candle object, and store eat instance of the object into my array 

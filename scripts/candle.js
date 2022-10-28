const candleContainer = document.getElementById('candle_container');

const emoji = '🕯️'

const candles = Array(3)

class Candle {
    constructor(content){
        this.content = content;
        this.x = randomPosition();
        this.y = randomPosition();
    }
}

//for loop with the number of my candles

for (i=0; i<candles.length;  i++){
     candles[i] = new Candle(emoji)
}

console.log(candles)

for (candle of candles){
    
    console.log(candle)
}


function randomPosition() {
    return Math.floor(Math.random() * (600-0)+100) + 'px';
}

// const candles = Array(3).fill(candle)

// console.log(candle1)

// const candle1 = new Candle(emoji)
// const candle2 = new Candle(emoji)
// const candle3 = new Candle(emoji)
// const candle4 = new Candle(emoji)
// const candle5 = new Candle(emoji)

// const candlePara1  = document.createElement('p');
// candlePara1.setAttribute('class','candle');
// candleContainer.appendChild(candlePara1);
// candlePara1.textContent = candle1.content;
// candlePara1.style.left = candle1.x;
// candlePara1.style.top = candle1.y;

// const candlePara2  = document.createElement('p');
// candlePara2.setAttribute('class','candle');
// candleContainer.appendChild(candlePara2);
// candlePara2.textContent = candle2.content;
// candlePara2.style.left = candle2.x;
// candlePara2.style.top = candle2.y;

// const candlePara3  = document.createElement('p');
// candlePara3.setAttribute('class','candle');
// candleContainer.appendChild(candlePara3);
// candlePara3.textContent = candle3.content;
// candlePara3.style.left = candle3.x;
// candlePara3.style.top = candle3.y;

// const candlePara4  = document.createElement('p');
// candlePara4.setAttribute('class','candle');
// candleContainer.appendChild(candlePara4);
// candlePara4.textContent = candle4.content;
// candlePara4.style.left = candle4.x;
// candlePara4.style.top = candle4.y;

// const candlePara5  = document.createElement('p');
// candlePara5.setAttribute('class','candle');
// candleContainer.appendChild(candlePara5);
// candlePara5.textContent = candle5.content;
// candlePara5.style.left = candle5.x;
// candlePara5.style.top = candle5.y;

// so i have a working script that injects a candle and animates it
// i would like to generate a number of candle, store them into an array, for each candle in that array assign an x and y and use my animate Candle function accordingly 
//The best way to do this would be to creat a candle object, and store eat instance of the object into my array 

// window.addEventListener('load',()=> animateCandle(), setInterval(animateCandle,3950))

// function animateCandle (){
//     candlePara1.classList.toggle('hover')
//     candlePara2.classList.toggle('hover')
//     candlePara3.classList.toggle('hover')
//     candlePara4.classList.toggle('hover')
//     candlePara5.classList.toggle('hover')
// }
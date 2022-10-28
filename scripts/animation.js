const candle1 = document.getElementById('candle1')

window.addEventListener('load',()=> animateCandle(), setInterval(animateCandle,3950))

function animateCandle (){
    candle1.classList.toggle('hover')
    console.log('animating')
}

// window.addEventListener('load', (event) => {
//     console.log('page is fully loaded');
//   });
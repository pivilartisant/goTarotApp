const audioBtn = document.getElementById('spread');
var audio = new Audio('assets/thriller.mp3');

audioBtn.addEventListener('click',()=>
playMp3())


function playMp3 (){
    audioBtn.remove();
    candlePara1.remove();
    candlePara2.remove();
    candlePara3.remove();
    candlePara4.remove();
    candlePara5.remove();
    candlePara6.remove();
    candlePara7.remove();

    // audio.volume = 0.3;
    // audio.play();
}
// console.log('audio')

// audio.play()


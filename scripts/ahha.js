const audioBtn = document.getElementById('spread')

var audio = new Audio('assets/thriller.mp3');

audioBtn.addEventListener('click',()=>
playMp3())


function playMp3 (){
    audioBtn.remove();
    // audio.volume = 0.5;
    // audio.play();
}
// console.log('audio')

// audio.play()


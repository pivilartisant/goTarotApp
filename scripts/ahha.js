const audioBtn = document.getElementById('spread')

var audio = new Audio('assets/thriller.mp3');

audioBtn.addEventListener('click',()=>
playMp3())


function playMp3 (){
    audioBtn.remove()
    audio.play()
}
// console.log('audio')

// audio.play()


const audioBtn = document.getElementById('spread')

var audio = new Audio('assets/thriller.mp3');

audioBtn.addEventListener('click',()=>
setTimeout(playMp3,1000))


function playMp3 (){
    audioBtn.remove()
    audio.play()
}
// console.log('audio')

// audio.play()


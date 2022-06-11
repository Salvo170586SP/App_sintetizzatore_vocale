console.log('js ok');

const textarea = document.querySelector('textarea');
const play = document.getElementById('play');
const rangebar = document.querySelector('input');


play.addEventListener('touchend', function(){
    const textLength = textarea.value.trim().length;
    console.log(textLength);

    if(textLength > 0){
        talk();

    }
});


//funzione per far parlare la paperella

function talk(){
    const text = textarea.value;
    const range = rangebar.value;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.pitch = range;
    speechSynthesis.speak(utterance);
 }
let speech = new SpeechSynthesisUtterance();
let stopButton = document.getElementById("stop");

const synth = window.speechSynthesis;

let speaking = false;
let voices = [];

let voiceselect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (voiceselect.options[i] = new Option(voice.name, i)));
};

voiceselect.addEventListener("change" , () =>{
    speech.voice = voices[voiceselect.value]; 
});


document.querySelector("button").addEventListener("click", () =>{
    if (synth.speaking) {
        synth.cancel();
        speaking = true;
        return; 
    }
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});

stopButton.addEventListener("click", () => {
    if (synth.speaking) {
        speaking = false;
        stopButton.disabled = true;
        synth.cancel();
    }
});
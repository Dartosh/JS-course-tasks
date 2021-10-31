//Полноэкранный режим
var fullscreenbtn = document.getElementsByClassName("fullscreen");
fullscreenbtn[0].addEventListener('click', OpenFull);
function OpenFull(){
    if (document.fullscreenElement) {
        document.exitFullscreen();
       } else {
        document.documentElement.requestFullscreen();
       }
}

document.addEventListener('mouseup', (event) => {
  kek = 0;
});
//Обработка нажатий на клавишу
let kek = 0;
var piano = document.getElementsByClassName("piano-key");
for(let elem of piano){
    elem.addEventListener('mousedown', (event) => {
        if(event.target.classList.contains('piano-key')) {
          const note = event.target.dataset.note;
          const src = `assets/audio/${note}.mp3`;
          kek = 1;
          event.target.classList.toggle('piano-key-active');
          playAudio(src);
          }   
      });
      elem.addEventListener('mouseup', (event) => {
        if(event.target.classList.contains('piano-key')) {
          if(event.target.classList.contains('piano-key-active'))
          event.target.classList.toggle('piano-key-active');
          }  
        kek = 0; 
      });
      elem.addEventListener('mouseover', (event) => {
        if(event.target.classList.contains('piano-key') && kek == 1) {
          const note = event.target.dataset.note;
          const src = `assets/audio/${note}.mp3`;
          event.target.classList.toggle('piano-key-active');
          playAudio(src);
          }  
      });
      elem.addEventListener('mouseout', (event) => {
        if(event.target.classList.contains('piano-key')) {
          if(event.target.classList.contains('piano-key-active'))
          event.target.classList.toggle('piano-key-active');
          }   
      });
    }
function playAudio(src) {
    const audio = new Audio();
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
}

//Notes an Letters
var notes_letters = document.getElementsByClassName("btn");
for(let elem of notes_letters){
  elem.addEventListener('click', (event) => {
    if(!(elem.classList.contains('btn-active'))){
      for(let element of notes_letters)
        element.classList.toggle('btn-active');
      for(let element of piano){
        element.classList.toggle('piano-key-letter');
      }
    }
    });  
  }

//Обработка нажатий на клавиатуре
document.addEventListener('keydown', (event) => {
  if(event.repeat == true)return;
  let Knote = event.which.toString();
  let a = {'68': 'c','70': 'd','71': 'e','72': 'f','74': 'g','75': 'a','76': 'b','82': 'c♯','84': 'd♯','85': 'f♯','73': 'g♯','79': 'a♯'};
  for(var i in a){
    if(Knote == i){
      const meme = a[i];
      const src = `assets/audio/${meme}.mp3`;
      playAudio(src);
      for(let c of piano){
        if(c.dataset.note == meme)c.classList.add('piano-key-active');
      }
    }
  }
});
document.addEventListener('keyup', (event) => {
  const Knote = event.code[3];
  for(let c of piano){
    if(c.dataset.letter == Knote && c.classList.contains('piano-key-active'))c.classList.toggle('piano-key-active');
  }
});
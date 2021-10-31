var liveB = document.getElementsByClassName("live");
var btns = document.getElementsByClassName("sidebar");

let k = 1;
for(let button of liveB){
  button.addEventListener('click', (event) => {
    if(k === 0){
      for(let elem of btns){
        elem.classList.add("none");
      }
      k = 1; 
    }
    else {
      for(let elem of btns){
        elem.classList.remove("none");
      }
      k = 0;
    }
    }); 
}

var menuB = document.getElementsByClassName("menu-btn");
var menu = document.getElementsByClassName("menu");

let m = 1;
for(let button of menuB){
  button.addEventListener('click', (event) => {
    if(m === 0){
      for(let elem of menu){
        elem.classList.add("none");
      }
      m = 1; 
    }
    else {
      for(let elem of menu){
        elem.classList.remove("none");
      }
      m = 0;
    }
    }); 
}

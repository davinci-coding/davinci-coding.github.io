const UNSPLASH_URL = "https://source.unsplash.com/random";
const body = document.querySelector("body");

function paintBg(){
  body.style.backgroundImage = `url($UNSPLASH_URL})`;
}

function init(){
  paintBg();
}

init();

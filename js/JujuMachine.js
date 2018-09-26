const buttons = document.getElementById("buttons");

function keyPress(keyCode) {
console.log(keyCode);
const videoContainer = document.querySelector(`div[data-key="${keyCode}"]`);
if (!videoContainer) return;

const video = videoContainer.querySelector(`video`);
video.currentTime = 0
video.play();
videoContainer.classList.add('playing');

};

 function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }


  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener("keydown", function(p){
    keyPress(p.keyCode);
});

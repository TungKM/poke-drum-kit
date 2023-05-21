window.addEventListener("keydown", playSound);

function playSound(e) {
  //e === "event"
  console.log(e.keyCode);

  //play audio when correct key is hit
  const hitAudio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  console.log(hitAudio);

  if (!hitAudio) return; //stop the function if none assign keys were click

  hitAudio.currentTime = 0; //eliminate the pause in between keys click
  hitAudio.play();

  //------------------------------------------------------------
  //click animation
  const hitKey = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  console.log(hitKey);

  hitKey.classList.add("playing"); //add transition animation
}

//----------------------------------------------------------
function removeTransition(e) {
  if (e.propertyName !== "transform") return;

  this.classList.remove("playing");
  console.log(e);
}

const keys = document.querySelectorAll(".key"); //provide an linkedlist of all the key class related elements
keys.forEach((key) => key.addEventListener("transitionend", removeTransition)); //test this with console.log(e) in function remove transition to checkout the transtition events fired

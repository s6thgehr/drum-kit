let buttons = Array.from(document.querySelectorAll(".drum"));

buttons.map((button) =>
  button.addEventListener("click", () => {
    playDrum(button.innerHTML);
    animateButton(button.innerHTML);
  })
);

document.addEventListener("keydown", (event) => {
  playDrum(event.key);
  animateButton(event.key);
});

function playDrum(k) {
  switch (k) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      let snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      let crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      let kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;
  }
}

async function animateButton(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  delay(200).then(() => activeButton.classList.remove("pressed"));
}

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

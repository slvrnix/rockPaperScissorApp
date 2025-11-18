/* 
VARIABLES
*/
const hands = ["rock", "paper", "scissors"];
const main = document.querySelector("main");
const background = new Audio("sfx/background.mp3");
background.volume = 0.1;
const musicToggle = document.querySelector('input[name="music"]');
const sfxToggle = document.querySelector('input[name="sfx"]');
const themeToggle = document.querySelector('input[name="theme"]');
const startBtn = document.getElementById("startBtn");
const initialSection = document.getElementById("initialSection");
const mainSection = document.getElementById("mainSection");
const finalSection = document.getElementById("finalSection");
const roundImg = document.getElementById("round_img");
const choicesArea = document.getElementById("choicesArea");
const rockBtn = document.getElementById("rock_btn");
const paperBtn = document.getElementById("paper_btn");
const scissorsBtn = document.getElementById("scissors_btn");
let userHand = "";
let computerHand = "";
const userPlayingHand = document.getElementById("user_playing_hand");
const computerPlayingHand = document.getElementById("computer_playing_hand");
const userChoiceText = document.getElementById("user_choice_text");
const pcChoiceText = document.getElementById("pc_choice_text");
const playingHandAnimation = [
  { transform: "scale(1)" },
  { transform: "scale(1.5)" },
  { transform: "scale(1)" },
];
const playingHandAnimatonDuration = {
  duration: 1000,
  iterations: 1,
};
/*
EVENTS
*/
if (musicToggle) musicToggle.checked = false;
if (sfxToggle) sfxToggle.checked = false;
if (themeToggle) themeToggle.checked = false;

rockBtn.addEventListener("click", () => userHandChange("rock"));
paperBtn.addEventListener("click", () => userHandChange("paper"));
scissorsBtn.addEventListener("click", () => userHandChange("scissors"));
/* 
FUNCTIONS
*/
function BackgroundMusic() {
  if (musicToggle.checked) {
    background.currentTime = 0;
    background.loop = true;
    background.play();
  } else {
    background.pause();
  }
}

function ThemeChange() {
  if (themeToggle.checked) {
    main.classList.add("dark_mode");
  } else {
    main.classList.remove("dark_mode");
  }
}

function SectionSwitch() {
  mainSection.style.display = "block";
  initialSection.style.display = "none";
}

function userHandChange(handItem) {
  userHand = handItem;

  if (userHand === "rock") {
    userChoiceText.innerHTML = `Your hand: ${
      userHand.charAt(0).toUpperCase() + userHand.slice(1)
    }`;
    userPlayingHand.src = "photos/rock.png";
    userPlayingHand.animate(playingHandAnimation, playingHandAnimatonDuration);
    ComputerPlay();
    pcChoiceText.innerHTML = `PC's hand: ${computerHand.charAt(0).toUpperCase() + computerHand.slice(1)}`;
  } else if (userHand === "paper") {
    userChoiceText.innerHTML = `Your hand: ${
      userHand.charAt(0).toUpperCase() + userHand.slice(1)
    }`;
    userPlayingHand.src = "photos/paper.png";
    userPlayingHand.animate(playingHandAnimation, playingHandAnimatonDuration);
  } else if (userHand === "scissors") {
    userChoiceText.innerHTML = `Your hand: ${
      userHand.charAt(0).toUpperCase() + userHand.slice(1)
    }`;
    userPlayingHand.src = "photos/scissors.png";
    userPlayingHand.animate(playingHandAnimation, playingHandAnimatonDuration);
  }
}

function ComputerPlay() {
  let random = Math.floor(Math.random() * 3);
  computerHand = hands[random];
}

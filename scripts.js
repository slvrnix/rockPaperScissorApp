/* 
VARIABLES
*/
const main = document.querySelector("main");
const background = new Audio("sfx/background.mp3");
const musicToggle = document.querySelector('input[name="music"]');
const sfxToggle = document.querySelector('input[name="sfx"]');
const themeToggle = document.querySelector('input[name="theme"]');
const startBtn = document.getElementById("startBtn");
const initialSection = document.getElementById("initialSection");
const mainSection = document.getElementById("mainSection");
const finalSection = document.getElementById("finalSection");
const roundImg = document.getElementById("round_img");
const choicesArea = document.getElementById("choicesArea");
/*
EVENTS
*/
if (musicToggle) musicToggle.checked = false;
if (sfxToggle) sfxToggle.checked = false;
if (themeToggle) themeToggle.checked = false;

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
        main.classList.toggle("dark_mode");
    } else { 
        main.classList.remove("dark_mode");
    }
}

function SectionSwitch() {
    mainSection.style.display = 'block';
    initialSection.style.display = 'none';
}
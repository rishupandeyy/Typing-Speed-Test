// script.js
let timer;
let time = 0;
let wordCount = 0;
let speed = 0;
let quote = "";
let startTime = null;

const quotes = [
    "The quick brown fox jumps over the lazy dog",
    "A journey of a thousand miles begins with a single step",
    "To be or not to be, that is the question",
    "All that glitters is not gold",
    "Time is money, don't waste it"
];

const quoteContainer = document.getElementById("quote");
const inputField = document.getElementById("input-field");
const timerElement = document.getElementById("time");
const speedElement = document.getElementById("speed-value");
const startButton = document.getElementById("start-btn");

function startTest() {
    // Reset values
    time = 0;
    wordCount = 0;
    speed = 0;
    inputField.disabled = false;
    inputField.value = "";
    inputField.focus();
    startButton.disabled = true;

    // Pick a random quote
    quote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteContainer.textContent = quote;

    // Start the timer
    startTime = new Date().getTime();
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    // Calculate elapsed time
    time = Math.floor((new Date().getTime() - startTime) / 1000);
    timerElement.textContent = `Time: ${time} seconds`;

    // Calculate typing speed (words per minute)
    if (inputField.value.trim()) {
        wordCount = inputField.value.split(" ").length;
        speed = Math.round((wordCount / time) * 60);
        speedElement.textContent = speed;
    }

    // Check if the user has completed typing the quote
    if (inputField.value === quote) {
        clearInterval(timer);
        alert(`Test completed! Your typing speed is ${speed} WPM.`);
        inputField.disabled = true;
        startButton.disabled = false;
    }
}

function checkInput() {
    // Check if input matches the quote
    if (inputField.value === quote) {
        clearInterval(timer);
    }
}

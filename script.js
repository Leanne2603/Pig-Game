'use strict';

// Retrieving the IDs to select elements
const score0El = document.querySelector("#score--0")
const score1El = document.getElementById("score--1")
const player0El = document.getElementById("current--0")
const player1El = document.getElementById("current--1")
const diceEl = document.querySelector(".dice")
const btnNew = document.querySelector(".btn--new")
const btnRoll = document.querySelector(".btn--roll")
const btnHold = document.querySelector(".btn--hold")

// Sets the player scores to zero
score0El.textContent = 0
score1El.textContent = 0

// Hides the dice in the initial load before dice is rolled
diceEl.classList.add("hidden")

// Variable needs to be set outside event listener function otherwise it will reset each time
let currentScore = 0

// Functionality which controls rolling the dice
btnRoll.addEventListener("click", function() {
    // Random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1
    // Dice displays random outcome
    diceEl.classList.remove("hidden")
    diceEl.src = `dice-${dice}.png`
    console.log(dice)
    // Rolled 1? If true, next player
    if(dice !== 1) {
        // adds dice value to current score
        currentScore += dice;
        player0El.textContent = currentScore
    } else {
        // switches to next player
        
    }
})



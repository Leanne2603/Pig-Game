'use strict';

// Retrieving the IDs to select elements
const player0El = document.querySelector(".player--0")
const player1El = document.querySelector(".player--1")
const score0El = document.querySelector("#score--0")
const score1El = document.getElementById("score--1")
const current0El = document.getElementById("current--0")
const current1El = document.getElementById("current--1")
const diceEl = document.querySelector(".dice")
const btnNew = document.querySelector(".btn--new")
const btnRoll = document.querySelector(".btn--roll")
const btnHold = document.querySelector(".btn--hold")

let scores, currentScore, activePlayer, playing



// Variable needs to be set outside event listener function otherwise it will reset each time

const init = function() {
    scores = [0,0]
    currentScore = 0
    activePlayer = 0
    playing = true;

    score0El.textContent = 0
    score1El.textContent = 0
    current0El.textContent = 0
    current1El.textContent = 0
    // Hides the dice in the initial load before dice is rolled
    diceEl.classList.add("hidden")
    player0El.classList.remove("player--winner")
    player1El.classList.remove("player--winner")
    player0El.classList.add("player--active")
    player1El.classList.remove("player--actuve")
}

init()

const switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0
    player0El.classList.toggle("player--active")
    player1El.classList.toggle("player--active")
}

// Functionality which controls rolling the dice
btnRoll.addEventListener("click", function() {
    if(playing) {
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
            // Gets the element and uses the activeplayer variable to determine which player is current and adds to their score
            document.getElementById(`current--${activePlayer}`).textContent = currentScore
        } else {
            // switches to next player - checks if player is zero, if yes then switches to 1 else to zero
            switchPlayer()
        }
    }
})


btnHold.addEventListener("click", function() {
    if(playing) {
    // Add current score to active player's score
        scores[activePlayer] += currentScore
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
        // Check if the player's score is >= 100
        if(scores[activePlayer] >= 100) {
            playing = false;
            diceEl.classList.add("hidden")
            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner")
            document.querySelector(`.player--${activePlayer}`).classList.remove("player--active")
        } else {
            // Switch to the next player
            switchPlayer()
        }
    }
})

btnNew.addEventListener("click", init)
'use strict';

// Retrieving the IDs to select elements
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice")

// Sets the player scores to zero
score0El.textContent = 0
score1El.textContent = 0

// Hides the dice in the initial load before dice is rolled
diceEl.classList.add("hidden")



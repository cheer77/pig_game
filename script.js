'use strict';

//Elements selection
const score0Element = document.getElementById('score--0');
const score1Element = document.getElementById('score--1');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');
const diceElement = document.querySelector('.dice');
const bntNew = document.querySelector('.btn--new');
const bntRoll = document.querySelector('.btn--roll');
const bntHold = document.querySelector('.btn--hold');
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');

//Game initial conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

const totalScores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//Roll the dice logic
bntRoll.addEventListener('click', function () {
  //1. Generate a random number
  const diceNumber = Math.trunc(Math.random() * 6) + 1;
  //2. Display number on the dice
  diceElement.classList.remove('hidden');
  diceElement.src = `img/dice${diceNumber}.png`;

  //3. If the number is 1, switch to the next player if not - add number to the current score
  if (diceNumber !== 1) {
    currentScore += diceNumber;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0Element.classList.toggle('player--active');
    player1Element.classList.toggle('player--active');
  }
});

bntHold.addEventListener('click', function () {
  //1. Add current score to the active Player total score
  totalScores[activePlayer] += currentScore;
  //2. If total score of active player  is >= 100, active player is won, if not - switch active player
});

'use strict';
//selecting elements
const hold = document.querySelector('.btn--hold');
const playerOneScore = document.getElementById('score--0');
const playerTwoScore = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const rollDice = document.querySelector('.btn--roll');
const currentOneScore = document.getElementById('current--0');
const currentTwoScore = document.getElementById('current--1');
const newGame = document.querySelector('.btn--new');

playerOneScore.textContent = 0;
playerTwoScore.textContent = 0;

dice.classList.add('hidden');
let scores = [0, 0];
let current = 0;
let activePlayer = 0;

rollDice.addEventListener('click', function () {
  let diceNumber = Math.trunc(Math.random() * 6) + 1;
  dice.classList.remove('hidden');
  dice.src = `dice-${diceNumber}.png`;
  if (diceNumber !== 1) {
    current += diceNumber;
    document.getElementById(`current--${activePlayer}`).textContent = current;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    current = 0;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');

    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--active');
  }
});

hold.addEventListener('click', function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  scores[activePlayer] += current;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  if (scores[activePlayer] >= 100) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    dice.classList.add('hidden');
  }
  current = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
});

newGame.addEventListener('click', function () {
  playerOneScore.textContent = 0;
  playerTwoScore.textContent = 0;
  scores = [0, 0];
  current = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');
  activePlayer = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
  dice.classList.add('hidden');
});

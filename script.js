'use strict';

const buttons = document.querySelectorAll('#circle');

const scoreEl = document.getElementById('score');
const main = document.getElementById('main');
const selection = document.getElementById('selection');
const reset = document.querySelector('.play-again');

const pc = document.getElementById('pc');
const userSelect = document.getElementById('user-select');

const winner = document.querySelector('.win');

const choices = ['paper', 'rock', 'scissors'];

let score = 0;
let userChoice = undefined;


function pickRandomChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}
buttons.forEach(button => {
  button.addEventListener('click', () => {
    userChoice = button.getAttribute('data-choice');

    checkWinner();
  });
});

// RESET BUTTON
reset.addEventListener('click', () => {
  main.style.display = 'block';
  selection.style.display = ' none';
});


//MAIN FUNCTION , CHECK THE WINNER
function checkWinner() {
  const computerChoice = pickRandomChoice();

  updateSelection(userSelect, userChoice);
  updateSelection(pc, computerChoice);


  if (
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'rock' && userChoice === 'scissors') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    //user win
    updateScore(1);
    winner.innerText = `YOU WIN`;
  } else if (userChoice === computerChoice) {
    //draw
    winner.innerText = `DRAW`;
  } else {
    //user lost
    winner.innerText = `YOU LOST`;

    updateScore(-1);
  }

  main.style.display = 'none';
  selection.style.display = 'block';
}

//UPDATE SCORE
function updateScore(value) {
  score += value;
  scoreEl.innerText = score;
}

//SWITCH UI CHOICE
function updateSelection(selectionEl, choice) {
  const img = selectionEl.querySelector('img');
  selectionEl.classList.remove('icon--wrap-scissors');
  selectionEl.classList.remove('icon--wrap-paper');
  selectionEl.classList.remove('icon--wrap-rock');

  selectionEl.classList.add(`icon--wrap-${choice}`);
  img.src = `/images/icon-${choice}.svg`;
 
}


//BUTTON RULES
const showRules = document.querySelector('.show-rules');
const hiddenRules = document.querySelector('.show-rules-x');
const rulesBtn = document.querySelector('.rules-btn');

rulesBtn.addEventListener('click', () => {
  showRules.classList.remove('hidden');
});
hiddenRules.addEventListener('click', () => {
  showRules.classList.add('hidden');
});

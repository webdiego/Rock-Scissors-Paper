const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const rock = document.getElementById('rock');

let you = document.querySelector('.your-choice');
let computer = document.querySelector('.choice-computer');

const line = document.querySelector('.line');
const choice = document.querySelector('.choices--turn'); // display text
const bottom = document.querySelector('.icon--wrap-bottom'); //hide when you choice

const playGame = document.querySelector('.play');
const playAgain = document.querySelector('.play-again');

let score = document.getElementById('score');
score.textContent = 0;

let computerChoice = Math.trunc(Math.random() * 3) + 1;

//------GAME START UI CHANGE
const gameUi = () => {
  line.classList.add('hidden');
  choice.classList.remove('hidden');
  bottom.classList.add('hidden');
};

//--------------------OUR CHOICES
const yourChoice = choices => {
  you.innerHTML = `<div id="${choices}" class="icon--wrap-${choices}">
  <div class="icon--wrap-white">
    <img  class="icon" src="./images/icon-${choices}.svg" alt="" srcset="">
    </div>
</div>`;
};

//WIN,LOSE,DRAW
const win = () => {
  playGame.classList.remove('hidden');
  playGame.innerHTML = `<h2 >You Win </h2>
  <button class="play-again">Play again</button>`;

  score.textContent++;

  let p = document.querySelector('.play');
  p.addEventListener('click', () => {
    firstStep();
  });
};

const draw = () => {
  playGame.classList.remove('hidden');
  playGame.innerHTML = `<h2 >Draw </h2>
  <button class="play-again">Play again</button>`;

  let p = document.querySelector('.play');
  p.addEventListener('click', () => {
    firstStep();
  });
};
const lose = () => {
  playGame.classList.remove('hidden');
  playGame.innerHTML = `<h2 >You Lose </h2>
  <button class="play-again">Play again</button>`;

  score.textContent--;

  let p = document.querySelector('.play');
  p.addEventListener('click', () => {
    firstStep();
  });
};

//------------PC CHOICES

const pc = () => {
  const pcChoice = choices => {
    scissors.classList.add('hidden')
    computer.innerHTML = `<div id="${choices}" class="icon--wrap-${choices}">
  <div class="icon--wrap-white">
  <img  class="icon" src="./images/icon-${choices}.svg" alt="" srcset="">
  </div>
  </div>`;
  };

  if (computerChoice == 1) {
    pcChoice('paper');
  } else if (computerChoice == 2) {
    pcChoice('scissors');
  } else if (computerChoice == 3) {
    pcChoice('rock');
  }
};

//ROCK - PC = 3
rock.addEventListener('click', () => {
  paper.classList.add('hidden')
  yourChoice('rock');
  pc();
  gameUi();
  if (computerChoice == 2) {
    win();
  } else if (computerChoice == 1) {
    lose();
  } else {
    draw();
  }
});

//PAPER PC = 1

paper.addEventListener('click', () => {
  paper.classList.add('hidden')

  yourChoice('paper');
  pc();
  gameUi();
  if (computerChoice == 3) {
    win();
  } else if (computerChoice == 2) {
    lose();
  } else {
    draw();
  }
});

//SCISSOR PC=2
scissors.addEventListener('click', () => {
  paper.classList.add('hidden')

  yourChoice('scissors');
  pc();
  gameUi();
  if (computerChoice == 1) {
    win();
  } else if (computerChoice == 3) {
    lose();
  } else {
    draw();
  }
});

// FIRST STEP

const firstStep = () => {
  line.classList.remove('hidden');
  choice.classList.add('hidden');
  bottom.classList.remove('hidden');
  playGame.classList.add('hidden');

  
   computer.removeChild(computer.childNodes[0])
   you.removeChild(you.childNodes[0])
  paper.classList.remove('hidden')
  scissors.classList.remove('hidden')
 
    
};

playAgain.addEventListener('click', () => {
  firstStep();
});





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

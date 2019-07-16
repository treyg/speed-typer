window.addEventListener('load', init);


//globals/

//available levels
const levels = {
    easy: 5,
    medium: 3,
    hard: 2,
}

// To Change Level
const currentLevel = levels.medium;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition',
  'enumerate',
  'visceral',
  'secure',
  'contemplate',
  'meditate',
  'majjhima',
  'anicca',
  'anatta',
  'akaliko',
  'akusala',
  'bhavana',
  'ceto-vimutti',
  'indriya',
  'idappaccayata',
  "kalaynamitta",
  'karuna',
  'mudita',
  'upekkha',
];

//initialize game
function init (){
    //show number of seconds in UI
    seconds.innerHTML = currentLevel;
    //Load word from array
    showWord(words);
    //Start Matching on word input
    wordInput.addEventListener('input', startMatch);
    //Call countdown every second
    setInterval(countdown, 1000);
    //Check game status
    setInterval(checkStatus, 50);
}

//Start Match
function startMatch() {
    if(matchWords()) {
     isPlaying = true;
     time = currentLevel + 1;
     showWord(words);
     wordInput.value = '';
     score++;
    }

    //If score is -1, display 0
    if(score === -1){
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
    scoreDisplay.innerHTML = score;
}

//Match Current Wod to wordInput
function matchWords() {
    if(wordInput.value === currentWord.innerHTML) {
        message.innerHTML === 'Correct!!!';
        return true;
    }else {
        message.innerHTML = '';
        return false;
    }

}



//pick and show random word
function showWord(words){
    //Generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    //output a random word
    currentWord.innerHTML = words[randIndex];
}

//countdown timer
function countdown() {
   //Make sure time has not run out
   if(time > 0) {
    // Decrease Time
    time--;
   } else if(time === 0) {
    //game is over
    isPlaying = false;
   }
   //show time
   timeDisplay.innerHTML = time;
}

//check game status
function checkStatus() {
    if(!isPlaying && time === 0){
       message.innerHTML = 'Game Over!!!';
       score = -1;
    }
}
let random = parseInt(Math.random()*100+1);
console.log(random);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let play = true;

if(play){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validGuess(guess);
    });
}

function validGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a number');
    }
    else if(guess<1){
        alert("enter number greater then 0");
    }
    else if(guess > 100){
        alert("enter number less than 100");
    }
    else{
        prevGuess.push(guess);
        if(numGuess >=10){
            displayGuess(guess);
            display(`Game Over, the number was ${random}.`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === random){
        display(`You Won`);
        endGame();
    }
    else if(guess < random){
        display(`number is too low`);
    }
    else if(guess > random){
        display(`number is too high`);
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`;
}

function display(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start a new Game</h2>`
    startOver.append(p);
    play = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
        random = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess} `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        lowOrHigh.innerHTML = "";
        playGame = true;
    });
}
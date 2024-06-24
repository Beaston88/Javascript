let randomNumber = Math.floor(Math.random() * 100 + 1);
const submit = document.querySelector('#submitField');
const userInput = document.querySelector('#guessField');
const guessSLot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');
const startOver = document.querySelector('.resultPass');
const p = document.createElement('p');

let prevGuess = [];
let numGuesses = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number");
    }
    else if(guess<1){
        alert("Please enter a number greater than 1");
    }
    else if(guess>100){
        alert("Please enter a number less than or equal to 100");
    }
    else{
        prevGuess.push(guess);
        if(numGuesses === 11){
            displayGuess(guess);
            displayMessage(`Game Over ^.^ !! \n Random Number was ${randomNumber}`);
            endGame();
        }else{
            displayGuess(guess)
            checkGuess(guess);
        }
    }
    
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right`);
        endGame();
    }
    else if (guess < randomNumber){
        displayMessage(`Number is too low`);
    }
    else{
        displayMessage(`Number is too high`);
    }
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function displayGuess(guess){
    userInput.value = '';
    guessSLot.innerHTML += `${guess} `;
    numGuesses++;
    remaining.innerText = `${10-numGuesses}`;
}

function endGame(){
    userInput = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button')
    p.innerHTML = '<h2 class="nGame">Start New Game</h2>';
    startOver.appendChild('p');
    playGame = false;;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('.newGame')
    newGameButton.addEventListener('click',function(e){
        randomNumber = Math.floor(Math.random() * 100 + 1);
        prevGuess = []
        numGuesses = 1
        guessSLot.innerHTML = ''
        remaining.innerHTML = `${11-numGuesses}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}


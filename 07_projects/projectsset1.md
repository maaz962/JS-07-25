# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1 - Color Changer

```javascript
console.log("Maaz")

const buttons = document.querySelectorAll('.button');
// console.log(buttons);
// ab hmy nodelist mili hy to hm forEach lga sakty hn.
const body = document.querySelector('body');
//event ko hm function me ly sakty hn or usme kuch activities perform krsakty hn.
buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    //e : mouse click event hy , or b event hn isme.
    //e.target: event a kaha sy rha hy.
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }

    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }

    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }

    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});


```

## project-2: BMI Generator Solution
```javascript

// pehla problem hm solve kry gy k input ky andr sy values kesy nikalni hy: wo event ky through he nikaly gy.
//hmy sb sy pehly form ko select krna pry ga keu k isme submit event hoga, calculate aik submit event hy.
//form jb b submit hota hy to ya to post type sy hota hy ya get type sy,lekin jb b submit hota hy uski values URL me ya SERVER ky pas chali jati hn,usy hmko rokna pary ga,
// value hmy string me mily gi pr hm usy int me parse krdy gy.
// jesy he ap click krty hn ap chahty hn values hmary pas ajaye, hm us event pr values chahty hn,
const form = document.querySelector('form');
//this usecase will give you empty value.
//const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result;
    results.innerHTML = `<span>${bmi}</span>`;
  }
});

```

## project-2.1: Extended Solution
```javascript
// pehla problem hm solve kry gy k input ky andr sy values kesy nikalni hy: wo event ky through he nikaly gy.
//hmy sb sy pehly form ko select krna pry ga keu k isme submit event hoga, calculate aik submit event hy.
//form jb b submit hota hy to ya to post type sy hota hy ya get type sy,lekin jb b submit hota hy uski values URL me ya SERVER ky pas chali jati hn,usy hmko rokna pary ga,
// value hmy string me mily gi pr hm usy int me parse krdy gy.
// jesy he ap click krty hn ap chahty hn values hmary pas ajaye, hm us event pr values chahty hn,
const form = document.querySelector('form');
//this usecase will give you empty value.
//const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  }

  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  //Category detection:
  let message = '';
  if (bmi < 18.6) {
    message = `Underweight: Your BMI is ${bmi}`;
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    message = `Normal: Your BMI is ${bmi}`;
  } else {
    message = `Overweight: Your BMI is ${bmi}`;
  }
  //show the result;
  results.innerHTML = `<span>${message}</span>`;
});
```

## project-3: Digital Clock Solution
```javascript
const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  //console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);


```

## project-3: Guess the Number Solution
```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    //console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  // aik mjy guess do me usy validate krdu ga. ye dekhny ky liye jo usny number guess kia hy wo koi alphabet to nai hy na, valid hy ya nai(e.g:number), wo value 1 sy less ya 100 sy ziada to nai dy rha.
  //ye bohat use hoga validateGuess function , datbase me, email ya number ko dekhny ky liye.
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number more than 1');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random num was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess();
    }
  }
}

function checkGuess(guess) {
  // validate sy validation mila hy, koi message print nai kia usny, isme hm print krwaye gy.
  //value random num ky equal hy? agr jeet gaye to bolo , low ya high hy to ye b btao.
  if (guess === randomNumber) {
    displayMessage('You Guessed it right');
    endGame();
  } else if (guess < randomNumber) {
    displayMessage('Number is too low');
  } else if (guess < randomNumber) {
    displayMessage('Number is too high');
  }
}

function displayGuess(guess) {
  //Values ko clean kry gy, guess or remianing guess ko update kry ga.
  userInput.value = '';
  guessSlot.innerHTML += `${guess},`;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  // msg dispplay krdy gy, input ki value khali krdy gy, or remaining numbers ko kam krdy gy, or innerHTML change krdy gy,
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = '<h2 id="newGame">Start new Game</h2>';
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}


```
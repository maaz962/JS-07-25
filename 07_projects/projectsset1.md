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
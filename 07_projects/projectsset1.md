# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

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
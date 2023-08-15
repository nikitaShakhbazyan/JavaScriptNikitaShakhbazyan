
const container = document.querySelector('.container')
const apiUrl = 'https://dummyjson.com/products';


let dataVariable ;

fetch(apiUrl)
.then(response => (response.json()))
.then(data => {
  console.log(data.products);
  dataVariable = data
})
.catch(error => {
  console.error(error);
});

console.log(apiUrl)


// const htmlCode = `<div>${apiUrl}</div>`;
// container.innerHTML = htmlCode;

setTimeout(() => {
  container.textContent = 'hey!!!'
}, 5000);
container.style.color = 'Red'




// function guessNumber() {
//   const counts = 3;
//   let attempts = 0;

//   const random = Math.floor(Math.random() * 10) + 1;

//   let number = parseInt(prompt('Guess a number from 1 to 10: '));

//   while (number !== random && attempts < counts) {
//     number = parseInt(prompt('Guess a number from 1 to 10: '));
//     attempts++;
//   }

//   if (number === random) {
//     console.log('You guessed the correct number.');
//   } else {
//     console.log('Game over');
//   }
//   console.log(random )
// }

// guessNumber();

// function guessNumber1() {
//   const counts = 4;
//   let attempts = 0;
//   const randomNumber = Math.floor(Math.random() * 100) + 1;
//   let number = parseInt(prompt('Guess a number from 1 to 100'));

//   while (number !== randomNumber && attempts < counts) {
//     if (number < randomNumber) {
//       alert('guessed number is more');
//     } else {
//       alert('guessed number is less');
//     }
//     attempts++;
//     number = parseInt(prompt('Guess a number from 1 to 100'));
//   }

//   if (number === randomNumber) {
//     alert('You guessed the correct number');
//   } else {
//     alert('Out of attempts. The correct number was: ' + randomNumber);
//   }
// }

// guessNumber1();


// console.log(randomNumber)



fetch('https://restcountries.com/v3.1/name/united')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });


  
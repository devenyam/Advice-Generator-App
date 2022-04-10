'use strict';

const dice = document.querySelector('.dice');
const adviceID = document.querySelector('.advice-id');
const advice = document.querySelector('.advice');
const container = document.querySelector('.container');

const API_URL = `https://api.adviceslip.com/advice`;

// USING ES6 FETCH API METHOD -- FETCH

dice.addEventListener('click', function () {
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      const { id, advice: api_advice } = data.slip;

      renderAdvice(data);
    })
    .catch((err) => {
      container.innerHTML = `<h3>${err.message} data. Check your internet connection and try again</h3>`;
      container.classList.add('error');
    });
});

function renderAdvice(data) {
  adviceID.textContent = `Advice #${data.slip.id}`;
  advice.textContent = data.slip.advice;
}

//////////////////////////////////////////////////////
// USING THE OLD AJAX METHOD -- XMLHttpRequest

// document.addEventListener('DOMContentLoaded', function () {
//   dice.addEventListener('click', API_Request);
// });

// function API_Request() {
//   const request = new XMLHttpRequest();
//   request.open('GET', API_URL);
//   request.send();
//   request.addEventListener('load', renderAdvice);
// }

// function renderAdvice() {
//   const requestSlip = JSON.parse(this.responseText);

//   if (this.status === 200) {
//     const {
//       slip: { id, advice: api_advice },
//     } = requestSlip;

//     console.log(api_advice);

//     adviceID.textContent = `Advice #${id}`;
//     advice.textContent = api_advice;
//   }
// }

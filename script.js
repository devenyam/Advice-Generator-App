'use strict';

const dice = document.querySelector('.dice');
const adviceNumber = document.querySelector('.advice-number');
const advice = document.querySelector('.advice');

const adviceAPI = [
  `It is easy to sit up and take notice, what's difficult is getting up and taking action`,
  `If your dreams don’t scare you, they are not big enough`,
  `It is better to aim high and miss than aim low and hit`,
  `Look up at the stars and not down at your feet. Try to make sense of what you see, and wonder about what makes the universe exist. Be curious`,
  `You are the average of the five people you spend the most time with`,
  `Failure is another steppingstone to greatness.`,
  `The quieter you become, the more you are able to hear`,
  `Surround yourself with positive people`,
  `If you want to fly, you have to give up the things that weigh you down`,
  `It's going to be hard, but hard doesn't make it impossible`,
  `If you don't like where you are, move. You are not a tree`,
  `If you fell down yesterday, stand up today`,
  `Failure is the opportunity to begin again more intelligently`,
  `Keep yours eyes on the stars, and your feet on the ground`,
  `One step at a time is good walking`,
  `Push harder than yesterday if you want a different tomorrow`,
  `Believe in yourself`,
  `If you change the way you look at things, the things you look at change`,
  `In the middle of difficulty lies opportunity`,
  `Every accomplishment starts with decision to try`,
  `Good things come to those who work for it`,
  `The only way to do great work is to love what you do`,
  `Victory is sweetest when you've known defeat`,
];

dice.addEventListener('click', toggleAdvice);

function toggleAdvice() {
  // generate random number to select advice from advice array randomly
  const randomize = Math.floor(Math.random() * adviceAPI.length);

  // update advice counter
  adviceNumber.innerText = `Advice #${randomize + 1}`;

  //return the advice to the DOM
  return (advice.innerText = `${adviceAPI[randomize]}`);
}

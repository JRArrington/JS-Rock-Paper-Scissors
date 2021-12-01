'use strict';

const options = ['Rock', 'Paper', 'Scissors'];

function randomItem() {
  let random = options[Math.floor(Math.random()*options.length)];
  return random;
}

function computerPlay() {
  return randomItem();

}

console.log(computerPlay());
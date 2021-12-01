'use strict';

const options = ['rock', 'paper', 'scissors'];

function randomItem() {
  let random = options[Math.floor(Math.random()*options.length)];
  return random;
}

function computerPlay() {
  return randomItem();

}

function humanPlay() {
  let choice = prompt("Select: 'rock', 'paper', or 'scissors' ").toLowerCase();
  return choice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'rock') {
    if (computerSelection === 'rock') {
      console.log(`Draw! You both played ${playerSelection}`);
    }
  }
}

playRound(humanPlay(), computerPlay());
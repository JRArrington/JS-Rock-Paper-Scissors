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
    } else if (computerSelection === 'paper') {
      console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    } else {
      console.log(`You Win!!! ${playerSelection} beats ${computerSelection}`);
    }
  }
}

playRound(humanPlay(), computerPlay());
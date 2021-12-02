'use strict';

let rounds;
let score = 0;

function increaseScore() {
  score += 1;
  return score;
}

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
      increaseScore();
      console.log(`You Win!!! ${playerSelection} beats ${computerSelection}`);
    }
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      increaseScore();
      console.log(`You Win!!! ${playerSelection} beats ${computerSelection}`);
    } else if (computerSelection === 'paper') {
      console.log(`Draw! You both played ${playerSelection}`);
    } else {
      console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    }
  } else if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    } else if (computerSelection === 'paper') {
      increaseScore();
      console.log(`You Win!!! ${playerSelection} beats ${computerSelection}`);
    } else {
      console.log(`Draw! You both played ${playerSelection}`);
    }
  }
}

function game() {
  for(let rounds = 1; rounds <= 5; rounds++) {
    playRound(humanPlay(), computerPlay());
  }
  console.log(`You won ${score} rounds`);
}

game();
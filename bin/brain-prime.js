#!/usr/bin/env node
import readlineSync from 'readline-sync';
import game from '../src/cli.js';
import checkAnswer from '../src/checkAnswer.js';

const isPrime = (number) => {
  if (number <= 1) return false;
  // eslint-disable-next-line no-plusplus
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
};

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

const playGame = () => {
  const name = game();
  console.log(
    'Answer "yes" if given number is prime. Otherwise answer "no".',
  );
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 3; i++) {
    const number = getRandomIntInclusive(1, 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ').toLowerCase();

    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    if (!checkAnswer(answer, correctAnswer, name)) {
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

playGame();

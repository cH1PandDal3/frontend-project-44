#!/usr/bin/env node
import readlineSync from 'readline-sync';
import game from '../src/cli.js';
import checkAnswer from '../src/checkAnswer.js';

const isEvenGame = () => {
  const name = game();
  let sum = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  do {
    const getRandomInt = () => Math.floor(Math.random() * 100) + 1;
    const isEven = (num) => num % 2 === 0;
    const getRandomNum = getRandomInt();

    console.log(`Question: ${getRandomNum}`);

    const correctAnswer = isEven(getRandomNum) ? 'yes' : 'no';
    const firstAnswer = readlineSync.question('Your answer is: ');
    if (checkAnswer(firstAnswer.toLowerCase(), correctAnswer, name)) {
      sum += 1;
    } else {
      return;
    }
  } while (sum < 3);
  if (sum === 3) {
    console.log(`Congratulations, ${name}`);
  }
};

isEvenGame();

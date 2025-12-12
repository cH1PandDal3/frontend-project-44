#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { randomInt } from 'crypto';
import game from '../src/cli.js';
import checkAnswer from '../src/checkAnswer.js';

const gcd = (a, b) => {
  while (b) {
    // eslint-disable-next-line no-param-reassign
    [a, b] = [b, a % b];
  }
  return a;
};
const main = () => {
  const name = game();
  console.log('Find the greatest common divisor of given numbers.');
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 3; i++) {
    const num1 = randomInt(1, 100);
    const num2 = randomInt(1, 100);
    console.log(`Question: ${num1} ${num2}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = gcd(num1, num2).toString();

    // Используем checkAnswer для проверки
    if (!checkAnswer(userAnswer, correctAnswer, name)) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
main();

#!/usr/bin/env node
import readlineSync from 'readline-sync';
import game from '../src/cli.js';

const name = game();

console.log('What is the result of the expression?');

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

const generateExpression = () => {
  const getRandomInt1 = getRandomIntInclusive(1, 50);
  const getRandomInt2 = getRandomIntInclusive(1, 50);
  const operations = ['+', '-', '*'];
  const operation = operations[Math.floor(Math.random() * operations.length)];

  return [getRandomInt1, getRandomInt2, operation];
};

const calculateExpression = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const calcGame = () => {
  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const [num1, num2, operation] = generateExpression();
    const correctAnswer = calculateExpression(num1, num2, operation);
    const expression = `${num1} ${operation} ${num2}`;
    console.log(`Question: ${expression}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (parseInt(userAnswer, 10) === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`Incorrect! The correct answer was ${correctAnswer}.`);
    }
  }

  console.log(
    `Congratulations, ${name}! You've answered 3 questions correctly.`,
  );
};

calcGame();

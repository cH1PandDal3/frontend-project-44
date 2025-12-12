#!/usr/bin/env node
import readlineSync from 'readline-sync';
import game from '../src/cli.js';

const checkAnswer = (answer, hiddenValue, name) => {
  if (Number(answer) === hiddenValue) {
    console.log('Correct!');
    return true;
  }
  console.log(
    `'${answer}' is wrong answer ;(. Correct answer was '${hiddenValue}'.`,
  );
  console.log(`Let's try again, ${name}!`);
  return false;
};

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
    const userAnswer = readlineSync.question('Your answer:');

    if (checkAnswer(userAnswer, correctAnswer, name)) {
      correctAnswersCount += 1;
    } else {
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

calcGame();

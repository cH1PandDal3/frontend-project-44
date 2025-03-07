#!/usr/bin/env node
import readlineSync from 'readline-sync';
import game from '../src/cli.js';

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

const generateProgression = () => {
  const length = getRandomIntInclusive(5, 10);
  const start = getRandomIntInclusive(0, 9);
  const step = getRandomIntInclusive(1, 5);
  const progression = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step);
  }
  return progression;
};

const getProgressionWithHiddenElement = (progression) => {
  const hiddenIndex = Math.floor(Math.random() * progression.length);
  const hiddenValue = progression[hiddenIndex];
  // eslint-disable-next-line no-param-reassign
  progression[hiddenIndex] = '..';

  return { progression, hiddenValue };
};

const playGame = () => {
  const name = game();

  let correctAnswersCount = 0;
  const maxCorrectAnswers = 5;

  while (correctAnswersCount < maxCorrectAnswers) {
    const prog = generateProgression();
    const { progression: hiddenProgression, hiddenValue } = getProgressionWithHiddenElement(prog);
    console.log(`Question: ${hiddenProgression.join(' ')}`);
    const answer = parseInt(readlineSync.question('Your answer: '), 10);

    if (answer === hiddenValue) {
      console.log('Correct!');
      // eslint-disable-next-line no-plusplus
      correctAnswersCount++;
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${hiddenValue}'.`,
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

playGame();

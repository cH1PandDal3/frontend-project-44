#!/usr/bin/env node
import readlineSync from 'readline-sync';

const generateProgression = () => {
  const length = Math.floor(Math.random() * 6) + 5;
  const start = Math.floor(Math.random() * 10);
  const step = Math.floor(Math.random() * 5) + 1;
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
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

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

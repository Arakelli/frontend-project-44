import runGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const description = 'What number is missing in the progression?';

const getArithmeticProgression = (length, start, step) => {
  const progression = [];
  for (let i = start; progression.length < length; i += step) {
    progression.push(i);
  }
  return progression;
};

const getData = () => {
  const length = getRandomNumber(5, 10);
  const start = getRandomNumber(0, 100);
  const step = getRandomNumber(1, 10);
  const progression = getArithmeticProgression(length, start, step);
  const randomIndex = getRandomNumber(0, progression.length);
  const answer = progression[randomIndex].toString();
  progression[randomIndex] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

const startProgressionGame = () => runGame(getData, description);

export default startProgressionGame;

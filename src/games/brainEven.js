import runGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0 ? 'yes' : 'no';

const getData = () => {
  const question = getRandomNumber(0, 100);
  const answerRigth = isEven(question);

  return [question, answerRigth];
};

const startEvenGame = () => runGame(getData, description);

export default startEvenGame;

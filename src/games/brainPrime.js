import runGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};

const getData = () => {
  const question = getRandomNumber(2, 100);
  const answerRigth = isPrime(question);

  return [question, answerRigth];
};

const startPrimeGame = () => runGame(getData, description);

export default startPrimeGame;

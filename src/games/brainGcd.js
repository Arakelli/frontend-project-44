import runGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const description = 'Find the greatest common divisor of given numbers.';

const calculate = (num1, num2) => (num2 === 0 ? num1 : calculate(num2, num1 % num2));

const getData = () => {
  const number1 = getRandomNumber(0, 100);
  const number2 = getRandomNumber(0, 100);
  const question = `${number1} ${number2}`;
  const answer = calculate(number1, number2).toString();

  return [question, answer];
};

const startGCDGame = () => runGame(getData, description);

export default startGCDGame;

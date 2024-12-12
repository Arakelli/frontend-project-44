import runGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculate = (num1, num2, symbol) => {
  switch (symbol) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`There is no such operator like '${symbol}'`);
  }
};

const getData = () => {
  const number1 = getRandomNumber(0, 100);
  const number2 = getRandomNumber(0, 100);
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${number1} ${operator} ${number2}`;
  const answerRigth = calculate(number1, number2, operator).toString();

  return [question, answerRigth];
};

const startCalcGame = () => runGame(getData, description);

export default startCalcGame;

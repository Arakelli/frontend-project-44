import mainEngine from '../index.js';
import randomIntFromInterval from '../getRandomNumber.js';

const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];
const randomIndex = (data) => Math.floor(Math.random() * data.length);

const isCalc = (num1, num2, symbol) => {
  switch (symbol) {
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

const getData = () => {
  const number1 = randomIntFromInterval(0, 100);
  const number2 = randomIntFromInterval(0, 100);
  const operator = operators[randomIndex(operators)];
  const question = `${number1} ${operator} ${number2}`;
  const questionRigth = isCalc(number1, number2, operator).toString();

  return [question, questionRigth];
};

const startCalcGame = () => mainEngine(getData, description);

export default startCalcGame;

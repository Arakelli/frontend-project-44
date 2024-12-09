import mainEngine from '../index.js';
import randomIntFromInterval from '../getRandomNumber.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const getData = () => {
  const question = randomIntFromInterval(0, 100);
  const questionRigth = isEven(question);

  return [question, questionRigth];
};

const startEvenGame = () => mainEngine(getData, description);

export default startEvenGame;

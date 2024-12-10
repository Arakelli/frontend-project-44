import readlineSync from 'readline-sync';

const mainEngine = (getData, description) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(description);

  const roundCounts = 3;

  for (let i = 1; i <= roundCounts; i += 1) {
    const [question, questionRigth] = getData();

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('You answer: ');

    if (questionRigth === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${questionRigth}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default mainEngine;

import readlineSync from 'readline-sync';

const runGame = (getData, description) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(description);

  const roundCounts = 3;

  for (let i = 1; i <= roundCounts; i += 1) {
    const [question, answerRigth] = getData();

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('You answer: ');

    if (answerRigth !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answerRigth}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGame;

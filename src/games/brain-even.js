import readlineSync from 'readline-sync';

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const isEven = (num) => num % 2 === 0 ? 'yes' : 'no';

const startEven = () => {
    console.log('Welcome to the Brain Games!');
    let name = readlineSync.question('May I have your name? ')
    console.log(`Hello, ${name}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    const roundCounts = 3;

    for (let i = 1; i <= roundCounts; i += 1) {
        const randomNumber = randomIntFromInterval(0, 100);
        const questionRigth = isEven(randomNumber);

        console.log(`Question: ${randomNumber}`);
        const answer = readlineSync.question('You answer: ');

        if (questionRigth === answer) {
            console.log('Correct!');
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${questionRigth}'`);
            console.log(`Let's try again ${name}`);
            return;
        }
    }

    console.log(`Congratulations, ${name}`);
};

export default startEven;
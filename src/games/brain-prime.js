import mainEngine from "../index.js";
import randomIntFromInterval from "../getRandomNumber.js";

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
    const question = randomIntFromInterval(2, 100);
    const questionRigth = isPrime(question);

    return [question, questionRigth];
};

const startPrimeGame = () => mainEngine(getData, description);

export default startPrimeGame;
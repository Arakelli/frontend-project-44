import mainEngine from "../index.js";
import randomIntFromInterval from "../getRandomNumber.js";

const description = 'What number is missing in the progression?';

const getArithmeticProgression = (length, start, step) => {
    let progression = [];
    for (let i = start; progression.length < length; i += step) {
        progression.push(i);
    }
    return progression;
};

const getRandomIndex = (data) => Math.floor(Math.random() * data.length);

const getData = () => {
    const length = randomIntFromInterval(5, 10);
    const start = randomIntFromInterval(0, 100);
    const step = randomIntFromInterval(1, 10);
    const progression = getArithmeticProgression(length, start, step);
    const randomIndex = getRandomIndex(progression);
    const questionRigth = progression[randomIndex].toString();
    progression[randomIndex] = '..';
    const question = progression.join(' ');

    return [question, questionRigth];
};

const startProgressionGame = () => mainEngine(getData, description);

export default startProgressionGame;
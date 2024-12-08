import mainEngine from "../index.js";
import randomIntFromInterval from "../getRandomNumber.js";

const description = "Find the greatest common divisor of given numbers.";

const isCalc = (num1, num2) => {
    return num2 === 0 ? num1 : isCalc(num2, num1 % num2);
}

const getData = () => {
    const number1 = randomIntFromInterval(0, 100);
    const number2 = randomIntFromInterval(0, 100);
    const question = `${number1} ${number2}`;
    const questionRigth = isCalc(number1, number2).toString();

    return [question, questionRigth];
}

const startGCDGame = () => mainEngine(getData, description);

export default startGCDGame;
import mainEngine from "../index.js";
import randomIntFromInterval from "../getRandomNumber.js";

const isCalc = (num1, num2, method) => {
    switch (method) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
    }
};

const description = 'What is the result of the expression?';

const getData = () => {
    const question = randomIntFromInterval(0, 100);
    const questionRigth = isCalc(question);

    return [question, questionRigth];
}

const startCalcGame = () => mainEngine(getData, description);

export default startCalcGame;
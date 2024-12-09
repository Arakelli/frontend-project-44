import readlineSync from 'readline-sync';

export const helloGuest = () => {
    console.log('Welcome to the Brain Games!');
    let name = readlineSync.question('May I have your name? ')
    console.log(`Hello, ${name}!`);
};

export default helloGuest;
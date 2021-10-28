#!/usr/bin/env node
import readlineSync from 'readline-sync';

// Функция для создания рандомного числа от 0 до 100 для вопроса
const getQuestionNumRandom = () => {
  const MAX = 100;
  return Math.floor(Math.random() * MAX);
};

// Функция для генерации верного ответа на вопрос
const getCorrectAnswer = (num) => (num % 2 === 0 ? 'yes' : 'no');

// Функция для проверки ответа игрока (если ответ правильный: true, иначе false
const checkAnswer = (answer, num) => getCorrectAnswer(num).toLowerCase() === answer.toLowerCase();

// Начало игры
console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');

console.log(`Hello, ${userName}!\nAnswer "yes" if the number is even, otherwise answer "no".`);

let i = 0;
const amountAnswers = 3;
let isCorrect = true;
let answer;
let num;

do {
  num = getQuestionNumRandom();
  console.log(`Question: ${num}`);
  answer = readlineSync.question('Your answer: ');
  isCorrect = checkAnswer(answer, num);
  if (isCorrect) console.log('Correct!');
  i += 1;
} while (i < amountAnswers && isCorrect);

const notification = (i === amountAnswers && isCorrect) ? `Congratulations, ${userName}!`
  : `"${answer}" is wrong answer ;(. Correct answer was "${getCorrectAnswer(num)}".\nLet's try again, ${userName}!`;

console.log(notification);

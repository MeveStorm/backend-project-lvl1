import readlineSync from 'readline-sync';

// Приветствие и узнавание имени
const showGreetingAndGetUsername = () => {
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

// Показ правил игры
const showGameDescription = (description) => console.log(description);

// Показ вопроса и получение ответа от пользователя
const showQuestionsAndGetAnswer = (question) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');

  return answer.toString();
};

const checkAnswer = (answer, trueAnswer) => answer.toLowerCase() === trueAnswer.toLowerCase();

const game = (gameDescription, generateQuestion) => {
  const userName = showGreetingAndGetUsername();
  showGameDescription(gameDescription);

  let step = 0;
  let isCorrect;
  let question;
  let answer;
  let trueAnswer;
  const STEPS = 3;

  do {
    [question, trueAnswer] = generateQuestion();
    answer = showQuestionsAndGetAnswer(question);
    isCorrect = checkAnswer(answer, trueAnswer);
    if (isCorrect) console.log('Correct!');
    step += 1;
  } while (step < STEPS && isCorrect);

  const notification = (step === STEPS && isCorrect)
    ? `Congratulations, ${userName}!`
    : `"${answer}" is wrong answer ;(. Correct answer was "${trueAnswer}".\nLet's try again, ${userName}!`;

  console.log(notification);
};

export default game;

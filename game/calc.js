import { random, randomTwoNumbers } from '../src/random.js';

const getDescription = () => 'What is the result of the expression?';

// Рандомный выбор знака
const getSign = () => {
  const signs = '*+-';
  return signs[random(signs.length)];
};

// Расчет правильного ответа
const getAnswer = (firstValue, secondValue, sign) => {
  let result;
  if (sign === '*') result = firstValue * secondValue;
  if (sign === '+') result = firstValue + secondValue;
  if (sign === '-') result = firstValue - secondValue;
  return result;
};

// Интерфейс для взаимодейтсвия с игрой. Создание списка вопросов
// Создание пары [Вопрос, Ответ]
const getQuestion = () => {
  const MAX_VALUE = 100;
  const [firstValue, secondValue] = randomTwoNumbers(MAX_VALUE);
  const sign = getSign();
  const question = `${firstValue} ${sign} ${secondValue}`;
  const trueAnswer = getAnswer(firstValue, secondValue, sign).toString();
  return [question, trueAnswer];
};

export { getQuestion, getDescription };

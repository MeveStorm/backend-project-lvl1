import gcd from 'greatest-common-divisor';
import { randomTwoNumbers } from '../src/random.js';

const getDescription = () => 'Find the greatest common divisor of given numbers.';

// Расчет правильного ответа
const getAnswer = (firstValue, secondValue) => gcd(firstValue, secondValue);

// Интерфейс для взаимодейтсвия с игрой. Создание списка вопросов
// Создание пары [Вопрос, Ответ]
const getQuestion = () => {
  const MAX_VALUE = 100;
  const [firstValue, secondValue] = randomTwoNumbers(MAX_VALUE);
  const question = `${firstValue} ${secondValue}`;
  const trueAnswer = getAnswer(firstValue, secondValue).toString();
  return [question, trueAnswer];
};

export { getDescription, getQuestion };

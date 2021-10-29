import isPrime from 'is-prime-number';
import { random } from '../src/random.js';

const getDescription = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

// Расчет правильного ответа
const getAnswer = (value) => (isPrime(value) ? 'yes' : 'no');

// Интерфейс для взаимодейтсвия с игрой. Создание списка вопросов
// Создание пары [Вопрос, Ответ]
const getQuestion = () => {
  const MAX = 20;
  const value = random(MAX);
  const question = `${value}`;
  const trueAnswer = getAnswer(value);
  return [question, trueAnswer];
};

export { getDescription, getQuestion };

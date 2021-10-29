import { random, progressionRandom } from '../src/random.js';

const getDescription = () => 'What number is missing in the progression?';

// Интерфейс для взаимодейтсвия с игрой. Создание списка вопросов
// Создание пары [Вопрос, Ответ]
const getQuestion = () => {
  const NUMBER = 10;
  const indexPrivateNumber = random(NUMBER);
  const separator = ' ';
  const maskPrivateNumber = '..';
  const progression = progressionRandom(NUMBER);

  const trueQuestions = progression[indexPrivateNumber];
  progression[indexPrivateNumber] = maskPrivateNumber;
  const question = progression.join(separator);

  return [question, trueQuestions.toString()];
};

export { getDescription, getQuestion };

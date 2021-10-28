const getDescription = () => 'What is the result of the expression?';

const random = (maxNumRandom) => Math.floor(Math.random() * maxNumRandom);

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
  const firstValue = random(MAX_VALUE);
  const secondValue = random(MAX_VALUE);
  const sign = getSign();
  const question = `${firstValue} ${sign} ${secondValue}`;
  const trueAnswer = getAnswer(firstValue, secondValue, sign).toString();
  return [question, trueAnswer];
};

export { getQuestion, getDescription };

import arange from 'a-range';

const random = (max) => Math.floor(Math.random() * max);
const randomTwoNumbers = (max) => [random(max), random(max)];
const randomFromRange = (min, max) => Math.floor((Math.random() * max) + min);
const progressionRandom = (number) => {
  const MAX_START = 50;
  const [MIN_STEP, MAX_STEP] = [1, 5];

  const start = random(MAX_START);
  const step = randomFromRange(MIN_STEP, MAX_STEP);
  const end = number * step + start;

  return arange(start, end, step);
};

export {
  random, randomTwoNumbers, randomFromRange, progressionRandom,
};

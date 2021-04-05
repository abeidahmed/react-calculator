import Big from 'big.js';

const dotCounter = (number) => (number.toString().match(/\./g) || []).length;

export default function operate(num1, num2, operation) {
  let result = new Big(0);
  if (dotCounter(num1) > 1 || dotCounter(num2) > 1) {
    result = 'It is not a number';
    return result;
  }

  const numberOne = new Big(num1);
  let numberTwo;
  let temp = false;

  if (num2) numberTwo = new Big(num2);

  switch (operation) {
    case '+':
      result = numberOne.plus(numberTwo);
      break;
    case '-':
      result = numberOne.minus(numberTwo);
      break;
    case 'x':
      result = numberOne.times(numberTwo);
      break;
    case '÷':
      if (num1 === '0' || num2 === '0') temp = true;
      result = temp ? 'Cannot divide number with 0' : numberOne.div(numberTwo);
      break;
    case '%':
      result = numberOne.times('0.01');
      break;
    default:
  }
  return result.toString();
}

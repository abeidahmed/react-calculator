import Big from 'big.js';

const operate = (num1, num2, operation) => {
  let result = new Big(0);
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
    case 'X':
      result = numberOne.times(numberTwo);
      break;
    case '÷':
      if (num1 === '0' || num2 === '0') temp = true;
      result = temp
        ? 'number cannot be divided by 0'
        : numberOne.div(numberTwo);
      break;
    case '%':
      result = numberOne.times('0.01');
      break;
    default:
  }

  return result.toString();
};

export default operate;

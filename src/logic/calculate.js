/* eslint-disable no-param-reassign */
import operate from './operate';

const calculate = (dataObject, btnName) => {
  const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const operations = ['+', '-', '÷', 'X'];

  if (nums.includes(btnName) && !dataObject.next === null) {
    dataObject.next = btnName;
  } else if (btnName === '.' && dataObject.operation === null) {
    dataObject.next += btnName;
  } else if (
    btnName === '.'
    && dataObject.total === null
    && dataObject.next === null
  ) {
    return '';
  } else if (
    nums.includes(btnName)
    && dataObject.operation === null
    && dataObject.next
  ) {
    dataObject.next += btnName;
  } else if (operations.includes(btnName)) {
    dataObject.operation = btnName;
    if (dataObject.next && dataObject.total) {
      dataObject.next = dataObject.total;
      dataObject.total = null;
    }
  } else if (
    dataObject.next
    && dataObject.operation
    && nums.includes(btnName)
    && !dataObject.total
  ) {
    dataObject.total = btnName;
  } else if (btnName === '.' && dataObject.operation) {
    dataObject.total += btnName;
  } else if (
    nums.includes(btnName)
    && dataObject.operation
    && dataObject.total
  ) {
    dataObject.total += btnName;
  }

  if (btnName === '=') {
    if (
      !dataObject.total
      && dataObject.obj.total === null
      && !dataObject.next
      && dataObject.obj.next === null
    ) {
      dataObject.total = null;
      dataObject.next = null;
      return '';
    }
    if (dataObject.total !== null || dataObject.next !== null) {
      dataObject.total = operate(
        dataObject.next,
        dataObject.total,
        dataObject.operation,
      );
    }
    dataObject.operation = '=';
  } else if (btnName === 'AC') {
    dataObject.total = null;
    dataObject.next = null;
    dataObject.operation = null;
  } else if (btnName === '+/-') {
    if (dataObject.next) {
      dataObject.total *= -1;
      dataObject.total = dataObject.total.toString();
    } else if (!dataObject.total) {
      dataObject.next *= -1;
      dataObject.next = dataObject.next.toString();
    }
  } else if (btnName === '%') {
    dataObject.operation = btnName;
    dataObject.total = operate(dataObject.next, null, dataObject.operation);
  }
  return dataObject;
};

export default calculate;
/* eslint-enable no-param-reassign */

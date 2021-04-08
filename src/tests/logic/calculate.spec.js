import calculate from '../../logic/calculate';

const data = {
  total: null,
  next: null,
  operation: null,
};

describe('calculate', () => {
  it('returns null object if button is AC', () => {
    const newData = calculate(data, 'AC');

    expect(newData).toEqual(data);
  });

  it('returns valid object when button is - and opeation is null', () => {
    const newData = calculate(data, '-');

    expect(newData).toEqual({ next: '0-', operation: '-' });
  });

  it('returns null object when operation ends with n', () => {
    const newData = calculate(
      {
        total: null,
        next: null,
        operation: 'n',
      },
      '-',
    );

    expect(newData).toEqual({ next: null, operation: null });
  });

  it('returns empty object if only next is passed', () => {
    const newData = calculate({ next: '4.' }, '.');

    expect(newData).toEqual({});
  });

  it('button +/- toggles number from positive to negative', () => {
    const newData = calculate({ next: '-4', total: '-4' }, '+/-');

    expect(newData).toEqual({ total: '4', next: '4' });
  });

  it('returns -0 if +/- is performed when no number is present on the total', () => {
    const newData = calculate(data, '+/-');

    expect(newData).toEqual({ next: '-0' });
  });

  it('adds the numbers correctly', () => {
    const newData = calculate(
      { next: '8+8', operation: '+', total: null },
      '=',
    );

    expect(newData).toEqual({ next: '16', operation: null, total: '16' });
  });

  it('subtracts the numbers correctly', () => {
    const newData = calculate(
      { next: '16-8', operation: '-', total: null },
      '=',
    );

    expect(newData).toEqual({ next: '8', operation: null, total: '8' });
  });

  it('multiplies the numbers correctly', () => {
    const newData = calculate(
      { next: '8x8', operation: 'x', total: null },
      '=',
    );

    expect(newData).toEqual({ next: '64', operation: null, total: '64' });
  });

  it('divides the numbers correctly', () => {
    const newData = calculate(
      { next: '8÷8', operation: '÷', total: null },
      '=',
    );

    expect(newData).toEqual({ next: '1', operation: null, total: '1' });
  });

  it('percentage operator works correctly', () => {
    const newData = calculate(
      { next: '8%4', operation: '%', total: null },
      '=',
    );

    expect(newData).toEqual({ next: '0.08', operation: null, total: '0.08' });
  });

  it('returns error if number is divided by 0', () => {
    const newData = calculate(
      { next: '8÷0', operation: '÷', total: null },
      '=',
    );

    expect(newData).toEqual({
      next: 'Cannot divide number with 0',
      operation: null,
      total: 'Cannot divide number with 0',
    });
  });

  it('returns error if number is invalid', () => {
    const newData = calculate(
      { next: '8+3.3.3', operation: '+', total: null },
      '=',
    );

    expect(newData).toEqual({
      next: 'It is not a number',
      operation: null,
      total: 'It is not a number',
    });
  });
});

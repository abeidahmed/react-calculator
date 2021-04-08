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

  it('returns valid object when button is %', () => {
    const newData = calculate(data, '%');

    expect(newData).toEqual({ next: '0%', operation: '%' });
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
});

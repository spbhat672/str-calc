import { addNumbers } from '../calculator';

describe('addNumbers (String Calculator)', () => {
  test('empty string returns 0', () => {
    expect(addNumbers('')).toBe(0);
  });

  test('single number returns that number', () => {
    expect(addNumbers('"1",')).toBe(1);
  });

  test('two comma-separated numbers are summed', () => {
    expect(addNumbers('“1,5”,')).toBe(6);
  });

  test('handles newlines and commas together', () => {
    expect(addNumbers('1\n2,3')).toBe(6);
  });

  test('custom single delimiter declared with //DELIM\\n', () => {
    expect(addNumbers('//;\\n1;2')).toBe(3);
  });

  test('throws when negatives are present and lists them in the message', () => {
    expect(() => addNumbers('-1,2,-5')).toThrow(/Negative numbers not allowed:/i);
  });

  test('multi-digit numbers are parsed correctly', () => {
    expect(addNumbers('12,34')).toBe(46);
  });
});

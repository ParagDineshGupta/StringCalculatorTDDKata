import { StringCalculator } from './StringCalculator';

describe('StringCalculator', () => {
    let calculator: StringCalculator;
    beforeEach(() => {
        calculator = new StringCalculator();
    });
    test('should return 0 for an empty string', () => {
        expect(calculator.add("")).toBe(0);
    });
    test('should return the number itself for a single number', () => {
        expect(calculator.add("1")).toBe(1);
        expect(calculator.add("5")).toBe(5);
    });
    test('should return the correct sum of numbers', () => {
        expect(calculator.add("1,5")).toBe(6);
        expect(calculator.add("0,3,7")).toBe(10);
    });

});
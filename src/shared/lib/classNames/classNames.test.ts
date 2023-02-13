import { classNames } from './classNames';

describe('classNames', () => {
    test('only className', () => {
        expect(classNames('TestClass')).toBe('TestClass');
    });
    test('className + mod', () => {
        const expectedClassname = 'TestClass round';
        expect(classNames('TestClass', { round: true })).toBe(expectedClassname);
    });
    test('className + mod + arr', () => {
        const expectedClassname = 'TestClass round red';
        expect(classNames('TestClass', { round: true }, ['red'])).toBe(expectedClassname);
    });
    test('className + different mods', () => {
        const expectedClassname = 'TestClass round';
        expect(classNames('TestClass', { round: true, hovered: false })).toBe(expectedClassname);
    });
    test('className + arr', () => {
        const expectedClassname = 'TestClass red green';
        expect(classNames('TestClass', {}, ['red', 'green'])).toBe(expectedClassname);
    });
});

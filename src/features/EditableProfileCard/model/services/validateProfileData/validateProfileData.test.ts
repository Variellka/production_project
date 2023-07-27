import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ValidateProfileError } from 'entities/Profile';
import { validateProfileData } from './validateProfileData';

describe('validateProfileData.test', () => {
    test('all fields are correct', async () => {
        const result = validateProfileData({
            firstname: 'xenia',
            lastname: 'levchenko',
            age: 28,
            currency: Currency.BYN,
            country: Country.Belarus,
        });
        expect(result).toEqual([]);
    });

    test('first or lastname incorrect', async () => {
        const result = validateProfileData({
            firstname: '',
            lastname: '',
            age: 28,
            currency: Currency.BYN,
            country: Country.Belarus,
        });
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });

    test('age incorrect', async () => {
        const result = validateProfileData({
            firstname: 'xenia',
            lastname: 'levchenko',
            age: NaN,
            currency: Currency.BYN,
            country: Country.Belarus,
        });
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });

    test('age and names are incorrect', async () => {
        const result = validateProfileData({
            firstname: '',
            lastname: '',
            age: NaN,
            currency: Currency.BYN,
            country: Country.Belarus,
        });
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });

    test('no data', async () => {
        const result = validateProfileData();
        expect(result).toEqual([
            ValidateProfileError.NO_DATA,
        ]);
    });
});

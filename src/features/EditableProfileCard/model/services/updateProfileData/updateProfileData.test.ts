import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ValidateProfileError } from 'entities/Profile';
import { updateProfileData } from './updateProfileData';
import { validateProfileData } from '../validateProfileData/validateProfileData';

const data = {
    firstname: 'xenia',
    lastname: 'levchenko',
    age: 28,
    currency: Currency.BYN,
    country: Country.Belarus,
    city: 'minsk',
    username: 'admin',
    // eslint-disable-next-line max-len
    avatar: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg',
};

describe('updateProfileData.test', () => {
    test('put user data', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                profileForm: data,
                isLoading: false,
                readonly: true,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk();
        const errors = validateProfileData(data);

        expect(errors).toEqual([]);
        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('validate error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                profileForm: { ...data, firstname: '', lastname: '' },
                isLoading: false,
                readonly: true,
            },
        });
        const errors = validateProfileData({ ...data, firstname: '', lastname: '' });

        expect(errors).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
        expect(thunk.api.put).not.toHaveBeenCalled();
    });

    test('server error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                profileForm: data,
                isLoading: false,
                readonly: true,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            ValidateProfileError.SERVER_ERROR,
        ]);
    });
});

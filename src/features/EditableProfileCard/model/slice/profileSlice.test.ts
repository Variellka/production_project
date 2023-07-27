import { ProfileSchema, ValidateProfileError } from 'entities/Profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { profileActions, profileReducer } from './profileSlice';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const data = {
    firstname: 'xenia',
    lastname: 'levchenko',
    age: 28,
    currency: Currency.BYN,
    country: Country.Belarus,
    city: 'minsk',
    username: 'admin',
};

describe('profileSlice.test', () => {
    test('setReadonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: true };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(false),
        )).toEqual({ readonly: false });
    });

    test('cancelEdit', () => {
        const state: DeepPartial<ProfileSchema> = {
            profileForm: { firstname: 'hanna' },
            profileData: data,
            readonly: false,
        };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit(),
        )).toEqual({
            profileForm: data,
            profileData: data,
            readonly: true,
            validateErrors: undefined,
        });
    });

    test('updateProfile', () => {
        const state: DeepPartial<ProfileSchema> = {
            profileForm: { firstname: 'hanna' },
        };

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({ firstname: 'hanna' }),
        )).toEqual({
            profileForm: { firstname: 'hanna' },
        });
    });

    test('updateProfileData pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.INCORRECT_USER_DATA],
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });

    test('updateProfileData fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            profileData: { firstname: 'xenia' },
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled({
                firstname: 'hanna',
            }, ''),
        )).toEqual({
            isLoading: false,
            profileData: { firstname: 'hanna' },
            profileForm: { firstname: 'hanna' },
            readonly: true,
            validateErrors: undefined,
        });
    });
});

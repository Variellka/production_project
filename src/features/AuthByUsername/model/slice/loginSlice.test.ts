import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlise.test', () => {
    test('username', () => {
        const state: DeepPartial<LoginSchema> = {
            username: 'admin',
        };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.changeUsername('123'),
        )).toEqual({ username: '123' });
    });

    test('password', () => {
        const state: DeepPartial<LoginSchema> = {
            password: '123',
        };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.changePassword('456'),
        )).toEqual({ password: '456' });
    });
});

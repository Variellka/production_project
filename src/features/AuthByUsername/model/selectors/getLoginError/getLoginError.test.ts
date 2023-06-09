import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError.test', () => {
    test('', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: 'User not found',
            },
        };
        expect(getLoginError(state as StateSchema)).toEqual('User not found');
    });

    test('', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginError(state as StateSchema)).toEqual(undefined);
    });
});
